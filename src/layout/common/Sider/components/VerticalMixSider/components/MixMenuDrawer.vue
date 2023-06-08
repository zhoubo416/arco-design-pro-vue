<template>
  <div
    class="relative h-full transition-width duration-300 ease-in-out"
    :style="{ width: getSiderMixSiderFixed ? getSiderMixChildMenuWidth + 'px' : '0px' }"
  >
    <dark-mode-container
      class="drawer-shadow absolute-lt flex-col-stretch h-full nowrap-hidden"
      :style="{ width: showDrawer ? getSiderMixChildMenuWidth + 'px' : '0px' }"
    >
      <header
        class="header-height flex-y-center justify-between"
        :style="{ height: getHeaderHeight + 'px' }"
      >
        <h2 class="text-primary pl-8px text-16px font-bold">{{ title }}</h2>
        <div class="px-8px text-16px text-gray-600 cursor-pointer" @click="setSiderMixSiderFixed">
          <icon-mdi-pin-off v-if="getSiderMixSiderFixed" />
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
  import { ref, computed, unref } from 'vue';
  import { RouteLocationNormalized, useRoute } from 'vue-router';
  import { useAppInfo } from '@/composables';
  import { getActiveKeyPathsOfMenus } from '@/utils';
  import { Menu } from '@/layout/common';
  import { listenerRouteChange } from '@/logics/mitt/routeChange';
  import type { GlobalMenuOption } from '@/typings/system';
  import { useHeaderSetting } from '@/hooks/setting/useHeaderSetting';
  import { useSidleSetting } from '@/hooks';
  import DarkModeContainer from '@/components/common/DarkModeContainer.vue';

  interface Props {
    /** 菜单抽屉可见性 */
    visible: boolean;
    /** 子菜单数据 */
    menus: GlobalMenuOption[];
  }

  const props = defineProps<Props>();

  const { title } = useAppInfo();
  const { getSiderMixSiderFixed, getSiderMixChildMenuWidth, setSiderSetting } = useSidleSetting();
  const { getHeaderHeight } = useHeaderSetting();

  const showDrawer = computed(
    () => (props.visible && props.menus.length) || unref(getSiderMixSiderFixed)
  );

  const activeKey = ref('');
  const expandedKeys = ref<string[]>([]);

  const setSiderMixSiderFixed = () => {
    setSiderSetting({ mixSiderFixed: !unref(getSiderMixSiderFixed) });
  };

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

  listenerRouteChange((route: RouteLocationNormalized) => {
    console.log('MixMenuDrawer');
    console.log(activeKey.value, props.menus);
    console.log(route.name, route.fullPath);
    const activeKey1 =
      ((route.meta?.activeMenu ? route.meta.activeMenu : route.name) as string) ?? '';
    console.log(activeKey1);
    expandedKeys.value = getActiveKeyPathsOfMenus(activeKey1, props.menus);
    console.log(expandedKeys.value);
  });
</script>
<style scoped>
  .drawer-shadow {
    box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
  }
</style>
