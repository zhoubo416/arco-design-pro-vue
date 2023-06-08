<template>
  <dark-mode-container
    class="flex h-full"
    :inverted="getSiderInverted"
    @mouseleave="resetFirstDegreeMenus"
    style="color: var(--color-text-2)"
  >
    <div class="flex-1 flex-col-stretch h-full w-full">
      <logo :show-title="false" :style="{ height: getHeaderHeight + 'px', a: getSiderCollapsed }" />
      <div class="flex-1-hidden">
        <mix-menu-detail
          v-for="item in firstDegreeMenus"
          :key="item.routeName"
          :route-name="item.routeName"
          :active-route-name="activeParentRouteName"
          :label="item.label"
          :icon="item.icon"
          :is-mini="getSiderCollapsed"
          @click="handleMixMenu(item.routeName, item.hasChildren)"
        />
      </div>
      <mix-menu-collapse />
    </div>
    <mix-menu-drawer :visible="drawerVisible" :menus="activeChildMenus" />
  </dark-mode-container>
</template>

<script setup lang="ts">
  import { computed, ref, unref } from 'vue';
  import { RouteLocationNormalized, useRoute } from 'vue-router';
  import { useRouteStore } from '@/store';
  import { useRouterPush } from '@/composables';
  import { useBoolean, useSidleSetting } from '@/hooks';
  import { Logo } from '@/layout/common';
  import { MixMenuDetail, MixMenuDrawer, MixMenuCollapse } from './components';
  import { listenerRouteChange } from '@/logics/mitt/routeChange';
  import type { GlobalMenuOption } from '@/typings/system';
  import DarkModeContainer from '@/components/common/DarkModeContainer.vue';
  import { useHeaderSetting } from '@/hooks/setting/useHeaderSetting';

  const { getHeaderHeight } = useHeaderSetting();
  const { getSiderCollapsed, getSiderInverted } = useSidleSetting();
  const routeStore = useRouteStore();
  const { routerPush } = useRouterPush();
  const { bool: drawerVisible, setTrue: openDrawer, setFalse: hideDrawer } = useBoolean();
  const route1 = useRoute();

  const activeParentRouteName = ref('');
  function setActiveParentRouteName(routeName: string) {
    activeParentRouteName.value = routeName;
  }

  const firstDegreeMenus = computed(() =>
    routeStore.menus.map((item) => {
      const { routeName, label } = item;
      const icon = item?.icon;
      const hasChildren = Boolean(item.children && item.children.length);

      return {
        routeName,
        label,
        icon,
        hasChildren,
      };
    })
  );

  function getActiveParentRouteName(route: RouteLocationNormalized) {
    console.log('getActiveParentRouteName');
    firstDegreeMenus.value.some((item) => {
      const routeName = route.name as string;
      // const activeKey =
      //   ((route.meta?.activeMenu ? route.meta.activeMenu : route.name) as string) ?? '';
      const flag = routeName?.includes(item.routeName);
      if (flag) {
        setActiveParentRouteName(item.routeName);
      }
      return flag;
    });
  }

  function handleMixMenu(routeName: string, hasChildren: boolean) {
    setActiveParentRouteName(routeName);
    if (hasChildren) {
      openDrawer();
    } else {
      routerPush({ name: routeName });
    }
  }

  function resetFirstDegreeMenus() {
    console.log('resetFirstDegreeMenus2222222222222222');

    console.log(route1);
    getActiveParentRouteName(route1);
    hideDrawer();
  }

  const activeChildMenus = computed(() => {
    console.log('activeChildMenus111111111');
    const menus: GlobalMenuOption[] = [];
    routeStore.menus.some((item) => {
      const flag = item.routeName === activeParentRouteName.value && Boolean(item.children?.length);
      if (flag) {
        menus.push(...(item.children || []));
      }
      return flag;
    });
    console.log(menus);
    return menus;
  });

  // watch(
  //   () => route.name,
  //   () => {
  //     getActiveParentRouteName();
  //   },
  //   { immediate: true }
  // );

  listenerRouteChange((route: RouteLocationNormalized) => {
    console.log('VerticalMixSider');
    getActiveParentRouteName(route);
  });
</script>
<style scoped></style>
