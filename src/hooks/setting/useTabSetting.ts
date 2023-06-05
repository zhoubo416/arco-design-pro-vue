// 获取tab配置
import { computed } from 'vue';
import { useAppStore } from '@/store';
import { Project } from '@/typings/system';

export function useTabSetting() {
  const appStore = useAppStore();

  // 获取tab配置
  const getTabSetting = computed(() => appStore.getTabSetting);

  // 获取tab高度
  const getTabHeight = computed(() => appStore.getTabSetting.height);
  // 获取tab模式
  const getTabMode = computed(() => appStore.getTabSetting.mode);
  // 获取tab模式列表
  const getTabModeList = computed(() => appStore.getTabSetting.modeList);
  // 获取tab是否缓存
  const getTabIsCache = computed(() => appStore.getTabSetting.isCache);
  // 获取tab是否可见
  const getTabVisible = computed(() => appStore.getTabSetting.visible);

  const setTabSetting = (setting: Partial<Project.Tab>) => {
    appStore.setTabSetting(setting);
  };

  const setTabHeight = (height: number) => {
    appStore.setTabSetting({ height });
  };

  const setTabIsCache = (isCache: boolean) => {
    appStore.setTabSetting({ isCache });
  };

  const setTabVisible = (visible: boolean) => {
    appStore.setTabSetting({ visible });
  };

  return {
    getTabSetting,
    getTabHeight,
    getTabMode,
    getTabModeList,
    getTabIsCache,
    getTabVisible,

    setTabSetting,
    setTabHeight,
    setTabIsCache,
    setTabVisible,
  };
}
