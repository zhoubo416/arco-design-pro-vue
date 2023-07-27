<template>
  <!--手机端-->

  <!--PC端-->
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
  <VerticalMixSider v-if="isVerticalMix" />
  <VerticalSider v-else />
  <!--  </a-layout-sider>-->
</template>

<script lang="ts" setup>
  import { useLayoutSetting } from '@/hooks';
  import { VerticalMixSider, VerticalSider } from './components';
  import { useHeaderSetting } from '@/hooks/setting/useHeaderSetting';
  import { useSidleSetting } from '@/hooks';
  import { computed, unref } from 'vue';

  const { getSiderCollapsed, getSiderCollapsedCountWidth, getSiderCountWidth } = useSidleSetting();
  const { getHeaderHeight } = useHeaderSetting();
  const { isVerticalMix, isHorizontalMix } = useLayoutSetting();

  const headerLeft = computed((): number => {
    return unref(getSiderCollapsed)
      ? unref(getSiderCollapsedCountWidth)
      : unref(getSiderCountWidth);
  });
</script>

<style lang="less" scoped>
  .arco-layout-sider {
    z-index: 5;
    //background-color: var(--color-bg-2);
  }

  :deep(.arco-layout-sider-children) {
    overflow: visible;
  }
</style>
