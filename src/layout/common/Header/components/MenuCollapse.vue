<template>
  <hover-container
    class="w-40px h-full collapse"
    :class="getSiderCollapsed ? 'openCollapse' : 'closeCollapse'"
    :inverted="getSiderInverted"
    @click="toggleSiderCollapse()"
  >
    <icon-menu-unfold
      v-if="getSiderCollapsed"
      class="text-16px"
      style="color: var(--color-text-1)"
    />
    <icon-menu-fold v-else class="text-16px" style="color: var(--color-text-1)" />
  </hover-container>
</template>

<script lang="ts" setup>
  import { unref } from 'vue';
  import { useSidleSetting } from '@/hooks';
  import HoverContainer from '@/components/common/HoverContainer.vue';

  const { getSiderCollapsed, getSiderInverted, setSiderSetting } = useSidleSetting();
  // const app = useAppStore();

  const toggleSiderCollapse = () => {
    setSiderSetting({ collapsed: !unref(getSiderCollapsed) });
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
