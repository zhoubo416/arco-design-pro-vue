<template>
  <a-card class="general-card mb-15px" :header-style="{ paddingBottom: '15px' }">
    <a-list size="small" :bordered="false" :hoverable="true">
      <template #header> 菜单 </template>
      <a-list-item v-for="item in routeStore.menus" :key="item.key">
        <a-space size="mini">
          <div class="w-25 text-right"><component :is="item.icon" />{{ $t(item.label) }} ></div>
          <template v-for="c in item.children" :key="c.key">
            <a-tooltip v-if="c.children" position="bottom" mini background-color="#f2f3f5">
              <a-button class="w-20 text-left" type="text" @click="handleUpdateMenu(c.key, c)">{{
                $t(c.label)
              }}</a-button>
              <template v-if="c.children" #content>
                <a-space size="mini">
                  <template #split>
                    <a-divider direction="vertical" />
                  </template>
                  <a-button
                    v-for="cc in c.children"
                    :key="cc.key"
                    type="primary"
                    size="mini"
                    @click="handleUpdateMenu(cc.key, c)"
                  >
                    {{ $t(cc.label) }}
                  </a-button>
                </a-space>
              </template>
            </a-tooltip>
            <a-button
              class="w-20 text-left"
              v-else
              type="text"
              @click="handleUpdateMenu(c.key, c)"
              >{{ $t(c.label) }}</a-button
            >
          </template>
        </a-space>
      </a-list-item>
    </a-list>
  </a-card>
</template>

<script lang="ts" setup>
  import { useRouteStore } from '@/store';
  const routeStore = useRouteStore();

  import { useRouterPush } from '@/composables';
  const { routerPush } = useRouterPush();
  function handleUpdateMenu(_key: string, item: any) {
    const menuItem = item as GlobalMenuOption;
    routerPush(menuItem.routePath);
  }
</script>

<style lang="less" scoped></style>
