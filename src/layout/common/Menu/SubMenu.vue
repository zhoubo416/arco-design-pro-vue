<template>
  <a-sub-menu :key="menuInfo.key">
    <template #title>
      <span class="sub-menu-lable">{{ $t(menuInfo.label) }}222</span>
    </template>
    <template #icon>
      <component :is="menuInfo.icon" style="font-size: 16px; vertical-align: middle" />
    </template>
    <template v-for="item in menuInfo.children" :key="item.key">
      <template v-if="item.children && item.children.length > 0">
        <SubMenu :menu-info="item" :key="item.key" />
      </template>
      <template v-else>
        <a-menu-item :key="item.key" @click="handleUpdateMenu(item.key, item)">
          <template #icon>
            <component :is="item.icon" />
          </template>
          {{ $t(item.label) }}333
        </a-menu-item>
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts" setup>
  import { useRouterPush } from '@/composables';
  import type { GlobalMenuOption } from '@/typings/system';

  const { routerPush } = useRouterPush();
  defineProps({
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  });

  function handleUpdateMenu(_key: string, item: any) {
    const menuItem = item as GlobalMenuOption;
    routerPush(menuItem.routePath);
  }
</script>

<style lang="less" scoped></style>
