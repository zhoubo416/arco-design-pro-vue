<template>
  <div :class="{ 'p-16px': props.showPadding }" class="layout-main">
    <router-view class="transition duration-300 ease-in-out" v-slot="{ Component, route }">
      <transition :name="animateMode" mode="out-in" :appear="true">
        <keep-alive v-if="routeStore.cacheRoutes" :include="routeStore.cacheRoutes">
          <component :is="Component" :key="route.path" />
        </keep-alive>
        <component v-else :is="Component" :key="route.path" />
        <!--        <component :is="Component" :key="route.path" />-->
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
  import { unref } from 'vue';
  import { useRouteStore } from '@/store';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';

  interface Props {
    /** 显示padding */
    showPadding?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    showPadding: true,
  });

  const routeStore = useRouteStore();
  const { getPageSetting } = useAppSetting();
  const { animateMode } = unref(getPageSetting);

  // const getTransitionName = computed(() => {
  //   return theme.pageAnimateMode;
  // });
</script>

<style lang="less" scoped>
  @import './styles/index.module.less';
</style>
