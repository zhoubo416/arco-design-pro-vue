<template>
  <hover-container
    :tooltip-content="
      isFullscreen ? $t('settings.navbar.screen.toExit') : $t('settings.navbar.screen.toFull')
    "
    class="w-40px h-full"
    :inverted="inverted"
  >
    <a-button class="!bg-transparent" shape="round" @click="toggleFullScreen()">
      <template #icon>
        <icon-fullscreen
          v-if="!isFullscreen"
          class="text-20px"
          style="color: var(--color-text-1)"
        />
        <icon-fullscreen-exit v-else class="text-20px" style="color: var(--color-text-1)" />
      </template>
    </a-button>
  </hover-container>
</template>

<script lang="ts" setup>
  import { useFullscreen } from '@vueuse/core';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';
  import { unref } from 'vue';
  import HoverContainer from '@/components/common/HoverContainer.vue';

  const { isFullscreen, toggle: toggleFullScreen } = useFullscreen();
  const { getHeaderSetting } = useAppSetting();
  const { inverted } = unref(getHeaderSetting);

  defineExpose({ isFullscreen, toggleFullScreen });
</script>

<style lang="less" scoped></style>
