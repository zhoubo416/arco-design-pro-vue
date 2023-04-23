import { computed, unref } from 'vue';
import { useAppSetting } from '@/hooks/setting/useAppSetting';
import type { EnumType, GlobalHeaderProps } from '@/typings/system';

type LayoutHeaderProps = Record<EnumType.ThemeLayoutMode, GlobalHeaderProps>;

export const useBasicLayout = () => {
  const { getLayoutSetting, getSiderSetting } = useAppSetting();
  const { mode: layoutMode } = unref(getLayoutSetting);

  type LayoutMode = 'vertical' | 'horizontal';
  const mode = computed(() => {
    const vertical: LayoutMode = 'vertical';
    const horizontal: LayoutMode = 'horizontal';
    return layoutMode.includes(vertical) ? vertical : horizontal;
  });

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

  const headerProps = computed(() => layoutHeaderProps[layoutMode]);

  const siderVisible = computed(() => layoutMode !== 'horizontal');
  const siderWidth = computed(() => {
    const { width, mixWidth, mixChildMenuWidth, mixSiderFixed } = unref(getSiderSetting);
    const isVerticalMix = layoutMode === 'vertical-mix';
    let w = isVerticalMix ? mixWidth : width;
    if (isVerticalMix && mixSiderFixed) {
      w += mixChildMenuWidth;
    }
    return w;
  });
  const siderCollapsedWidth = computed(() => {
    const { collapsedWidth, mixCollapsedWidth, mixChildMenuWidth, mixSiderFixed } =
      unref(getSiderSetting);
    const isVerticalMix = layoutMode === 'vertical-mix';
    let w = isVerticalMix ? mixCollapsedWidth : collapsedWidth;
    if (isVerticalMix && mixSiderFixed) {
      w += mixChildMenuWidth;
    }
    return w;
  });

  return {
    mode,
    headerProps,
    siderVisible,
    siderWidth,
    siderCollapsedWidth,
  };
};
