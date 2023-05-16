<template>
  <a-divider orientation="center">{{ $t('settings.navbar.layout') }}</a-divider>
  <a-space fill>
    <layout-checkbox
      v-for="item in getLayoutModeList"
      :key="item.value"
      :mode="item.value"
      :label="item.label"
      :checked="item.value === getLocale.language"
      @click="setMode(item.value)"
    />
  </a-space>
</template>

<script setup lang="ts">
  import { LayoutCheckbox } from './components';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';
  import { EnumType } from '@/typings/system';
  import { useLayoutSetting } from '@/hooks';

  const { getLocale } = useAppSetting();

  const { getLayoutModeList, setLayoutMode } = useLayoutSetting();

  const setMode = (mode: EnumType.ThemeLayoutMode) => {
    setLayoutMode(mode);
  };
</script>
<style scoped></style>
