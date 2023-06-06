import { useAppStore } from '@/store';
import { computed } from 'vue';
import { EnumType } from '@/typings/system';

export function useMenuSetting() {
  const appStore = useAppStore();

  // 获取menu配置
  const getMenuSetting = computed(() => appStore.getMenuSetting);
  // 获取menu水平位置
  const getMenuHorizontalPosition = computed(() => appStore.getMenuSetting.horizontalPosition);

  const setMenuHorizontalPosition = (position: EnumType.ThemeHorizontalMenuPosition) => {
    appStore.setMenuSetting({ horizontalPosition: position });
  };

  return {
    getMenuSetting,
    getMenuHorizontalPosition,
    setMenuHorizontalPosition,
  };
}
