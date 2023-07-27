import { useAppStore } from '@/store';
import { computed, unref } from 'vue';
import { Project } from '@/typings/system';
import { useLayoutSetting } from '@/hooks';

export const useHeaderSetting = () => {
  const appStore = useAppStore();

  const { getLayoutMode, getLayoutHeaderProps } = useLayoutSetting();

  // 获取header高度
  const getHeaderHeight = computed(() => appStore.getHeaderSetting.height);

  // 获取header面包屑样式
  const getHeaderCrumb = computed(() => appStore.getHeaderSetting.crumb);
  // 获取header面包屑是否显示
  const getHeaderCrumbVisible = computed(() => appStore.getHeaderSetting.crumb.visible);
  // 获取header面包屑是否显示图标
  const getHeaderCrumbShowIcon = computed(() => appStore.getHeaderSetting.crumb.showIcon);
  // 获取header反转色
  const getHeaderInverted = computed(() => appStore.getHeaderSetting.inverted);
  // 获取header配置
  const getHeaderProps = computed(() => getLayoutHeaderProps[unref(getLayoutMode)]);

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
    getHeaderProps,

    setHeaderSetting,
    setHeaderHeight,
    setHeaderCrumbVisible,
    setHeaderCrumbShowIcon,
  };
};
