<template>
  <hover-container class="w-40px" :inverted="inverted" tooltip-content="主题模式">
    <!--    @update:dark="theme.setDarkMode"-->

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
  import { unref } from 'vue';

  const { getHeaderSetting, setDarkMode } = useAppSetting();
  const { inverted } = unref(getHeaderSetting);
</script>
<style scoped></style>
