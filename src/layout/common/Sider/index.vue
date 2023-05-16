<template>
  <div v-if="!isVerticalMix" :style="getHiddenDomStyle"> </div>
  <a-layout-sider
    class="layout-sider"
    hide-trigger
    collapsible
    :collapsed="!isVerticalMix ? getSiderCollapsed : false"
    :style="{
      width: headerLeft + 'px',
      paddingTop: !isHorizontalMix ? 0 : getHeaderHeight + 'px',
    }"
    v-if="siderVisible"
  >
    <VerticalMixSider v-if="isVerticalMix" />
    <VerticalSider v-else />
  </a-layout-sider>
</template>

<script lang="ts" setup>
  import { computed, unref } from 'vue';
  import { useLayoutSetting } from '@/hooks';
  import { VerticalMixSider, VerticalSider } from './components';
  import { useHeaderSetting } from '@/hooks/setting/useHeaderSetting';
  import { useSidleSetting } from '@/hooks';

  const { getSiderCollapsed } = useSidleSetting();
  const { getHeaderHeight } = useHeaderSetting();
  const { isVerticalMix, isHorizontalMix, siderVisible, siderWidth, siderCollapsedWidth } =
    useLayoutSetting();

  const headerLeft = computed((): number => {
    return unref(getSiderCollapsed) ? siderCollapsedWidth.value : siderWidth.value;
  });

  const getHiddenDomStyle = computed(() => {
    const width = headerLeft.value + 'px';

    return {
      // width: width,
      // overflow: 'hidden',
      // flex: `0 0 ${width}`,
      // maxWidth: width,
      // minWidth: width,
      // transition: 'all 2s',
    };
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
