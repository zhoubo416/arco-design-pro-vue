import { Project } from '@/typings/system';
import { useAppStore } from '@/store';
import { computed } from 'vue';

export const useThemeSetting = () => {
  const appStore = useAppStore();

  // 获取主题配置（实际上是页面配置）
  const getThemeVisible = computed(() => appStore.getThemeSetting.drawerVisible);

  // 设置主题配置
  const setThemeSetting = (setting: Partial<Project.ThemeSetting>) => {
    appStore.setThemeSetting(setting);
  };

  return {
    getThemeVisible,

    setThemeSetting,
  };
};
