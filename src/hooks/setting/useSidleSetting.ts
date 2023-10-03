import { computed, unref } from 'vue';
import { useAppStore } from '@/store';
import { Project } from '@/typings/system';
import { EnumMenuMode } from '@/enums';
import { useLayoutSetting } from '@/hooks';

export const useSidleSetting = () => {
  const appStore = useAppStore();

  const { getLayoutMode, isVerticalMix } = useLayoutSetting();

  // 获取sider配置
  const getSiderSetting = computed(() => appStore.getSiderSetting);

  // 获取侧边栏反转色
  const getSiderInverted = computed(() => appStore.getSiderSetting.inverted);
  // 获取侧边栏展开时的宽度
  const getSiderWidth = computed(() => appStore.getSiderSetting.width);
  // 获取侧边栏折叠时的宽度
  const getSiderCollapsedWidth = computed(() => appStore.getSiderSetting.collapsedWidth);
  // 获取折叠后是否显示名称
  const getSiderCollapsedShowTitle = computed(() => appStore.getSiderSetting.collapsedShowTitle);
  // 获取vertical-mix模式下侧边栏宽度
  const getSiderMixWidth = computed(() => appStore.getSiderSetting.mixWidth);
  // 获取vertical-mix模式下侧边栏折叠时的宽度
  const getSiderMixCollapsedWidth = computed(() => appStore.getSiderSetting.mixCollapsedWidth);
  // 获取vertical-mix模式下侧边栏的子菜单的宽度
  const getSiderMixChildMenuWidth = computed(() => appStore.getSiderSetting.mixChildMenuWidth);
  // 获取vertical-mix模式下 侧边栏的固定状态
  const getSiderMixSiderFixed = computed(() => appStore.getSiderSetting.mixSiderFixed);
  // 获取侧边栏折叠状态
  const getSiderCollapsed = computed(() => appStore.getSiderSetting.collapsed);
  // 获取侧边栏隐藏状态
  const getSiderHidden = computed(() => appStore.getSiderSetting.hidden);
  // 是否显示侧边栏
  const getSiderVisible = computed((): boolean => unref(getLayoutMode) !== EnumMenuMode.HORIZONTAL);
  // 获取侧边栏计算宽度
  const getSiderCountWidth = computed((): number => {
    let w = unref(isVerticalMix) ? unref(getSiderMixWidth) : unref(getSiderWidth);
    if (unref(isVerticalMix) && unref(getSiderMixSiderFixed)) {
      w += unref(getSiderMixChildMenuWidth);
    }
    return w;
  });
  // 获取侧边栏折叠计算宽度
  const getSiderCollapsedCountWidth = computed((): number => {
    // const { collapsedWidth, mixCollapsedWidth, mixChildMenuWidth, mixSiderFixed } =
    //   unref(getSiderSetting);
    let w = unref(isVerticalMix) ? unref(getSiderMixCollapsedWidth) : unref(getSiderCollapsedWidth);
    if (unref(isVerticalMix) && unref(getSiderMixSiderFixed)) {
      w += unref(getSiderMixChildMenuWidth);
    }
    return w;
  });

  // 设置sider
  const setSiderSetting = (setting: Partial<Project.Sider>) => {
    appStore.setSiderSetting(setting);
  };

  // 设置侧边栏宽度
  const setSiderWidth = (width: number) => {
    appStore.setSiderSetting({ width });
  };

  // 设置侧边栏折叠宽度
  const setSiderCollapsedWidth = (collapsedWidth: number) => {
    appStore.setSiderSetting({ collapsedWidth });
  };

  // 设置vertical-mix模式下侧边栏宽度
  const setSiderMixWidth = (mixWidth: number) => {
    appStore.setSiderSetting({ mixWidth });
  };

  // 设置侧边栏反转色
  const setSiderInverted = (inverted: boolean) => {
    appStore.setSiderSetting({ inverted });
  };

  // 设置侧边栏隐藏
  const setSiderHidden = (hidden: boolean) => {
    appStore.setSiderSetting({ hidden });
  };

  return {
    getSiderSetting,
    getSiderInverted,
    getSiderWidth,
    getSiderCollapsedWidth,
    getSiderCollapsedShowTitle,
    getSiderMixWidth,
    getSiderMixCollapsedWidth,
    getSiderMixChildMenuWidth,
    getSiderMixSiderFixed,
    getSiderCollapsed,
    getSiderHidden,
    getSiderVisible,
    getSiderCountWidth,
    getSiderCollapsedCountWidth,

    setSiderSetting,
    setSiderWidth,
    setSiderMixWidth,
    setSiderInverted,
    setSiderHidden,
    setSiderCollapsedWidth,
  };
};
