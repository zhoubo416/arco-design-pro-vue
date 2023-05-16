import { computed } from 'vue';
import { useAppStore } from '@/store';
import { Project } from '@/typings/system';

export const useSidleSetting = () => {
  const appStore = useAppStore();

  // 获取sider配置
  const getSiderSetting = computed(() => appStore.getSiderSetting);

  // 获取侧边栏反转色
  const getSiderInverted = computed(() => appStore.getSiderSetting.inverted);
  // 获取侧边栏宽度
  const getSiderWidth = computed(() => appStore.getSiderSetting.width);
  // 获取侧边栏折叠时的宽度
  const getSiderCollapsedWidth = computed(() => appStore.getSiderSetting.collapsedWidth);
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

  const setSiderSetting = (setting: Partial<Project.Sider>) => {
    appStore.setSiderSetting(setting);
  };
  return {
    getSiderSetting,
    getSiderInverted,
    getSiderWidth,
    getSiderCollapsedWidth,
    getSiderMixWidth,
    getSiderMixCollapsedWidth,
    getSiderMixChildMenuWidth,
    getSiderMixSiderFixed,
    getSiderCollapsed,

    setSiderSetting,
  };
};
