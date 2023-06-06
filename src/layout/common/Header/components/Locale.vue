<template>
  <hover-container
    :tooltip-content="$t('settings.language')"
    class="w-40px h-full"
    :inverted="getHeaderInverted"
  >
    <a-button class="!bg-transparent" shape="round" @click="toggleLocale">
      <template #icon>
        <icon-english-fill
          v-if="getLocaleIsZhCn"
          class="text-20px"
          style="color: var(--color-text-1)"
        />
        <icon-chinese-fill v-else class="text-20px" style="color: var(--color-text-1)" />
      </template>
    </a-button>
  </hover-container>
</template>

<script lang="ts" setup>
  import HoverContainer from '@/components/common/HoverContainer.vue';
  import { useLocaleSetting, useHeaderSetting } from '@/hooks';

  const { getLocaleIsZhCn, toggleLocale } = useLocaleSetting();
  const { getHeaderInverted } = useHeaderSetting();
</script>

<style lang="less" scoped></style>
