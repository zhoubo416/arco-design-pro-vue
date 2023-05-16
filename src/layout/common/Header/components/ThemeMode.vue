<!--主题模式-->

<template>
  <hover-container class="w-40px" :inverted="getHeaderInverted" tooltip-content="主题模式">
    <AppDarkModeSwitch
      class="wh-full"
      style="color: var(--color-text-1)"
      @update:dark="setDarkMode"
    />
  </hover-container>
</template>

<script lang="ts" setup>
  import { AppDarkModeSwitch } from '@/components/Application';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';
  import HoverContainer from '@/components/common/HoverContainer.vue';
  import { useHeaderSetting } from '@/hooks/setting/useHeaderSetting';

  const { setDarkMode } = useAppSetting();
  const { getHeaderInverted } = useHeaderSetting();
</script>
<style scoped></style>
