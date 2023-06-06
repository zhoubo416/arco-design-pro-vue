<template>
  <a-divider orientation="center">{{ $t('settings.navbar.theme') }}</a-divider>
  <a-space direction="vertical" fill>
    <setting-menu :label="$t('settings.navbar.theme.dark')">
      <AppDarkModeSwitch is-switch />
    </setting-menu>

    <setting-menu :label="$t('settings.themeColor')">
      <div class="justify-center drawer-setting-item dark-switch">
        <a-trigger class="demo-basic" trigger="click">
          <div class="input">
            <div class="current-color" :style="{ backgroundColor: `${getThemeColor}` }"></div>
            <span>{{ getThemeColor }}</span>
          </div>
          <template #content>
            <color-picker v-model:pureColor="color" :isWidget="true" format="hex" />
          </template>
        </a-trigger>
      </div>
    </setting-menu>
  </a-space>
</template>

<script lang="ts" setup>
  import { ref, unref, watch } from 'vue';
  import { ColorPicker } from 'vue3-colorpicker';
  import 'vue3-colorpicker/style.css';
  import { setBaseColor } from '@/utils/color';
  import SettingMenu from '../SettingMenu/index.vue';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';
  import AppDarkModeSwitch from '@/components/Application/src/AppDarkModeSwitch.vue';

  const { getThemeColor, setThemeColor } = useAppSetting();

  const color = ref('');

  watch(
    () => unref(color),
    (value: any) => {
      setThemeColor(value);

      setBaseColor(value);
    }
  );
</script>

<style lang="less" scoped>
  @import 'styles/index.module.less';
  @import 'styles/color.module.less';

  .current-color {
    height: 25px;
    width: 35px;
    margin-right: 10px;
  }
</style>
