<template>
  <!-- 面包屑 -->
  <a-breadcrumb>
    <template v-for="breadcrumb in breadcrumbs" :key="breadcrumb.key">
      <a-breadcrumb-item>
        <a-dropdown v-if="breadcrumb.hasChildren" @select="dropdownSelect" trigger="hover">
          <template #content>
            <a-doption
              v-for="(item, itemIndex) in breadcrumb.children"
              :value="item"
              :key="itemIndex"
            >
              <component
                :is="item.icon"
                v-if="getHeaderCrumb.showIcon"
                class="inline-block align-text-bottom mr-4px text-16px"
              />
              <span>{{ $t(item.label) }}</span>
            </a-doption>
          </template>
          <span class="link-text">
            <component
              class="inline-block align-text-bottom mr-4px text-16px"
              v-if="getHeaderCrumb.showIcon"
              :is="breadcrumb.icon || 'icon-home-fill'"
              :class="{ 'text-#BBBBBB': getHeaderInverted }"
            />
            <span :class="{ 'text-#BBBBBB': getHeaderInverted }">{{ $t(breadcrumb.label) }}</span>
          </span>
        </a-dropdown>
        <span class="link-text" v-else>
          <component
            class="inline-block align-text-bottom mr-4px text-16px"
            v-if="getHeaderCrumb.showIcon"
            :is="breadcrumb.icon || 'icon-home-fill'"
            :class="{ 'text-#BBBBBB': getHeaderInverted }"
          />
          <span :class="{ 'text-#BBBBBB': getHeaderInverted }">{{ $t(breadcrumb.label) }}</span>
        </span>
      </a-breadcrumb-item>
    </template>
  </a-breadcrumb>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { routePath } from '@/router';
  import { useRouteStore } from '@/store';
  import { useRouterPush } from '@/composables';
  import { getBreadcrumbByRouteKey } from '@/utils';
  import type { GlobalMenuOption } from '@/typings/system';
  import { useHeaderSetting } from '@/hooks/setting/useHeaderSetting';

  const route = useRoute();
  const routeStore = useRouteStore();
  const { routerPush } = useRouterPush();

  const { getHeaderCrumb, getHeaderInverted } = useHeaderSetting();

  const breadcrumbs = computed(() =>
    getBreadcrumbByRouteKey(
      route.name as string,
      routeStore.menus as GlobalMenuOption[],
      routePath('root')
    )
  );

  function dropdownSelect(menuOption: GlobalMenuOption) {
    routerPush({ name: menuOption.routeName });
  }
</script>

<style lang="less" scoped></style>
