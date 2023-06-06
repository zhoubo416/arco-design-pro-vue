import { computed, unref } from 'vue';
import type { EnumType, GlobalHeaderProps } from '@/typings/system';
import { useSidleSetting } from '@/hooks';
import { useAppStore } from '@/store';

type LayoutHeaderProps = Record<EnumType.ThemeLayoutMode, GlobalHeaderProps>;

export const useLayoutSetting = () => {
  const appStore = useAppStore();

  // 获取Layout配置
  const getLayoutSetting = computed(() => appStore.getLayoutSetting);
  // 获取Layout mode
  const getLayoutMode = computed(() => appStore.getLayoutSetting.mode);
  // 获取Layout minWidth
  const getLayoutMinWidth = computed(() => appStore.getLayoutSetting.minWidth);

  const isVerticalMix = computed(() => unref(getLayoutMode) === 'vertical-mix');
  const isHorizontalMix = computed(() => unref(getLayoutMode) === 'horizontal-mix');

  type LayoutMode = 'vertical' | 'horizontal';
  const getLayoutMenuMode = computed(() => {
    const vertical: LayoutMode = 'vertical';
    const horizontal: LayoutMode = 'horizontal';
    return unref(getLayoutMode).includes(vertical) ? vertical : horizontal;
  });

  // 修改layout
  const setLayoutMode = (mode: EnumType.ThemeLayoutMode) => {
    appStore.setLayoutSetting({ mode });
  };

  const {
    getSiderWidth,
    getSiderMixWidth,
    getSiderMixChildMenuWidth,
    getSiderMixSiderFixed,
    getSiderCollapsedWidth,
    getSiderMixCollapsedWidth,
  } = useSidleSetting();

  const layoutHeaderProps: LayoutHeaderProps = {
    vertical: {
      showLogo: false,
      showHeaderMenu: false,
      showMenuCollapse: true,
    },
    'vertical-mix': {
      showLogo: false,
      showHeaderMenu: false,
      showMenuCollapse: false,
    },
    horizontal: {
      showLogo: true,
      showHeaderMenu: true,
      showMenuCollapse: false,
    },
    'horizontal-mix': {
      showLogo: true,
      showHeaderMenu: false,
      showMenuCollapse: true,
    },
  };

  const headerProps = computed(() => layoutHeaderProps[unref(getLayoutMode)]);

  const siderVisible = computed(() => unref(getLayoutMode) !== 'horizontal');
  const siderWidth = computed(() => {
    let w = unref(isVerticalMix) ? unref(getSiderMixWidth) : unref(getSiderWidth);
    if (unref(isVerticalMix) && unref(getSiderMixSiderFixed)) {
      w += unref(getSiderMixChildMenuWidth);
    }
    return w;
  });
  const siderCollapsedWidth = computed(() => {
    // const { collapsedWidth, mixCollapsedWidth, mixChildMenuWidth, mixSiderFixed } =
    //   unref(getSiderSetting);
    let w = unref(isVerticalMix) ? unref(getSiderMixCollapsedWidth) : unref(getSiderCollapsedWidth);
    if (unref(isVerticalMix) && unref(getSiderMixSiderFixed)) {
      w += unref(getSiderMixChildMenuWidth);
    }
    return w;
  });

  return {
    headerProps,
    siderVisible,
    siderWidth,
    siderCollapsedWidth,

    getLayoutSetting,
    getLayoutMode,
    getLayoutMenuMode,
    getLayoutMinWidth,

    isVerticalMix,
    isHorizontalMix,

    setLayoutMode,
  };
};
