<!--切换语言-->

<template>
  <hover-container tooltip-content="切换语言" class="w-40px h-full" :inverted="getHeaderInverted">
    <a-button
      class="!bg-transparent"
      shape="round"
      @click="setLanguage(getLocale.language === 'zh-CN' ? 'en-US' : 'zh-CN')"
    >
      <template #icon>
        <icon-english-fill
          v-if="getLocale.language === 'zh-CN'"
          class="text-20px"
          style="color: var(--color-text-1)"
        />
        <icon-chinese-fill v-else class="text-20px" style="color: var(--color-text-1)" />
      </template>
    </a-button>
  </hover-container>
</template>

<script lang="ts" setup>
  import { useLocale } from '@/hooks/locale';
  import type { EnumType } from '@/typings/system';
  import HoverContainer from '@/components/common/HoverContainer.vue';
  import { useHeaderSetting } from '@/hooks/setting/useHeaderSetting';

  const { changeLocale, getLocale } = useLocale();

  const { getHeaderInverted } = useHeaderSetting();

  const setLanguage = (language: EnumType.Language | undefined = 'zh-CN') => {
    changeLocale(language);
  };

  const init = () => {
    // setLanguage(theme.getLanguage);
  };

  init();
</script>

<style lang="less" scoped></style>
