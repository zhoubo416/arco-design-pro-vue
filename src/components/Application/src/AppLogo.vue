<template>
  <div class="fixed inline-flex items-center z-9" @click="goHome">
    <img class="w-48px h-48px" alt="logo" src="@/assets/svg/logo.svg" />
    <div
      class="ml-2 truncate md:opacity-100 text-[rbg(var(--color-text-1))] text-24px"
      v-show="showTitle"
      >{{ title }}</div
    >
  </div>
</template>

<script lang="ts" setup>
  import { PageEnum } from '@/enums';
  import { useGo } from '@/hooks/web/usePage';
  import { useAuthStore } from '@/store';
  import { useGlobSetting } from '@/hooks/setting';

  defineProps({
    /**
     * The theme of the current parent component
     */
    theme: { type: String, validator: (v: string) => ['light', 'dark'].includes(v) },
    /**
     * Whether to show title
     */
    showTitle: { type: Boolean, default: true },
    /**
     * The title is also displayed when the menu is collapsed
     */
    alwaysShowTitle: { type: Boolean },
  });

  const { title } = useGlobSetting();
  const go = useGo();

  const userStore = useAuthStore();

  const goHome = () => {
    go(userStore.userInfo.homePath || PageEnum.BASE_HOME);
  };
</script>

<style lang="less" scoped></style>
