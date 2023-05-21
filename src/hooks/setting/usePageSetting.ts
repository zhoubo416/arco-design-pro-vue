import { useAppStore } from '@/store';
import { computed } from 'vue';

export function usePageSetting() {
  const appStore = useAppStore();

  // 获取Page配置
  const getPageSetting = computed(() => appStore.getPageSetting);
  // 获取Page动画模式
  const getPageAnimateMode = computed(() => appStore.getPageSetting.animateMode);
  // 获取Page动画
  const getPageAnimate = computed(() => appStore.getPageSetting.animate);
  // 获取Page动画模式列表
  const getPageAnimateModeList = computed(() => appStore.getPageSetting.animateModeList);

  return {
    getPageSetting,
    getPageAnimateMode,
    getPageAnimate,
    getPageAnimateModeList,
  };
}
