import { storage } from '@/utils/storage/storage';
import { THEME_COLOR_KEY } from '@/enums/cacheEnum';

/**
 * 缓存主题颜色
 * @param color
 */
export function setThemeColor(color: string) {
  storage.set(THEME_COLOR_KEY, color);
}

/**
 * 获取缓存的主题颜色
 */
export function getThemeColor() {
  return storage.get(THEME_COLOR_KEY);
}
