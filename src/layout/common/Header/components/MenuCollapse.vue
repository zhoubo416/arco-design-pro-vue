<template>
  <hover-container
    class="w-40px h-full collapse"
    :class="siderCollapsed ? 'openCollapse' : 'closeCollapse'"
    :inverted="siderInverted"
    @click="toggleSiderCollapse"
  >
    <icon-menu-unfold v-if="siderCollapsed" class="text-16px" style="color: var(--color-text-1)" />
    <icon-menu-fold v-else class="text-16px" style="color: var(--color-text-1)" />
  </hover-container>
</template>

<script lang="ts" setup>
  import { useAppStore } from '@/store';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';
  import { unref } from 'vue';

  const { getSiderSetting } = useAppSetting();
  const { collapsed: siderCollapsed, inverted: siderInverted } = unref(getSiderSetting);
  const app = useAppStore();

  const toggleSiderCollapse = () => {
    app.setSiderSetting({ collapsed: !siderCollapsed });
  };
</script>
<style scoped>
  .collapse {
    transition: transform 0.3s ease;
  }

  .openCollapse {
    transform: rotate(180deg);
  }

  .closeCollapse {
    transform: rotate(0);
  }
</style>
