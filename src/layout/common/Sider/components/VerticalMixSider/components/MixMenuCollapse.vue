<template>
  <a-button :text="true" class="h-36px" @click="toggleSiderCollapse()">
    <icon-ph-caret-double-right-bold v-if="getSiderCollapsed" class="text-16px" />
    <icon-ph-caret-double-left-bold v-else class="text-16px" />
  </a-button>
</template>

<script lang="ts" setup>
  import { useSidleSetting } from '@/hooks';
  import { unref } from 'vue';

  const { getSiderCollapsed, setSiderSetting } = useSidleSetting();

  const toggleSiderCollapse = () => {
    setSiderSetting({ collapsed: !unref(getSiderCollapsed) });
  };
</script>
<style scoped></style>
