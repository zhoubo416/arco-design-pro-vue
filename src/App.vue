<template>
  <a-config-provider :locale="zhCN">
    <RouterView />
  </a-config-provider>
</template>

<script lang="ts" setup>
  import { unref, watch } from 'vue';
  import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';

  const { getDarkMode } = useAppSetting();

  // TODO: 需要修改
  // created
  document.body.setAttribute('arco-theme', unref(getDarkMode));

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
