<template>
  <dark-mode-container class="flex-col-stretch h-full" :inverted="siderInverted">
    <Logo
      v-if="!isHorizontalMix"
      :show-title="showTitle"
      :png-logo="LogoPng"
      :style="{ height: headerHeight + 'px' }"
    />
    <Menu :menus="routeStore.menus" :mode="'vertical'" />
  </dark-mode-container>
</template>

<script lang="ts" setup>
  import { computed, unref } from 'vue';
  import { useRouteStore } from '@/store';
  import { Logo, Menu } from '@/layout/common';
  import LogoPng from '@/assets/logo.png';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';
  import DarkModeContainer from '@/components/common/DarkModeContainer.vue';

  const routeStore = useRouteStore();

  const { getLayoutSetting, getSiderSetting, getHeaderSetting } = useAppSetting();
  const { mode: layoutMode } = unref(getLayoutSetting);
  const { collapsed: siderCollapsed, inverted: siderInverted } = unref(getSiderSetting);
  const { height: headerHeight } = unref(getHeaderSetting);

  const isHorizontalMix = computed(() => layoutMode === 'horizontal-mix');
  const showTitle = computed(() => !siderCollapsed && layoutMode !== 'vertical-mix');
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
    transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  }
</style>
