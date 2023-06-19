<template>
  <!-- 切换模式 MODE SWITCH -->
  <div class="flex-center cursor-pointer text-[var(--color-text-1)]">
    <a-button
      v-if="!isSwitch"
      class="!bg-transparent w-full !text-[var(--color-text-1)]"
      shape="round"
      @click="handleToggleTheme"
    >
      <template #icon>
        <icon-moon-fill class="text-20px" v-if="isDark" />
        <icon-sun-fill class="text-20px" v-else />
      </template>
    </a-button>

    <!--    <a-switch :model-value="!isDark" @change="handleToggleTheme" v-else>-->
    <!--      <template #checked-icon>-->
    <!--        <icon-moon-fill />-->
    <!--      </template>-->
    <!--      <template #unchecked-icon>-->
    <!--        <icon-sun-fill class="!text-[var(&#45;&#45;color-text-1)]" />-->
    <!--      </template>-->
    <!--    </a-switch>-->
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
    // attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light',
    storageKey: 'arco-theme',
    // storageKey: 'class',
    onChanged(dark: boolean) {
      if (unref(dark)) {
        emit('update:dark', ThemeEnum.DARK);
      } else {
        emit('update:dark', ThemeEnum.LIGHT);
      }
    },
  });
  const toggleTheme = useToggle(isDark);
  const handleToggleTheme = (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    // @ts-expect-error: Transition API
    if (!document.startViewTransition) {
      toggleTheme();
      return;
    }
    // @ts-expect-error: Transition API
    const transition = document.startViewTransition(() => {
      toggleTheme();
    });
    transition.ready.then(() => {
      const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
      console.log(unref(isDark) ? clipPath : [...clipPath].reverse());
      console.log(unref(isDark));
      document.documentElement.animate(
        {
          clipPath: unref(isDark) ? clipPath : [...clipPath].reverse(),
        },
        {
          duration: 300,
          easing: 'ease-in',
          pseudoElement: unref(isDark)
            ? '::view-transition-new(root)'
            : '::view-transition-old(root)',
        }
      );
    });
  };
</script>
<style>
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
  }
  ::view-transition-old(root) {
    z-index: 9999;
  }
  ::view-transition-new(root) {
    z-index: 1;
  }
  .dark::view-transition-old(root) {
    z-index: 1;
  }
  .dark::view-transition-new(root) {
    z-index: 9999;
  }
</style>
