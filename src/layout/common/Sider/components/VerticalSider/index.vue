<template>
  <div v-if="getMenuFixed" :style="getHiddenDomStyle"> </div>
  <!--  width-->
  <!--  :style="getLayoutSiderStyle"-->
  <a-layout-sider
    ref="layoutSiderRef"
    :class="getSiderClass"
    :collapsed="getLayoutSiderCollapsed"
    :width="getSiderWidth"
    :collapsed-width="getSiderCollapsedWidth"
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
</template>

<script lang="ts" setup>
  import { computed, unref } from 'vue';
  import { useRouteStore } from '@/store';
  import { Logo, Menu } from '@/layout/common';
  import LogoPng from '@/assets/logo.png';
  import { useLayoutSetting, useSidleSetting, useHeaderSetting, useMenuSetting } from '@/hooks';
  import { useDesign } from '@/hooks/web/useDesign';

  const routeStore = useRouteStore();

  const { getLayoutMode, isVerticalMix } = useLayoutSetting();
  const { getSiderCollapsed, getSiderInverted, getSiderWidth, getSiderCollapsedWidth } =
    useSidleSetting();
  const { getHeaderHeight } = useHeaderSetting();
  const { getRealWidth, getMenuFixed } = useMenuSetting();

  const { prefixCls } = useDesign('layout-sider');

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

  const getSiderClass = computed(() => {
    return [
      prefixCls,
      {
        [`${prefixCls}--fixed`]: unref(getMenuFixed),
        // [`${prefixCls}--mix`]: unref(getIsMixMode) && !unref(getIsMobile),
      },
    ];
  });
</script>

<style lang="less" scoped>
  @prefix-cls: ~'@{nameCls}-layout-sider';

  .@{prefix-cls} {
    z-index: @layout-sider-fixed-z-index;
    //background-color: var(--color-bg-2);

    &--fixed {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      height: 100%;
    }
  }

  .logo {
    height: 32px;
    margin: 12px 8px;
    //background: rgba(255, 255, 255, 0.2);
    //background-color: var(--color-bg-2);
  }

  //.layout-sider {
  //  position: fixed;
  //  top: 0;
  //  left: 0;
  //  z-index: 99;
  //  height: 100%;
  //  //transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  //}
</style>
