<template>
  <a-divider orientation="center">{{ $t('settings.interface.functions') }}</a-divider>
  <a-space direction="vertical" fill>
    <!--    <setting-menu label="侧边栏反转色">-->
    <!--      <a-switch :model-value="getSiderInverted" @change="setSiderInverted" />-->
    <!--    </setting-menu>-->
    <!--    <setting-menu label="头部反转色">-->
    <!--      <a-switch :model-value="theme.header.inverted" @change="theme.setHeaderInverted" />-->
    <!--    </setting-menu>-->
    <setting-menu :label="$t('settings.interface.functions.fixed.header')">
      <a-switch
        :model-value="getFixedHeaderAndMultiTab"
        @change="setFixedHeaderAndMultiTab"
        :disabled="getLayoutMode === 'horizontal-mix'"
      />
    </setting-menu>
    <!--    <setting-menu label="顶部菜单位置">-->
    <!--      <a-select-->
    <!--        class="w-120px"-->
    <!--        size="small"-->
    <!--        :value="getMenuHorizontalPosition"-->
    <!--        :options="horizontalPositionList"-->
    <!--        @update:value="setMenuHorizontalPosition"-->
    <!--      />-->
    <!--    </setting-menu>-->
    <setting-menu :label="$t('settings.interface.functions.header.height')">
      <a-input-number
        class="max-w-120px"
        size="small"
        :model-value="getHeaderHeight"
        @change="setHeaderHeight"
        :step="1"
      />
    </setting-menu>
    <setting-menu :label="$t('settings.interface.functions.tab.height')">
      <a-input-number
        class="max-w-120px"
        size="small"
        :model-value="getTabHeight"
        @change="setTabHeight"
        :step="1"
      />
    </setting-menu>
    <setting-menu :label="$t('settings.interface.functions.tab.cache')">
      <a-switch :model-value="getTabIsCache" @change="setTabIsCache" />
    </setting-menu>
    <setting-menu :label="$t('settings.interface.functions.sidebar.width')">
      <a-input-number
        class="max-w-120px"
        size="small"
        :model-value="getSiderWidth"
        @change="setSiderWidth"
        :step="10"
      />
    </setting-menu>
    <setting-menu :label="$t('settings.interface.functions.sidebar.blend.width')">
      <a-input-number
        class="max-w-120px"
        size="small"
        :model-value="getSiderMixWidth"
        @change="setSiderMixWidth"
        :step="10"
      />
    </setting-menu>
    <setting-menu :label="$t('settings.interface.functions.fixed.bottom')">
      <a-switch :model-value="getFooterFixed" @change="setFooterFixed" />
    </setting-menu>
    <setting-menu :label="$t('settings.interface.functions.watermark.watermark')">
      <a-switch :model-value="getWatermarkVisible" @change="setWatermarkVisible" />
    </setting-menu>
    <setting-menu :label="$t('settings.interface.functions.watermark.text')">
      <a-input
        class="max-w-120px"
        size="small"
        :model-value="getWatermarkText"
        @change="setWatermarkText"
      />
    </setting-menu>
  </a-space>
</template>

<script lang="ts" setup>
  //TODO: 修复页面
  import SettingMenu from '../SettingMenu/index.vue';
  import {
    useAppSetting,
    useFooterSetting,
    useHeaderSetting,
    useLayoutSetting,
    useSidleSetting,
    useTabSetting,
    useWatermarkSetting,
  } from '@/hooks';
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  import { menuHorizontalPositionList } from '@/settings';

  const { getSiderWidth, getSiderMixWidth, setSiderWidth, setSiderMixWidth } = useSidleSetting();
  const { getTabIsCache, setTabIsCache } = useTabSetting();
  const { getLayoutMode } = useLayoutSetting();
  const { getFixedHeaderAndMultiTab, setFixedHeaderAndMultiTab } = useAppSetting();
  const { getHeaderHeight, setHeaderHeight } = useHeaderSetting();
  const { getTabHeight, setTabHeight } = useTabSetting();

  const { getFooterFixed, setFooterFixed } = useFooterSetting();
  const { getWatermarkText, getWatermarkVisible, setWatermarkText, setWatermarkVisible } =
    useWatermarkSetting();

  const { t } = useI18n();

  const horizontalPositionList = computed(() => {
    return [...menuHorizontalPositionList].map(({ label, value }) => {
      return { label: t(label), value: value };
    });
  });
</script>

<style lang="less" scoped></style>
