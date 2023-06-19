<template>
  <a-layout-content>
    <div :class="{ 'p-16px': props.showPadding }" class="layout-main">
      <router-view class="transition duration-300 ease-in-out" v-slot="{ Component, route }">
        <transition :name="getPageAnimateMode" mode="out-in" :appear="true">
          <keep-alive v-if="routeStore.cacheRoutes" :include="routeStore.cacheRoutes">
            <component :is="Component" :key="route.path" />
          </keep-alive>
          <component v-else :is="Component" :key="route.path" />
          <!--        <component :is="Component" :key="route.path" />-->
        </transition>
      </router-view>
    </div>
  </a-layout-content>
</template>

<script lang="ts" setup>
  import { useRouteStore } from '@/store';
  import { usePageSetting } from '@/hooks';

  interface Props {
    /** 显示padding */
    showPadding?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    showPadding: true,
  });

  const routeStore = useRouteStore();
  const { getPageAnimateMode } = usePageSetting();
</script>

<style lang="less" scoped>
  @import './styles/index.module.less';
</style>
