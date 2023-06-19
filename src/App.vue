<template>
  <a-config-provider :locale="locale">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </a-config-provider>
</template>

<script lang="ts" setup>
  import { computed, unref, watch } from 'vue';
  import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';
  import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';
  import { useLocaleSetting } from '@/hooks';
  import { AppProvider } from '@/components/Application';

  const { getDarkMode } = useAppSetting();

  const { getLocaleLanguage } = useLocaleSetting();

  // TODO: 需要修改
  // created
  document.body.setAttribute('arco-theme', unref(getDarkMode));
  // document.documentElement.setAttribute('class', unref(getDarkMode));
  document.documentElement.classList.add('dark');
  // document.body.setAttribute('class', unref(getDarkMode));

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
      console.log(newTheme);
      document.body.setAttribute('arco-theme', newTheme);
      // document.body.setAttribute('class', newTheme);
      // document.documentElement.setAttribute('class', newTheme);
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      // document.documentElement.classList.add(unref(getDarkMode));
    }
  );
</script>

<style lang="less">
  //@import 'styles/index.less';
</style>
