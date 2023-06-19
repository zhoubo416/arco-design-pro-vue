<template>
  <a-layout :class="prefixCls">
    <!--    <LayoutHeader v-if="getLayoutMode === 'horizontal-mix'" v-bind="headerProps" />-->
    <a-layout :class="[layoutClass]">
      <Sider />
      <a-layout :class="`${prefixCls}-main`">
        <!--            &lt;!&ndash;顶部菜单 非顶部菜单混合模式展示&ndash;&gt;-->
        <!--                    <LayoutHeader v-show="getLayoutMode !== 'horizontal-mix'" v-bind="headerProps" />-->
        <LayoutHeader />
        <!--            &lt;!&ndash;Tab 一会合并到Header里&ndash;&gt;-->
        <!--            <Tab />-->
        <!--            &lt;!&ndash;内容区域&ndash;&gt;-->
        <!--        <ThemeModel />-->

        <Content />
        <!--            &lt;!&ndash;底部区域&ndash;&gt;-->
        <Footer />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
  import { computed, unref } from 'vue';
  import { useLayoutSetting } from '@/hooks';
  import { Sider, LayoutHeader, Tab, Content, Footer } from '@/layout/common';
  import { setBaseColor } from '@/utils/color';
  import { useAppSetting } from '@/hooks';
  import { useDesign } from '@/hooks/web/useDesign';
  import { ThemeModel } from '@/layout/common/Header/components';

  // 默认左右分割布局

  const { prefixCls } = useDesign('default-layout');
  const { getThemeColor } = useAppSetting();

  const layoutClass = computed(() => {
    let cls: string[] = [];
    // if (unref(getLayoutMode) === 'horizontal-mix') {
    //   cls = ['arco-layout', 'arco-layout-horizontal-mix'];
    // }
    return cls;
  });

  const init = () => {
    setBaseColor(unref(getThemeColor));
  };

  init();
</script>

<style lang="less" scoped>
  @prefix-cls: ~'@{nameCls}-default-layout';

  .@{prefix-cls} {
    display: flex;
    width: 100%;
    min-height: 100%;
    flex-direction: column;

    > .arco-layout {
      min-height: 100%;
    }

    &-main {
      width: 100%;
      margin-left: 1px;
    }
  }
</style>
