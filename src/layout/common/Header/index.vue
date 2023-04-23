<template>
  <a-layout-header
    :class="getFixedHeaderAndMultiTab ? 'layout-header-fixed' : 'layout-header'"
    :style="{
      height: headerHeight + 'px',
      paddingLeft: siderVisible ? headerLeft + 'px' : 0,
      zIndex: layoutMode === 'horizontal-mix' ? '6' : '4',
    }"
  >
    <dark-mode-container class="header flex-y-center h-full" :inverted="headerInverted">
      <Logo
        v-if="props.showLogo"
        :show-title="true"
        :png-logo="LogoPng"
        class="h-full"
        :style="{ width: width + 'px' }"
      />
      <div v-if="!props.showHeaderMenu" class="flex-1-hidden flex-y-center h-full">
        <MenuCollapse v-if="props.showMenuCollapse" />
        <Breadcrumb v-if="headerCrumb.visible" />
      </div>
      <div
        v-else
        class="flex-y-center h-full flex-1"
        :style="{ justifyContent: horizontalPosition }"
      >
        <!--        <HeaderMenu />-->
        <Menu :menus="routeStore.menus" :mode="'horizontal'" />
      </div>
      <div class="flex justify-end h-full pr-30px ribbon">
        <Github />
        <ThemeModel />
        <Locale />
        <Fullscreen />
        <Setting v-if="getShowSettingButton" />
        <User class="user" />
      </div>
    </dark-mode-container>
  </a-layout-header>
</template>

<script lang="ts" setup>
  import { computed, unref } from 'vue';
  import { useRouteStore } from '@/store';
  import { useBasicLayout } from '@/composables';
  import { Logo, Menu } from '@/layout/common';
  import LogoPng from '@/assets/logo.png';
  import {
    Breadcrumb,
    MenuCollapse,
    Github,
    ThemeModel,
    Locale,
    Fullscreen,
    User,
    Setting,
  } from './components';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';
  import DarkModeContainer from '@/components/common/DarkModeContainer.vue';
  import type { GlobalHeaderProps } from '@/typings/system';

  interface Props {
    /** 显示logo */
    showLogo: GlobalHeaderProps['showLogo'];
    /** 显示头部菜单 */
    showHeaderMenu: GlobalHeaderProps['showHeaderMenu'];
    /** 显示菜单折叠按钮 */
    showMenuCollapse: GlobalHeaderProps['showMenuCollapse'];
  }

  const props = defineProps<Props>();

  const {
    getHeaderSetting,
    getLayoutSetting,
    getSiderSetting,
    getMenuSetting,
    getFixedHeaderAndMultiTab,
  } = useAppSetting();

  const {
    height: headerHeight,
    inverted: headerInverted,
    crumb: headerCrumb,
  } = unref(getHeaderSetting);
  const { mode: layoutMode } = unref(getLayoutSetting);
  const { collapsed: siderCollapsed, width } = unref(getSiderSetting);
  const { horizontalPosition } = unref(getMenuSetting);

  const routeStore = useRouteStore();
  const { getShowSettingButton } = useAppSetting();

  const { siderVisible } = useBasicLayout();

  const headerLeft = computed((): number => {
    if (!getFixedHeaderAndMultiTab) return 0;
    if (layoutMode.includes('horizontal-mix')) return 0;
    const { siderWidth, siderCollapsedWidth } = useBasicLayout();
    return siderCollapsed ? siderCollapsedWidth.value : siderWidth.value;
  });
</script>

<style lang="less" scoped>
  .arco-layout-header {
    position: fixed;
    z-index: 1001;
    flex-shrink: 0;
    box-sizing: border-box;
    transition-property: padding-left;
    border-bottom: 1px solid var(--color-border);
  }

  .layout-header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: width 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
    transform: translateX(0px);
  }

  .layout-header {
    position: static;
    transition: width 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
    transform: translateX(0px);
    width: 100%;
  }
</style>
