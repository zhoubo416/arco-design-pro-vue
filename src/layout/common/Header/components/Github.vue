<template>
  <hover-container tooltip-content="github" class="w-40px h-full" :inverted="inverted">
    <a-button class="!bg-transparent" shape="round" @click="handleClickLink()">
      <template #icon>
        <icon-github class="text-20px" style="color: var(--color-text-1)" />
      </template>
    </a-button>
  </hover-container>
</template>

<script lang="ts" setup>
  import { useAppSetting } from '@/hooks/setting/useAppSetting';
  import { unref } from 'vue';
  import HoverContainer from '@/components/common/HoverContainer.vue';

  const { getHeaderSetting } = useAppSetting();
  const { inverted } = unref(getHeaderSetting);

  function handleClickLink() {
    window.open('https://github.com/LLiuHuan/arco-design-pro-vue', '_blank');
  }
</script>
<style scoped></style>
