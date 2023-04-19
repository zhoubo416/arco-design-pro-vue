<template>
  <hover-container
    tooltip-content="设置"
    class="w-40px h-full"
    :inverted="headerInverted"
    @click="openSetting"
  >
    <icon-settings class="text-20px" style="color: var(--color-text-1)" />
  </hover-container>

  <Setting :visible="visible" @close="" />
</template>

<script lang="ts" setup>
  import { Setting } from '@/layout/common';
  import HoverContainer from '@/components/common/HoverContainer.vue';
  import { ref, unref } from 'vue';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';

  const { getHeaderSetting } = useAppSetting();

  const { inverted: headerInverted } = unref(getHeaderSetting);

  const visible = ref(false);

  const openSetting = () => {
    visible.value = true;
  };
</script>

<style lang="less" scoped></style>
