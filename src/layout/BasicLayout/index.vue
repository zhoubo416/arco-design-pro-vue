<template>
  <a-layout class="admin-layout">
    <Header v-show="getLayoutMode === 'horizontal-mix'" v-bind="headerProps" />
    <Sider />
    <a-layout class="layout-body">
      <!--    <a-layout class="layout-body" :style="{ marginLeft: !siderVisible ? 0 : headerLeft + 'px' }">-->
      <Header v-show="getLayoutMode !== 'horizontal-mix'" v-bind="headerProps" />
      <Tab />
      <a-layout>
        <a-layout-content
          :style="{
            marginTop: getHeaderHeight + 'px',
            marginBottom: getFooterFixed ? getFooterHeight + 'px' : '',
          }"
        >
          <Content />
        </a-layout-content>
        <a-layout-footer style="color: var(--color-text-1)" :style="footerStyle">
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
  import { computed, unref } from 'vue';
  import { useLayoutSetting } from '@/hooks';
  import { Sider, Header, Tab, Content, Footer } from '@/layout/common';
  import { setBaseColor } from '@/utils/color';
  import {
    useSidleSetting,
    useTabSetting,
    useFooterSetting,
    useHeaderSetting,
    useAppSetting,
  } from '@/hooks';

  const { headerProps, getLayoutMode } = useLayoutSetting();
  // TODO: 需要修改
  const { getFixedHeaderAndMultiTab, getThemeColor } = useAppSetting();

  const { getHeaderHeight: headHeight } = useHeaderSetting();
  const { getTabVisible, getTabHeight } = useTabSetting();
  const { getFooterFixed, getFooterHeight } = useFooterSetting();

  // const { getShowSettingButton } = useAppSetting();
  // const theme = useThemeStore();
  // const appStore = useAppStore();
  // const { siderWidth, siderCollapsedWidth } = useSider();
  // const headerLeft = computed((): number => {
  //   return app.siderCollapse ? siderCollapsedWidth.value : siderWidth.value;
  // });

  const { getSiderWidth } = useSidleSetting();
  const getHeaderHeight = computed((): number => {
    let headerHeight = unref(headHeight);
    if (unref(getTabVisible)) {
      headerHeight += unref(getTabHeight);
    }
    if (!unref(getFixedHeaderAndMultiTab)) {
      headerHeight = 0;
    }
    return headerHeight;
  });

  const footerStyle = computed(() => {
    if (unref(getFooterFixed)) {
      return {
        position: 'fixed',
        zIndex: 4,
        height: `${unref(getFooterHeight)}px`,
        paddingLeft: `${unref(getSiderWidth)}px`,
        transitionDuration: '300ms',
        transitionTimingFunction: 'ease-in-out',
        transform: 'translateX(0px)',
        left: 0,
        bottom: 0,
        'flex-shrink': 0,
        'box-sizing': 'border-box',
        width: '100%',
        'transition-property': 'padding-left',
        backgroundColor: 'var(--color-bg-1)',
      };
    }
    return {
      height: `${unref(getFooterHeight)}px`,
    };
  });

  const init = () => {
    setBaseColor(unref(getThemeColor));
  };

  init();
</script>

<style lang="less" scoped>
  .admin-layout {
    height: 100%;
    width: 100%;
  }
</style>
