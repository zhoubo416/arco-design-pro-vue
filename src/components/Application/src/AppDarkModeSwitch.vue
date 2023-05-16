<template>
  <!-- 切换模式 MODE SWITCH -->
  <div class="flex-center cursor-pointer text-[var(--color-text-1)]">
    <a-button
      v-if="!isSwitch"
      class="!bg-transparent w-full !text-[var(--color-text-1)]"
      shape="round"
      @click="handleToggleTheme()"
    >
      <template #icon>
        <icon-moon-fill class="text-20px" v-if="isDark" />
        <icon-sun-fill class="text-20px" v-else />
      </template>
    </a-button>

    <a-switch :model-value="!isDark" @change="handleToggleTheme()" v-else>
      <template #checked-icon>
        <icon-moon-fill />
      </template>
      <template #unchecked-icon>
        <icon-sun-fill class="!text-[var(--color-text-1)]" />
      </template>
    </a-switch>
  </div>
</template>

<script setup lang="ts">
  import { useDark, useToggle } from '@vueuse/core';
  import { unref } from 'vue';
  import { ThemeEnum } from '@/enums';

  interface Props {
    isSwitch?: boolean;
  }

  withDefaults(defineProps<Props>(), { isSwitch: false });

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
