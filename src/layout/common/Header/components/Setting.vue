<template>
  <hover-container tooltip-content="设置" class="w-40px h-full" :inverted="headerInverted">
    <a-button class="!bg-transparent" shape="round" @click="visibleSetting()">
      <template #icon>
        <icon-settings class="text-20px" style="color: var(--color-text-1)" />
      </template>
    </a-button>
  </hover-container>

  <Setting v-if="visible" @close="visibleSetting()" />
</template>

<script lang="ts" setup>
  import { Setting } from '@/layout/common';
  import HoverContainer from '@/components/common/HoverContainer.vue';
  import { ref, unref } from 'vue';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';

  const { getHeaderSetting } = useAppSetting();

  const { inverted: headerInverted } = unref(getHeaderSetting);

  const visible = ref(false);

  const visibleSetting = () => {
    visible.value = !visible.value;
  };
</script>

<style lang="less" scoped></style>
