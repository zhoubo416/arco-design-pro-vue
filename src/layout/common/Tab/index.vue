<template>
  <div :style="{ minHeight: getTabHeight + 'px' }"></div>
  <dark-mode-container
    class="arco-layout-tab"
    :class="getFixedHeaderAndMultiTab ? 'layout-tab-fixed' : 'layout-tab'"
    :style="{
      height: getTabHeight + 'px',
      top: getHeaderHeight + 'px',
      width: !siderVisible ? 0 : `calc(100% - ${tabLeft}px)`,
    }"
    v-if="getTabVisible"
  >
    <div class="layout-tab" :style="{ height: getTabHeight + 'px' }">
      <span
        class="tabs-card-prev"
        @click="scrollPrev"
        :class="{ 'tabs-card-prev-hide': !state.scrollable }"
      >
        <icon-left />
      </span>
      <div
        ref="navScroll"
        class="layout-tab-scroll flex-1"
        :class="{ 'layout-tab-scrollable': state.scrollable }"
      >
        <ContextMenu trigger="contextMenu" position="bl" alignPoint :style="{ display: 'block' }">
          <a-space>
            <Draggable :list="tab.tabs" animation="300" item-key="fullPath" class="flex" ref="flex">
              <template #item="{ element }">
                <div
                  :id="`tag${element.fullPath}`"
                  class="layout-tab-scroll-item"
                  :class="{ 'active-item': tab.activeTab === element.fullPath }"
                  :style="{ height: getTabHeight - 12 + 'px' }"
                  @click.stop="goPath(element.fullPath)"
                >
                  <span :class="{ activeTab: tab.activeTab === element.fullPath }">
                    {{ $t(element.meta.title) }}
                  </span>
                  <icon-close
                    v-if="!element.meta.affix"
                    @click.stop="tab.removeTab(element.fullPath)"
                    size="14"
                  />
                </div>
              </template>
            </Draggable>
          </a-space>
        </ContextMenu>
      </div>
      <span
        class="tabs-card-next"
        @click="scrollNext"
        :class="{ 'tabs-card-next-hide': !state.scrollable }"
      >
        <!--        <icon-left />-->
        <icon-left class="rotate-[180deg]" />
      </span>
    </div>
    <div class="layout-close">
      <div class="layout-close-btn">
        <ContextMenu position="bl" trigger="hover">
          <icon-down />
        </ContextMenu>
      </div>
    </div>
  </dark-mode-container>
</template>

