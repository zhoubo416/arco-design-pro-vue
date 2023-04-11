<template>
  <div class="logo action" @click="goHome">
    <img alt="logo" src="@/assets/svg/logo.svg" />
    <div class="ml-2 truncate md:opacity-100 w-100px text-[#111]" v-show="showTitle">{{
      title
    }}</div>
  </div>
</template>

<script lang="ts" setup>
  import { PageEnum } from '@/enums';
  import { useGo } from '@/hooks/web/usePage';
  import { useAuthStore } from '@/store';

  const props = defineProps({
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

  const go = useGo();

  // const { prefixCls } = useDesign('app-logo');
  // const { getCollapsedShowTitle } = useMenuSetting();
  const userStore = useAuthStore();
  // const { title } = useAppStore();
  const title = 'Arco Design Pro';
  const goHome = () => {
    go(userStore.userInfo.homePath || PageEnum.BASE_HOME);
  };
</script>

<style lang="less" scoped></style>
