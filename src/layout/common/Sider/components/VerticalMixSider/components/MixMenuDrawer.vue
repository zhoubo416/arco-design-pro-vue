<template>
  <div
    class="relative h-full transition-width duration-300 ease-in-out"
    :style="{ width: mixSiderFixed ? mixChildMenuWidth + 'px' : '0px' }"
  >
    <dark-mode-container
      class="drawer-shadow absolute-lt flex-col-stretch h-full nowrap-hidden"
      :style="{ width: showDrawer ? mixChildMenuWidth + 'px' : '0px' }"
    >
      <header
        class="header-height flex-y-center justify-between"
        :style="{ height: height + 'px' }"
      >
        <h2 class="text-primary pl-8px text-16px font-bold">{{ title }}</h2>
        <!--        @click="app.toggleMixSiderFixed"-->
        <div class="px-8px text-16px text-gray-600 cursor-pointer">
          <icon-mdi-pin-off v-if="mixSiderFixed" />
          <icon-mdi-pin v-else />
        </div>
      </header>
      <div class="flex-1-hidden">
        <Menu :menus="menus" />
      </div>
    </dark-mode-container>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, watch, unref } from 'vue';
  import { useRoute } from 'vue-router';
  import { useAppStore } from '@/store';
  import { useAppInfo } from '@/composables';
  import { getActiveKeyPathsOfMenus } from '@/utils';
  import { Menu } from '@/layout/common';
  import { listenerRouteChange } from '@/logics/mitt/routeChange';
  import type { GlobalMenuOption } from '@/typings/system';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';

  interface Props {
    /** 菜单抽屉可见性 */
    visible: boolean;
    /** 子菜单数据 */
    menus: GlobalMenuOption[];
  }

  const props = defineProps<Props>();

  const route = useRoute();
  const app = useAppStore();
  // const { routerPush } = useRouterPush();
  const { title } = useAppInfo();
  const { getSiderSetting, getHeaderSetting } = useAppSetting();
  const { mixSiderFixed, mixChildMenuWidth } = unref(getSiderSetting);
  const { height } = unref(getHeaderSetting);

  const showDrawer = computed(() => (props.visible && props.menus.length) || mixSiderFixed);

  const activeKey = computed(() => route.name as string);
  const expandedKeys = ref<string[]>([]);

  // TODO: 1111111111111  any
  // function handleUpdateMenu(_key: string, item: any) {
  //   const menuItem = item as GlobalMenuOption;
  //   routerPush(menuItem.routePath);
  // }
  //
  // function handleUpdateExpandedKeys(keys: string[]) {
  //   expandedKeys.value = keys;
  // }

  // watch(
  //   () => route.name,
  //   () => {
  //     expandedKeys.value = getActiveKeyPathsOfMenus(activeKey.value, props.menus);
  //   },
  //   { immediate: true }
  // );

  listenerRouteChange(() => {
    expandedKeys.value = getActiveKeyPathsOfMenus(activeKey.value, props.menus);
  });
</script>
<style scoped>
  .drawer-shadow {
    box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
  }
</style>
