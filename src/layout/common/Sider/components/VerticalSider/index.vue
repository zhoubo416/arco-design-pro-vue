<template>
  <dark-mode-container class="flex-col-stretch h-full" :inverted="getSiderInverted">
    <Logo
      v-if="!isHorizontalMix"
      :show-title="showTitle"
      :png-logo="LogoPng"
      :style="{ height: getHeaderHeight + 'px' }"
    />
    <Menu :menus="routeStore.menus" :mode="'vertical'" />
  </dark-mode-container>
</template>

<script lang="ts" setup>
  import { computed, unref } from 'vue';
  import { useRouteStore } from '@/store';
  import { Logo, Menu } from '@/layout/common';
  import LogoPng from '@/assets/logo.png';
  import DarkModeContainer from '@/components/common/DarkModeContainer.vue';
  import { useHeaderSetting } from '@/hooks/setting/useHeaderSetting';
  import { useLayoutSetting, useSidleSetting } from '@/hooks';

  const routeStore = useRouteStore();

  const { getLayoutMode } = useLayoutSetting();
  const { getSiderCollapsed, getSiderInverted } = useSidleSetting();
  const { getHeaderHeight } = useHeaderSetting();

  const isHorizontalMix = computed(() => unref(getLayoutMode) === 'horizontal-mix');
  const showTitle = computed(
    () => !unref(getSiderCollapsed) && unref(getLayoutMode) !== 'vertical-mix'
  );
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
