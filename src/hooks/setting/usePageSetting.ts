import { useAppStore } from '@/store';
import { computed } from 'vue';
import { EnumType, Project } from '@/typings/system';

export function usePageSetting() {
  const appStore = useAppStore();

  // 获取Page配置
  const getPageSetting = computed(() => appStore.getPageSetting);
  // 获取Page动画模式
  const getPageAnimateMode = computed(() => appStore.getPageSetting.animateMode);
  // 获取Page动画
  const getPageAnimate = computed(() => appStore.getPageSetting.animate);
  // const setPageSetting = (setting: Partial<Project.Page>) => {
  //   appStore.setPageSetting(setting);
  // };

  const setPageAnimateMode = (animateMode: EnumType.ThemeAnimateMode) => {
    appStore.setPageSetting({ animateMode });
  };

  const setPageAnimate = (animate: boolean) => {
    appStore.setPageSetting({ animate });
  };

  return {
    getPageSetting,
    getPageAnimateMode,
    getPageAnimate,

    setPageAnimateMode,
    setPageAnimate,
  };
}
