<!--<template>-->
<!--  <a-divider orientation="center">{{ $t('settings.interface.functions') }}</a-divider>-->
<!--  <a-space direction="vertical" fill>-->
<!--    &lt;!&ndash;    <setting-menu label="侧边栏反转色">&ndash;&gt;-->
<!--    &lt;!&ndash;      <a-switch :model-value="theme.sider.inverted" @change="theme.setSiderInverted" />&ndash;&gt;-->
<!--    &lt;!&ndash;    </setting-menu>&ndash;&gt;-->
<!--    &lt;!&ndash;    <setting-menu label="头部反转色">&ndash;&gt;-->
<!--    &lt;!&ndash;      <a-switch :model-value="theme.header.inverted" @change="theme.setHeaderInverted" />&ndash;&gt;-->
<!--    &lt;!&ndash;    </setting-menu>&ndash;&gt;-->
<!--    <setting-menu :label="$t('settings.interface.functions.fixed.header')">-->
<!--      <a-switch-->
<!--        :model-value="theme.fixedHeaderAndTab"-->
<!--        @change="theme.setIsFixedHeaderAndTab"-->
<!--        :disabled="theme.layout.mode === 'horizontal-mix'"-->
<!--      />-->
<!--    </setting-menu>-->
<!--    &lt;!&ndash;    <setting-menu label="顶部菜单位置">&ndash;&gt;-->
<!--    &lt;!&ndash;      <n-select&ndash;&gt;-->
<!--    &lt;!&ndash;        class="w-120px"&ndash;&gt;-->
<!--    &lt;!&ndash;        size="small"&ndash;&gt;-->
<!--    &lt;!&ndash;        :value="theme.menu.horizontalPosition"&ndash;&gt;-->
<!--    &lt;!&ndash;        :options="theme.menu.horizontalPositionList"&ndash;&gt;-->
<!--    &lt;!&ndash;        @update:value="theme.setHorizontalMenuPosition"&ndash;&gt;-->
<!--    &lt;!&ndash;      />&ndash;&gt;-->
<!--    &lt;!&ndash;    </setting-menu>&ndash;&gt;-->
<!--    <setting-menu :label="$t('settings.interface.functions.header.height')">-->
<!--      <a-input-number-->
<!--        class="max-w-120px"-->
<!--        size="small"-->
<!--        v-model="theme.header.height"-->
<!--        @change="theme.setHeaderHeight"-->
<!--        :step="1"-->
<!--      />-->
<!--    </setting-menu>-->
<!--    <setting-menu :label="$t('settings.interface.functions.tab.height')">-->
<!--      <a-input-number-->
<!--        class="max-w-120px"-->
<!--        size="small"-->
<!--        v-model="theme.tab.height"-->
<!--        @change="theme.setTabHeight"-->
<!--        :step="1"-->
<!--      />-->
<!--    </setting-menu>-->
<!--    <setting-menu :label="$t('settings.interface.functions.tab.cache')">-->
<!--      <a-switch :model-value="theme.tab.isCache" @change="theme.setTabIsCache" />-->
<!--    </setting-menu>-->
<!--    <setting-menu :label="$t('settings.interface.functions.sidebar.width')">-->
<!--      <a-input-number-->
<!--        class="max-w-120px"-->
<!--        size="small"-->
<!--        v-model="theme.sider.width"-->
<!--        @change="theme.setSiderWidth"-->
<!--        :step="10"-->
<!--      />-->
<!--    </setting-menu>-->
<!--    <setting-menu :label="$t('settings.interface.functions.sidebar.blend.width')">-->
<!--      <a-input-number-->
<!--        class="max-w-120px"-->
<!--        size="small"-->
<!--        v-model="theme.sider.mixWidth"-->
<!--        @change="theme.setMixSiderWidth"-->
<!--        :step="10"-->
<!--      />-->
<!--    </setting-menu>-->
<!--    <setting-menu :label="$t('settings.interface.functions.fixed.bottom')">-->
<!--      <a-switch :model-value="theme.footer.fixed" @change="theme.setFooterIsFixed" />-->
<!--    </setting-menu>-->
<!--    <setting-menu :label="'开启水印'">-->
<!--      <a-switch-->
<!--        :model-value="theme.watermark.watermark"-->
<!--        @change="theme.setWatermark(!theme.watermark.watermark)"-->
<!--      />-->
<!--    </setting-menu>-->
<!--    <setting-menu :label="'水印文字'">-->
<!--      <a-input-->
<!--        class="max-w-120px"-->
<!--        size="small"-->
<!--        v-model="theme.watermark.watermarkText"-->
<!--        @change="theme.setWatermarkText"-->
<!--      />-->
<!--    </setting-menu>-->
<!--  </a-space>-->
<!--</template>-->

<script lang="ts" setup>
  //TODO: 修复页面
  import SettingMenu from '../SettingMenu/index.vue';
</script>

<!--<style lang="less" scoped></style>-->
