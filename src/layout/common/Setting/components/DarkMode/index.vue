<template>
  <a-divider orientation="center">{{ $t('settings.navbar.theme') }}</a-divider>
  <a-space direction="vertical" fill>
    <setting-menu :label="$t('settings.navbar.theme.dark')">
      <a-switch :model-value="getDarkMode" @change="setDarkMode" />
    </setting-menu>

    <setting-menu :label="'主题色'">
      <div class="justify-center drawer-setting-item dark-switch">
        <a-trigger class="demo-basic" trigger="click">
          <div class="input">
            <div class="current-color" :style="{ backgroundColor: `${getThemeColor}` }"></div>
            <span>{{ getThemeColor }}</span>
          </div>
          <template #content>
            <color-picker v-model:pureColor="getThemeColor" :isWidget="true" format="hex" />
          </template>
        </a-trigger>
      </div>
    </setting-menu>
  </a-space>
</template>

<script lang="ts" setup>
  import { unref, watch } from 'vue';
  import { ColorPicker } from 'vue3-colorpicker';
  import 'vue3-colorpicker/style.css';
  import { setBaseColor } from '@/utils/color';
  import SettingMenu from '../SettingMenu/index.vue';
  import { useAppSetting } from '@/hooks/setting/useAppSetting';

  const { getThemeColor, setThemeColor, getDarkMode, setDarkMode } = useAppSetting();

  watch(
    () => unref(getThemeColor),
    (value: any) => {
      // let regex1 = /\d+, \d+, \d+/gi;
      // let color = value.match(regex1);
      setThemeColor(value);

      setBaseColor(value);
      // document.body.style.setProperty(`&#45;&#45;arcoblue-5`, color[0]);
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
