<template>
  <a-divider orientation="center">{{ $t('settings.navbar.layout') }}</a-divider>
  <a-space fill>
    <layout-checkbox
      v-for="item in layoutModeList"
      :key="item.value"
      :mode="item.value"
      :label="item.label"
      :checked="item.value === getLayoutMode"
      @click="setMode(item.value)"
    />
  </a-space>
</template>

<script setup lang="ts">
  import { LayoutCheckbox } from './components';
  import { EnumType } from '@/typings/system';
  import { useLayoutSetting } from '@/hooks';
  import { layoutModeList } from '@/settings';

  const { setLayoutMode, getLayoutMode } = useLayoutSetting();

  const setMode = (mode: EnumType.ThemeLayoutMode) => {
    setLayoutMode(mode);
  };
</script>
<style scoped></style>
