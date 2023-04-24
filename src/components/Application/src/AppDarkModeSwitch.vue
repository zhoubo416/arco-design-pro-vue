<template>
  <!-- 切换模式 MODE SWITCH -->
  <div
    class="flex-center text-18px cursor-pointer text-[var(--color-text-1)]"
    @click="handleToggleTheme"
  >
    <icon-moon-fill v-if="isDark" />
    <icon-sun-fill v-else />
  </div>
</template>

<script setup lang="ts">
  import { useDark, useToggle } from '@vueuse/core';
  import { unref } from 'vue';
  import { ThemeEnum } from '@/enums';

  interface Emits {
    (e: 'update:dark', darkMode: ThemeEnum): void;
  }

  const emit = defineEmits<Emits>();

  const isDark = useDark({
    selector: 'body',
    attribute: 'arco-theme',
    valueDark: 'dark',
    valueLight: 'light',
    storageKey: 'arco-theme',
    onChanged(dark: boolean) {
      // overridden default behavior
      // emit('update:dark', dark);
      if (unref(dark)) {
        emit('update:dark', ThemeEnum.LIGHT);
      } else {
        emit('update:dark', ThemeEnum.DARK);
      }
    },
  });
  const toggleTheme = useToggle(isDark);
  const handleToggleTheme = () => {
    toggleTheme();
  };
</script>
<style scoped></style>
