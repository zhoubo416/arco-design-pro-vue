import { useAppStore } from '@/store';
import { computed, unref } from 'vue';
import { EnumType } from '@/typings/system';
import { useLayoutSetting, useSidleSetting } from '@/hooks';
import { EnumMenuMode } from '@/enums';

export function useMenuSetting() {
  const appStore = useAppStore();

  const { getLayoutMenuMode } = useLayoutSetting();
  const {
    getSiderCollapsed,
    getSiderWidth,
    getSiderMixSiderFixed,
    getSiderHidden,
    getSiderCollapsedShowTitle,
  } = useSidleSetting();

  // 获取menu配置
  const getMenuSetting = computed(() => appStore.getMenuSetting);
  // 获取menu水平位置
  const getMenuHorizontalPosition = computed(() => appStore.getMenuSetting.horizontalPosition);

  // 获取是否是混合模式
  const getIsMixSidebar = computed(() => unref(getLayoutMenuMode) === EnumMenuMode.VERTICAL);

  const getMiniMenuWidth = computed(() => {
    return unref(getSiderHidden) ? 0 : unref(getSiderCollapsedShowTitle) ? 80 : 62;
    // return unref(getSiderCollapsed) ? unref(getSiderCollapsedWidth) : unref(getSiderWidth);
  });

  // 获取menu宽度
  const getRealWidth = computed(() => {
    if (unref(getIsMixSidebar)) {
      return unref(getSiderCollapsed) && !unref(getSiderMixSiderFixed)
        ? unref(getMiniMenuWidth)
        : unref(getSiderWidth);
    }
    return unref(getSiderCollapsed) ? unref(getMiniMenuWidth) : unref(getSiderWidth);
  });

  const setMenuHorizontalPosition = (position: EnumType.ThemeHorizontalMenuPosition) => {
    appStore.setMenuSetting({ horizontalPosition: position });
  };

  return {
    getRealWidth,
    getMenuSetting,
    getMenuHorizontalPosition,
    setMenuHorizontalPosition,
  };
}
