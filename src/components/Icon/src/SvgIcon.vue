<template>
  <svg
    :class="[prefixCls, $attrs.class, spin && 'svg-icon-spin']"
    :style="getStyle"
    aria-hidden="true"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script lang="ts" setup>
  import { computed, CSSProperties } from 'vue';
  import { useDesign } from '@/hooks/web/useDesign';

  interface Props {
    prefix?: string;
    name: string;
    size?: number | string;
    spin?: boolean;
  }

  const props = defineProps<Props>();

  const { prefixCls } = useDesign('svg-icon');
  const symbolId = computed(() => `#${props.prefix}-${props.name}`);

  const getStyle = computed((): CSSProperties => {
    const { size } = props;
    let s = `${size}`;
    s = `${s.replace('px', '')}px`;
    return {
      width: s,
      height: s,
    };
  });
</script>

<style lang="less" scoped>
  @prefix-cls: ~'@{nameCls}-svg-icon';

  .@{prefix-cls} {
    display: inline-block;
    overflow: hidden;
    fill: currentcolor;
    vertical-align: -0.15em;
  }

  .svg-icon-spin {
    animation: loadingCircle 1s infinite linear;
  }
</style>
