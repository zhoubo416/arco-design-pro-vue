<template>
  <a-divider orientation="center">{{ $t('settings.interface.display') }}</a-divider>
  <a-space direction="vertical" fill>
    <setting-menu :label="$t('settings.interface.display.crumbs')">
      <a-switch :model-value="getHeaderCrumbVisible" @change="setHeaderCrumbVisible" />
    </setting-menu>
    <setting-menu :label="$t('settings.interface.display.crumbs.icon')">
      <a-switch :model-value="getHeaderCrumbShowIcon" @change="setHeaderCrumbShowIcon" />
    </setting-menu>
    <setting-menu :label="$t('settings.interface.display.multiple.tabs')">
      <a-switch :model-value="getTabVisible" @change="setTabVisible" />
    </setting-menu>
    <setting-menu :label="$t('settings.interface.display.page.switching')">
      <a-switch :model-value="getPageAnimate" @change="setPageAnimate" />
    </setting-menu>
    <setting-menu :label="$t('settings.interface.display.page.switching.type')">
      <a-select
        class="max-w-120px"
        size="small"
        :options="getPageAnimateModeList"
        @change="setPageAnimateMode"
        :model-value="getPageAnimateMode"
      />
    </setting-menu>
  </a-space>
</template>

<script lang="ts" setup>
  import SettingMenu from '../SettingMenu/index.vue';

  import { useHeaderSetting, usePageSetting, useTabSetting } from '@/hooks';

  const {
    getHeaderCrumbVisible,
    getHeaderCrumbShowIcon,
    setHeaderCrumbVisible,
    setHeaderCrumbShowIcon,
  } = useHeaderSetting();
  const { getTabVisible, setTabVisible } = useTabSetting();
  const {
    getPageAnimate,
    getPageAnimateMode,
    getPageAnimateModeList,
    setPageAnimate,
    setPageAnimateMode,
  } = usePageSetting();
  // TODO： 修复
</script>
<!--<style scoped></style>-->
