<template>
  <a-config-provider :locale="locale">
    <RouterView />
  </a-config-provider>
</template>

<script lang="ts" setup>
  import { computed, unref, watch } from 'vue';
  import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';
  import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';
  import { useLocaleSetting } from '@/hooks';

  const { getDarkMode } = useAppSetting();

  const { getLocaleLanguage } = useLocaleSetting();
  // TODO: 需要修改
  // created
  document.body.setAttribute('arco-theme', unref(getDarkMode));

  const locale = computed(() => {
    switch (unref(getLocaleLanguage)) {
      case 'zh-CN':
        return zhCN;
      case 'en-US':
        return enUS;
      default:
        return zhCN;
    }
  });

  watch(
    () => unref(getDarkMode),
    (newTheme) => {
      document.body.setAttribute('arco-theme', newTheme);
    }
  );
</script>

<style lang="less">
  //@import 'styles/index.less';
</style>
