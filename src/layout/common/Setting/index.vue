<template>
  <a-drawer
    :width="350"
    :visible="true"
    :cancel-text="$t('settings.close')"
    :ok-text="$t('settings.copySettings')"
    @ok="copySettings"
    @cancel="cancel"
    unmountOnClose
  >
    <template #title> {{ $t('settings.title') }} </template>
    <DarkMode />
    <LayoutMode />
    <PageFunc />
    <PageView />
    <a-alert class="mt-10px">{{ $t('settings.alertContent') }}</a-alert>
  </a-drawer>
</template>

<script lang="ts" setup>
  import { Message } from '@arco-design/web-vue';
  import { useClipboard } from '@vueuse/core';
  import { useI18n } from 'vue-i18n';
  import { DarkMode, LayoutMode, PageFunc, PageView } from './components';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';

  // const app = useAppStore();
  // const theme = useThemeStore();
  const { t } = useI18n();
  const { copy } = useClipboard();
  const { getSettingByJson } = useAppSetting();

  const cancel = () => {
    // app.closeSettingDrawer();
  };

  const copySettings = async () => {
    const text = JSON.stringify(getSettingByJson, null, 2);
    await copy(text);
    Message.success(t('settings.copySettings.message'));
  };
</script>

<style lang="less" scoped></style>
