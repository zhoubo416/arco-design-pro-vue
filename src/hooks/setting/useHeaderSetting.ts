import { useAppStore } from '@/store';
import { computed } from 'vue';
import { Project } from '@/typings/system';

export const useHeaderSetting = () => {
  const appStore = useAppStore();

  // 获取header高度
  const getHeaderHeight = computed(() => appStore.getHeaderSetting.height);
  // 获取header面包屑样式
  const getHeaderCrumb = computed(() => appStore.getHeaderSetting.crumb);
  // 获取header反转色
  const getHeaderInverted = computed(() => appStore.getHeaderSetting.inverted);

  // 设置header
  const setHeaderSetting = (setting: Partial<Project.Header>) => {
    appStore.setHeaderSetting(setting);
  };
  return {
    getHeaderHeight,
    getHeaderCrumb,
    getHeaderInverted,

    setHeaderSetting,
  };
};