<script lang="ts" setup>
  import { computed, nextTick, reactive, ref, unref } from 'vue';
  import { useRoute } from 'vue-router';
  import Draggable from 'vuedraggable';
  import { useEventListener } from '@vueuse/core';
  import { useTabStore } from '@/store';
  import { useLayoutSetting, useTabSetting, useAppSetting, useHeaderSetting } from '@/hooks';
  import { setTabRoutes } from '@/store/modules/tab/helpers';
  import ContextMenu from './components/ContextMenu.vue';
  import { listenerRouteChange } from '@/logics/mitt/routeChange';
  import DarkModeContainer from '@/components/common/DarkModeContainer.vue';
  import { useSidleSetting } from '@/hooks';

  const { getFixedHeaderAndMultiTab } = useAppSetting();
  const { getSiderCollapsed } = useSidleSetting();
  const { getTabHeight, getTabVisible } = useTabSetting();
  const tab = useTabStore();
  const { siderWidth, siderCollapsedWidth, siderVisible } = useLayoutSetting();
  const { getHeaderHeight } = useHeaderSetting();

  // refs
  const navScroll = ref();

  const state = reactive({
    scrollable: ref(false),
    isMultiHeaderFixed: false,
  });

  const goPath = (path: string) => {
    tab.handleClickTab(path);
    // router.push(path);
  };

  const tabLeft = computed((): number => {
    // 固定多页签
    if (!unref(getFixedHeaderAndMultiTab)) {
      return 0;
    }
    return unref(getSiderCollapsed) ? siderCollapsedWidth.value : siderWidth.value;
  });

  function init() {
    tab.iniTabStore(useRoute());
    updateNavScroll(true);
  }

  /**
   * @param autoScroll 是否开启自动滚动功能
   */
  async function updateNavScroll(autoScroll?: boolean) {
    await nextTick();
    if (!navScroll.value) return;
    const containerWidth = navScroll.value.offsetWidth;
    const navWidth = navScroll.value.scrollWidth;

    if (containerWidth < navWidth) {
      state.scrollable = true;
      if (autoScroll) {
        const tagList = navScroll.value.querySelectorAll('.layout-tab-scroll-item') || [];
        [...tagList].forEach((tag: HTMLElement) => {
          // fix SyntaxError
          if (tag.id === `tag${tab.activeTab}`) {
            tag.scrollIntoView();
          }
        });
      }
    } else {
      state.scrollable = false;
    }
  }

  /**
   * @param value 要滚动到的位置
   * @param amplitude 每次滚动的长度
   */
  function scrollTo(value: number, amplitude: number) {
    const currentScroll = navScroll.value.scrollLeft;
    const scrollWidth =
      (amplitude > 0 && currentScroll + amplitude >= value) ||
      (amplitude < 0 && currentScroll + amplitude <= value)
        ? value
        : currentScroll + amplitude;
    navScroll.value.scrollTo(scrollWidth, 0);
    if (scrollWidth === value) return;
    window.requestAnimationFrame(() => scrollTo(value, amplitude));
  }

  // 滚动 左
  function scrollPrev() {
    const containerWidth = navScroll.value.offsetWidth;
    const currentScroll = navScroll.value.scrollLeft;

    if (!currentScroll) return;
    const scrollLeft = currentScroll > containerWidth ? currentScroll - containerWidth : 0;
    scrollTo(scrollLeft, (scrollLeft - currentScroll) / 20);
  }

  // 滚动 右
  function scrollNext() {
    const containerWidth = navScroll.value.offsetWidth;
    const navWidth = navScroll.value.scrollWidth;
    const currentScroll = navScroll.value.scrollLeft;

    if (navWidth - currentScroll <= containerWidth) return;
    const scrollLeft =
      navWidth - currentScroll > containerWidth * 2
        ? currentScroll + containerWidth
        : navWidth - containerWidth;
    scrollTo(scrollLeft, (scrollLeft - currentScroll) / 20);
  }

  // watch(
  //   () => route.fullPath,
  //   () => {
  //     tab.addTab(route);
  //     tab.setActiveTab(route.fullPath);
  //     updateNavScroll(true);
  //   }
  // );

  listenerRouteChange((route) => {
    console.log('TabIndex');
    tab.addTab(route);
    tab.setActiveTab(route.fullPath);
    updateNavScroll(true);
  });

  /** 页面离开时缓存多页签数据 */
  useEventListener(window, 'beforeunload', () => {
    setTabRoutes(tab.tabs);
  });

  // 初始化
  init();
</script>

<style lang="less" scoped>
  .arco-layout-tab {
    position: fixed;
    min-width: 900px;
    right: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    width: 100%;
    display: flex;

    border-bottom: 1px solid var(--color-border);

    .layout-tab {
      padding-top: 6px;
      padding-bottom: 6px;
      padding-left: 6px;
      display: flex;
      max-width: 100%;
      flex-grow: 1;
      flex-shrink: 1;
      overflow: hidden;
      position: relative;

      .tabs-card-prev,
      .tabs-card-next {
        width: 32px;
        height: calc(100% - 12px);
        text-align: center;
        position: absolute;
        line-height: 32px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 6;
        background-color: var(--color-bg-2);

        svg {
          height: 16px;
          width: 16px;
        }
      }

      .tabs-card-prev {
        left: 0;
      }

      .tabs-card-next {
        right: 0;
      }

      .tabs-card-next-hide,
      .tabs-card-prev-hide {
        display: none;
      }

      &-scroll {
        white-space: nowrap;
        overflow: hidden;

        &-item {
          background: var(--color-fill-2);
          color: var(--color-text-2);
          text-decoration: none;
          padding: 6px 16px 4px;
          border-radius: 3px;
          margin-right: 6px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          flex: 0 0 auto;

          span {
            float: left;
            vertical-align: middle;
          }

          &:hover {
            color: #515a6e;
          }

          &:hover {
            color: #515a6e !important;
          }

          svg {
            margin-left: 8px;
            display: inline-block;
          }
        }

        //.active-item {
        //  color: v-bind(getAppTheme);
        //}
      }

      .layout-tab-scrollable {
        padding: 0 32px;
        overflow: hidden;
      }
    }

    .layout-close {
      padding: 6px 0;
      width: 32px;
      height: 100%;
      cursor: pointer;
      z-index: 6;
      background-color: var(--color-bg-2);

      .layout-close-btn {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .layout-tab {
    position: static;
    z-index: 1001;
    transition: width 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
    transform: translateX(0px);
  }

  .layout-tab-fixed {
    position: fixed;
    z-index: 4;
    transition: width 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
    transform: translateX(0px);
  }

  .tabs-view-fix {
    position: fixed;
    z-index: 5;
    padding: 6px 19px 6px 10px;
    left: 200px;
  }

  .tabs-view-fixed-header {
    top: 0;
  }

  .activeTab {
    color: rgb(var(--arcoblue-6));
  }
</style>
