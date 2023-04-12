import { RouteLocationNormalized } from 'vue-router';
import { CacheTypeEnum } from '@/enums/cacheEnum';
import { ThemeEnum } from '@/enums';

export interface ProjectConfig {
  /** 权限相关存储位置 */
  permissionCacheType: CacheTypeEnum;
  /** 是否显示配置按钮 */
  showSettingButton: boolean;
  /** 是否显示主题切换按钮 */
  showDarkModeToggle: boolean;
  /** 是否显示多页签 */
  showMultiTabs: boolean;

  /** 主题 */
  darkMode?: ThemeEnum;
  /** 是否自动跟随系统主题 */
  followSystemTheme: boolean;
  /** 布局样式 */
  layout: Layout;
  /** 主题颜色 */
  themeColor: string;
  /** 主题颜色列表 */
  themeColorList: string[];
  /** 其他颜色 */
  otherColor: OtherColor;
  /** 是否自定义info的颜色(默认取比主题色深一级的颜色) */
  isCustomizeInfoColor: boolean;
  /** 固定头部和多页签 */
  fixedHeaderAndTab: boolean;
  /** 显示重载按钮 */
  showReload: boolean;
  /** 头部样式 */
  header: Header;
  /** 标多页签样式 */
  tab: Tab;
  /** 侧边栏样式 */
  sider: Sider;
  /** 菜单样式 */
  menu: Menu;
  /** 底部样式 */
  footer: Footer;
  /** 页面样式 */
  page: Page;
  /** 中英文 */
  language: EnumType.Language;
  /** 水印 */
  watermark: Watermark;
}

export interface GlobEnvConfig {
  // 标题
  VITE_GLOB_APP_TITLE: string;
  // 接口地址
  VITE_GLOB_API_URL: string;
  // 接口前缀
  VITE_GLOB_API_URL_PREFIX?: string;
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string;
  // 图片上传地址
  VITE_GLOB_UPLOAD_URL?: string;
  // 图片前缀地址
  VITE_GLOB_IMG_URL?: string;
}

// api config
export interface GlobConfig {
  // 标题
  title: string;
  // 接口地址
  apiUrl: string;
  // Project abbreviation
  shortName: string;
  // 接口前缀
  urlPrefix?: string;
  // 图片上传地址
  uploadUrl?: string;
  // 图片前缀地址
  imgUrl?: string;
}

// Tabs
export type RouteItem = Partial<RouteLocationNormalized> & {
  fullPath: string;
  name: string;
};

export interface IheaderSetting {
  fixed: boolean;
  isReload: boolean;
  headerHeight: string;
}

export interface ImenuSetting {
  minMenuWidth: number;
  menuWidth: number;
  fixed: boolean;
  mixMenu: boolean;
  collapsed: boolean;
}

// tabs
export interface ImultiTabsSetting {
  fixed: boolean;
  show: boolean;
}

export interface IcrumbsSetting {
  show: boolean;
  showIcon: boolean;
}
