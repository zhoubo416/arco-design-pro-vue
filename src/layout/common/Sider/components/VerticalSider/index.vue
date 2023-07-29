<template>
  <!--  <dark-mode-container class="flex-col-stretch h-full" :inverted="getSiderInverted">-->
  <!--  <a-layout-sider-->
  <!--    class="layout-sider"-->
  <!--    hide-trigger-->
  <!--    collapsible-->
  <!--    :collapsed="!isVerticalMix ? getSiderCollapsed : false"-->
  <!--    :style="{-->
  <!--      width: headerLeft + 'px',-->
  <!--      paddingTop: !isHorizontalMix ? 0 : getHeaderHeight + 'px',-->
  <!--    }"-->
  <!--    v-if="siderVisible"-->
  <!--  >-->
  <div :style="getHiddenDomStyle"> </div>
  <a-layout-sider
    class="layout-sider"
    :collapsed="getLayoutSiderCollapsed"
    :style="getLayoutSiderStyle"
    collapsible
    hide-trigger
  >
    <Logo
      v-if="!isHorizontalMix"
      :show-title="showTitle"
      :png-logo="LogoPng"
      :style="{ height: getHeaderHeight + 'px' }"
    />
    <Menu :menus="routeStore.menus" :mode="'vertical'" />
  </a-layout-sider>
  <!--  </dark-mode-container>-->
</template>

<script lang="ts" setup>
  import { computed, unref } from 'vue';
  import { useRouteStore } from '@/store';
  import { Logo, Menu } from '@/layout/common';
  import LogoPng from '@/assets/logo.png';
  import { useLayoutSetting, useSidleSetting, useHeaderSetting, useMenuSetting } from '@/hooks';

  const routeStore = useRouteStore();

  const { getLayoutMode, isVerticalMix } = useLayoutSetting();
  const { getSiderCollapsed, getSiderInverted } = useSidleSetting();
  const { getHeaderHeight } = useHeaderSetting();
  const { getRealWidth } = useMenuSetting();

  const isHorizontalMix = computed(() => unref(getLayoutMode) === 'horizontal-mix');
  const showTitle = computed(
    () => !unref(getSiderCollapsed) && unref(getLayoutMode) !== 'vertical-mix'
  );

  // 遮罩层样式
  const getHiddenDomStyle = computed(() => {
    const width = `${unref(getRealWidth)}px`;
    return {
      width: width,
      overflow: 'hidden',
      flex: `0 0 ${width}`,
      maxWidth: width,
      minWidth: width,
      transition: 'all 0.2s',
    };
  });

  // 获取侧边栏是否折叠
  const getLayoutSiderCollapsed = computed(() => {
    return !unref(isVerticalMix) ? unref(getSiderCollapsed) : false;
  });

  // 获取侧边栏样式
  const getLayoutSiderStyle = computed(() => {
    return {
      width: `${unref(getRealWidth)}px`,
      paddingTop: !unref(isHorizontalMix) ? 0 : `${unref(getHeaderHeight)}px`,
    };
  });
</script>

<style lang="less" scoped>
  .logo {
    height: 32px;
    margin: 12px 8px;
    //background: rgba(255, 255, 255, 0.2);
    //background-color: var(--color-bg-2);
  }

  .layout-sider {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    height: 100%;
    //transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  }
</style>
