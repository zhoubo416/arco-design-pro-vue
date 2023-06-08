import { useAppStore } from '@/store';
import { computed } from 'vue';
import { Project } from '@/typings/system';

export const useHeaderSetting = () => {
  const appStore = useAppStore();

  // 获取header高度
  const getHeaderHeight = computed(() => appStore.getHeaderSetting.height);

  // 获取header面包屑样式
  const getHeaderCrumb = computed(() => appStore.getHeaderSetting.crumb);
  const getHeaderCrumbVisible = computed(() => appStore.getHeaderSetting.crumb.visible);
  const getHeaderCrumbShowIcon = computed(() => appStore.getHeaderSetting.crumb.showIcon);

  // 获取header反转色
  const getHeaderInverted = computed(() => appStore.getHeaderSetting.inverted);

  // 获取

  // 设置header
  const setHeaderSetting = (setting: Partial<Project.Header>) => {
    appStore.setHeaderSetting(setting);
  };

  const setHeaderHeight = (height: number) => {
    appStore.setHeaderSetting({ height });
  };

  const setHeaderCrumbVisible = (visible: boolean) => {
    appStore.setHeaderCrumbSetting({ visible });
  };

  const setHeaderCrumbShowIcon = (showIcon: boolean) => {
    appStore.setHeaderCrumbSetting({ showIcon });
  };

  return {
    getHeaderHeight,
    getHeaderCrumb,
    getHeaderCrumbVisible,
    getHeaderCrumbShowIcon,
    getHeaderInverted,

    setHeaderSetting,
    setHeaderHeight,
    setHeaderCrumbVisible,
    setHeaderCrumbShowIcon,
  };
};
