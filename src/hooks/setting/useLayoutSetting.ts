import { computed, unref } from 'vue';
import type { EnumType, GlobalHeaderProps } from '@/typings/system';
import { useAppStore } from '@/store';
import { EnumMenuMode } from '@/enums';

type LayoutHeaderProps = Record<EnumType.ThemeLayoutMode, GlobalHeaderProps>;

export const useLayoutSetting = () => {
  const appStore = useAppStore();

  // 获取Layout配置
  const getLayoutSetting = computed(() => appStore.getLayoutSetting);
  // 获取Layout mode
  const getLayoutMode = computed(() => appStore.getLayoutSetting.mode);
  // 获取Layout minWidth // 无用？
  const getLayoutMinWidth = computed(() => appStore.getLayoutSetting.minWidth);

  // 是否是垂直混合模式
  const isVerticalMix = computed(() => unref(getLayoutMode) === EnumMenuMode.VERTICAL_MIX);
  // 是否是水平混合模式
  const isHorizontalMix = computed(() => unref(getLayoutMode) === EnumMenuMode.HORIZONTAL_MIX);

  // 获取Layout menu mode
  const getLayoutMenuMode = computed(() => {
    const vertical = EnumMenuMode.VERTICAL;
    const horizontal = EnumMenuMode.HORIZONTAL;
    return unref(getLayoutMode).includes(vertical) ? vertical : horizontal;
  });

  // 修改layout
  const setLayoutMode = (mode: EnumType.ThemeLayoutMode) => {
    appStore.setLayoutSetting({ mode });
  };

  const getLayoutHeaderProps: LayoutHeaderProps = {
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

  return {
    // headerProps,
    // siderVisible,
    // siderWidth,
    // siderCollapsedWidth,

    getLayoutSetting,
    getLayoutMode,
    getLayoutMenuMode,
    getLayoutMinWidth,

    getLayoutHeaderProps,

    isVerticalMix,
    isHorizontalMix,

    setLayoutMode,
  };
};
