<template>
  <a-layout class="admin-layout">
    <!--功能类-->
    <!--只有顶部菜单混合模式才显示-->
    <LayoutHeader v-if="getLayoutMode === 'horizontal-mix'" v-bind="headerProps" />
    <a-layout
      class="layout-body"
      :class="{ 'h-full overscroll-y-auto': getLayoutMode !== 'horizontal-mix' }"
    >
      <!--左侧菜单 默认左右分割-->
      <Sider />
      <a-layout>
        <!--顶部菜单 非顶部菜单混合模式展示-->
        <LayoutHeader v-show="getLayoutMode !== 'horizontal-mix'" v-bind="headerProps" />
        <!--Tab 一会合并到Header里-->
        <Tab />
        <!--内容区域-->
        <Content />
        <!--底部区域-->
        <Footer />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
  import { computed, unref } from 'vue';
  import { useLayoutSetting } from '@/hooks';
  import { Sider, LayoutHeader, Tab, Content, Footer } from '@/layout/common';
  import { setBaseColor } from '@/utils/color';
  import {
    useSidleSetting,
    useTabSetting,
    useFooterSetting,
    useHeaderSetting,
    useAppSetting,
  } from '@/hooks';

  // 默认左右分割布局

  const { headerProps, getLayoutMode } = useLayoutSetting();
  // TODO: 需要修改
  const { getFixedHeaderAndMultiTab, getThemeColor } = useAppSetting();

  const { getHeaderHeight: headHeight } = useHeaderSetting();
  const { getTabVisible, getTabHeight } = useTabSetting();

  // const { getShowSettingButton } = useAppSetting();
  // const theme = useThemeStore();
  // const appStore = useAppStore();
  // const { siderWidth, siderCollapsedWidth } = useSider();
  // const headerLeft = computed((): number => {
  //   return app.siderCollapse ? siderCollapsedWidth.value : siderWidth.value;
  // });

  const getHeaderHeight = computed((): number => {
    let headerHeight = unref(headHeight);
    if (unref(getTabVisible)) {
      headerHeight += unref(getTabHeight);
    }
    if (!unref(getFixedHeaderAndMultiTab)) {
      headerHeight = 0;
    }
    return headerHeight;
  });

  const init = () => {
    setBaseColor(unref(getThemeColor));
  };

  init();
</script>

<style lang="less" scoped>
  .admin-layout {
    height: 100%;
    width: 100%;
  }
</style>
