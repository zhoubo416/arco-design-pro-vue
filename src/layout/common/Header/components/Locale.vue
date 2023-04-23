<template>
  <hover-container
    tooltip-content="切换语言"
    class="w-40px h-full"
    :inverted="inverted"
    @click="setLanguage(getLocale.language === 'zh-CN' ? 'en-US' : 'zh-CN')"
  >
    <icon-english-fill
      v-if="getLocale.language === 'zh-CN'"
      class="text-20px"
      style="color: var(--color-text-1)"
    />
    <icon-chinese-fill v-else class="text-20px" style="color: var(--color-text-1)" />
  </hover-container>
</template>

<script lang="ts" setup>
  import { useLocale } from '@/hooks/locale';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';
  import { unref } from 'vue';
  import type { EnumType } from '@/typings/system';

  const { changeLocale, getLocale } = useLocale();

  const { getHeaderSetting } = useAppSetting();
  const { inverted } = unref(getHeaderSetting);

  const setLanguage = (language: EnumType.Language | undefined = 'zh-CN') => {
    console.log(language);

    // if (!language) {
    //   language = theme.language === 'zh-CN' ? 'en-US' : 'zh-CN';
    // }
    // theme.setLanguage(language);
    changeLocale(language);
  };

  const init = () => {
    // setLanguage(theme.getLanguage);
  };

  init();
</script>

<style lang="less" scoped></style>
