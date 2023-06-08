<template>
  <a-layout-footer style="color: var(--color-text-1)" :style="footerStyle">
    <div class="h-full w-full flex justify-center items-center"> ArcoDesignPro @ {{ year }} </div>
  </a-layout-footer>
</template>

<script lang="ts" setup>
  import { computed, unref } from 'vue';
  import { useFooterSetting, useSidleSetting } from '@/hooks';

  const date = new Date();
  const year = date.getFullYear();
  const { getFooterFixed, getFooterHeight } = useFooterSetting();
  const { getSiderWidth } = useSidleSetting();

  const footerStyle = computed(() => {
    if (unref(getFooterFixed)) {
      return {
        position: 'fixed',
        zIndex: 4,
        height: `${unref(getFooterHeight)}px`,
        minWidth: `calc(100% - ${unref(getSiderWidth)}px)`,
        transitionDuration: '300ms',
        transitionTimingFunction: 'ease-in-out',
        transform: 'translateX(0px)',
        right: 0,
        bottom: 0,
        'flex-shrink': 0,
        'box-sizing': 'border-box',
        width: '100%',
        'transition-property': 'padding-left',
        backgroundColor: 'var(--color-bg-1)',
      };
    }
    return {
      height: `${unref(getFooterHeight)}px`,
    };
  });
</script>

<style lang="less" scoped></style>
