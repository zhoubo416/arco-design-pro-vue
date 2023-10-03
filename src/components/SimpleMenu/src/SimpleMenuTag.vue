<template>
  <span :class="getTagClass" v-if="getShowTag">{{ getContent }}</span>
</template>

<script lang="ts" setup>
  import { Menu } from '@/router/types';
  import { useDesign } from '@/hooks/web/useDesign';
  import { computed } from 'vue';

  interface Props {
    item: Menu;
    dot?: boolean;
    collapseParent?: boolean;
  }

  const { prefixCls } = useDesign('simple-menu');

  const props = defineProps<Props>();

  const getShowTag = computed(() => {
    const { item } = props;

    if (!item) return false;

    const { tag } = item;
    if (!tag) return false;

    const { dot, content } = tag;
    return !(!dot && !content);
  });

  const getContent = computed(() => {
    if (!getShowTag.value) return '';
    const { item, collapseParent } = props;
    const { tag } = item;
    const { dot, content } = tag!;
    return dot || collapseParent ? '' : content;
  });

  const getTagClass = computed(() => {
    const { item, collapseParent } = props;
    const { tag = {} } = item || {};
    const { dot, type = 'error' } = tag;
    const tagCls = `${prefixCls}-tag`;
    return [
      tagCls,

      [`${tagCls}--${type}`],
      {
        [`${tagCls}--collapse`]: collapseParent,
        [`${tagCls}--dot`]: dot || props.dot,
      },
    ];
  });
</script>

<style lang="less" scoped></style>
