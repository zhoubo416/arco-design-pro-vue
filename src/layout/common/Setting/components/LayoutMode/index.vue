<template>
  <a-divider orientation="center">{{ $t('settings.navbar.layout') }}</a-divider>
  <a-space fill>
    <layout-checkbox
      v-for="item in theme.layout.modeList"
      :key="item.value"
      :mode="item.value"
      :label="item.label"
      :checked="item.value === getLocale.language"
      @click="theme.setLayoutMode(item.value)"
    />
  </a-space>
</template>

<script setup lang="ts">
  import { LayoutCheckbox } from './components';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';

  const { getLocale } = useAppSetting();
</script>
<style scoped></style>
