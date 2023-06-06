<template>
  <hover-container
    :tooltip-content="$t('settings.navbar.settings')"
    class="w-40px h-full"
    :inverted="getHeaderInverted"
  >
    <a-button class="!bg-transparent" shape="round" @click="visibleSetting()">
      <template #icon>
        <icon-settings class="text-20px" style="color: var(--color-text-1)" />
      </template>
    </a-button>
  </hover-container>

  <Setting @close="visibleSetting()" />
</template>

<script lang="ts" setup>
  import { Setting } from '@/layout/common';
  import HoverContainer from '@/components/common/HoverContainer.vue';
  import { useHeaderSetting } from '@/hooks/setting/useHeaderSetting';
  import { useThemeSetting } from '@/hooks/setting/useThemeSetting';
  import { unref } from 'vue';

  const { setThemeSetting, getThemeVisible } = useThemeSetting();
  const { getHeaderInverted } = useHeaderSetting();

  const visibleSetting = () => {
    setThemeSetting({
      drawerVisible: !unref(getThemeVisible),
    });
  };
</script>

<style lang="less" scoped></style>
