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
    <Mode />
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
  import { Mode, LayoutMode, PageFunc, PageView } from './components';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';

  const { t } = useI18n();
  const { copy } = useClipboard();
  const { getSettingByJson } = useAppSetting();

  interface Emits {
    (e: 'close'): void;
  }

  const emit = defineEmits<Emits>();

  const cancel = () => {
    emit('close');
  };

  const copySettings = async () => {
    const text = JSON.stringify(getSettingByJson, null, 2);
    await copy(text);
    Message.success(t('settings.copySettings.message'));
  };
</script>

<style lang="less" scoped></style>
