<template>
  <hover-container
    tooltip-content="github"
    class="w-40px h-full"
    :inverted="inverted"
    @click="handleClickLink"
  >
    <icon-github class="text-20px" style="color: var(--color-text-1)" />
  </hover-container>
</template>

<script lang="ts" setup>
  import { useAppSetting } from '@/hooks/setting/useAppSetting';
  import { unref } from 'vue';

  const { getHeaderSetting } = useAppSetting();
  const { inverted } = unref(getHeaderSetting);

  function handleClickLink() {
    window.open('https://github.com/LLiuHuan/arco-design-pro-vue', '_blank');
  }
</script>
<style scoped></style>
