<template>
  <a-layout-sider
    class="layout-sider"
    hide-trigger
    collapsible
    :collapsed="!isVerticalMix ? siderCollapsed : false"
    :style="{
      width: headerLeft + 'px',
      paddingTop: !isHorizontalMix ? 0 : headerHeight + 'px',
    }"
    v-if="siderVisible"
  >
    <VerticalMixSider v-if="isVerticalMix" />
    <VerticalSider v-else />
  </a-layout-sider>
</template>

<script lang="ts" setup>
  import { computed, unref } from 'vue';
  import { useBasicLayout } from '@/composables';
  import { VerticalMixSider, VerticalSider } from './components';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';

  const { siderVisible, siderWidth, siderCollapsedWidth } = useBasicLayout();
  const { getLayoutSetting, getSiderSetting, getHeaderSetting } = useAppSetting();

  const { mode: layoutMode } = unref(getLayoutSetting);
  const { collapsed: siderCollapsed } = unref(getSiderSetting);
  const { height: headerHeight } = unref(getHeaderSetting);

  const isVerticalMix = computed(() => layoutMode === 'vertical-mix');
  const isHorizontalMix = computed(() => layoutMode === 'horizontal-mix');

  const headerLeft = computed((): number => {
    return siderCollapsed ? siderCollapsedWidth.value : siderWidth.value;
  });
</script>

<style lang="less" scoped>
  .arco-layout-sider {
    z-index: 5;
    //background-color: var(--color-bg-2);
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
  }

  :deep(.arco-layout-sider-children) {
    overflow: visible;
  }
</style>
