<template>
  <a-divider orientation="center">{{ $t('settings.navbar.layout') }}</a-divider>
  <a-space fill>
    <layout-checkbox
      v-for="item in modeList"
      :key="item.value"
      :mode="item.value"
      :label="item.label"
      :checked="item.value === getLocale.language"
      @click="setLayoutMode(item.value)"
    />
  </a-space>
</template>

<script setup lang="ts">
  import { LayoutCheckbox } from './components';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';
  import { unref } from 'vue';

  const { getLocale, getLayoutSetting, setLayoutMode } = useAppSetting();

  const { modeList } = unref(getLayoutSetting);
</script>
<style scoped></style>
