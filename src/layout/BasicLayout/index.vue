<template>
  <a-layout class="admin-layout">
    <Sider />
    <a-layout class="layout-body">
      <!--    <a-layout class="layout-body" :style="{ marginLeft: !siderVisible ? 0 : headerLeft + 'px' }">-->
      <Header v-bind="headerProps" />
      <Tab />
      <a-layout>
        <a-layout-content
          :style="{
            marginTop: getHeaderHeight + 'px',
            marginBottom: footerFixed ? footerHeight + 'px' : '',
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
  import { useAppSetting } from '@/hooks/setting/useAppSetting';
  import { useHeaderSetting } from '@/hooks/setting/useHeaderSetting';
  import { useSidleSetting } from '@/hooks';

  const { headerProps } = useLayoutSetting();
  const { getFooterSetting, getTabSetting, getFixedHeaderAndMultiTab, getThemeColor } =
    useAppSetting();

  const { getHeaderHeight: headHeight } = useHeaderSetting();

  // const { getShowSettingButton } = useAppSetting();
  // const theme = useThemeStore();
  // const appStore = useAppStore();
  // const { siderWidth, siderCollapsedWidth } = useSider();
  // const headerLeft = computed((): number => {
  //   return app.siderCollapse ? siderCollapsedWidth.value : siderWidth.value;
  // });

  const { fixed: footerFixed, height: footerHeight } = unref(getFooterSetting);
  const { visible: tabVisible, height: tabHeight } = unref(getTabSetting);
  const { getSiderWidth } = useSidleSetting();
  const getHeaderHeight = computed((): number => {
    let headerHeight = unref(headHeight);
    if (tabVisible) {
      headerHeight += tabHeight;
    }
    if (!getFixedHeaderAndMultiTab) {
      headerHeight = 0;
    }
    return headerHeight;
  });

  const footerStyle = computed(() => {
    if (footerFixed) {
      return {
        position: 'fixed',
        zIndex: 4,
        height: `${footerHeight}px`,
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
      height: `${footerHeight}px`,
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
