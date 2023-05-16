<template>
  <hover-container
    :tooltip-content="
      isFullscreen ? $t('settings.navbar.screen.toExit') : $t('settings.navbar.screen.toFull')
    "
    class="w-40px h-full"
    :inverted="getHeaderInverted"
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
  import HoverContainer from '@/components/common/HoverContainer.vue';
  import { useHeaderSetting } from '@/hooks/setting/useHeaderSetting';

  const { isFullscreen, toggle: toggleFullScreen } = useFullscreen();
  const { getHeaderInverted } = useHeaderSetting();

  defineExpose({ isFullscreen, toggleFullScreen });
</script>

<style lang="less" scoped></style>
