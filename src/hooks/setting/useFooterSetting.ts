import { useAppStore } from '@/store';
import { computed } from 'vue';

export function useFooterSetting() {
  const appStore = useAppStore();
  // 获取footer配置
  const getFooterSetting = computed(() => appStore.getFooterSetting);
  // 获取footer高度
  const getFooterHeight = computed(() => appStore.getFooterSetting.height);
  // 获取footer固定状态
  const getFooterFixed = computed(() => appStore.getFooterSetting.fixed);

  return {
    getFooterSetting,
    getFooterHeight,
    getFooterFixed,
  };
}
