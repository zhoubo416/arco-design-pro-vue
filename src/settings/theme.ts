import {
  EnumThemeAnimateMode,
  EnumThemeHorizontalMenuPosition,
  EnumThemeLayoutMode,
  ThemeEnum,
} from '@/enums';
import jsonSetting from './theme.json';
import type { Project } from '@/typings/system';
import { EnumType } from '@/typings/system';

/** 布局模式列表 */
interface LayoutModeList {
  value: EnumType.ThemeLayoutMode;
  label: EnumThemeLayoutMode;
}

/** 动画类型列表 */
interface AnimateModeList {
  value: EnumType.ThemeAnimateMode;
  label: EnumThemeAnimateMode;
}

/** 水平模式的菜单的位置列表 */
interface HorizontalMenuPositionList {
  value: EnumType.ThemeHorizontalMenuPosition;
  label: EnumThemeHorizontalMenuPosition;
}

const themeColorList = [
  '#1890ff',
  '#409EFF',
  '#2d8cf0',
  '#007AFF',
  '#5ac8fa',
  '#5856D6',
  '#536dfe',
  '#9c27b0',
  '#AF52DE',
  '#0096c7',
  '#00C1D4',
  '#34C759',
  '#43a047',
  '#7cb342',
  '#c0ca33',
  '#78DEC7',
  '#e53935',
  '#d81b60',
  '#f4511e',
  '#fb8c00',
  '#ffb300',
  '#fdd835',
  '#6d4c41',
  '#546e7a',
];

/** 布局模式列表 */
export const layoutModeList: LayoutModeList[] = [
  { value: 'vertical', label: EnumThemeLayoutMode.vertical },
  { value: 'vertical-mix', label: EnumThemeLayoutMode['vertical-mix'] },
  { value: 'horizontal', label: EnumThemeLayoutMode.horizontal },
  { value: 'horizontal-mix', label: EnumThemeLayoutMode['horizontal-mix'] },
];

/** 动画类型列表 */
export const pageAnimateModeList: AnimateModeList[] = [
  { value: 'fade-slide', label: EnumThemeAnimateMode['fade-slide'] },
  { value: 'fade', label: EnumThemeAnimateMode.fade },
  { value: 'fade-bottom', label: EnumThemeAnimateMode['fade-bottom'] },
  { value: 'fade-scale', label: EnumThemeAnimateMode['fade-scale'] },
  { value: 'zoom-fade', label: EnumThemeAnimateMode['zoom-fade'] },
  { value: 'zoom-out', label: EnumThemeAnimateMode['zoom-out'] },
];

/** 水平模式的菜单的位置列表 */
export const menuHorizontalPositionList: HorizontalMenuPositionList[] = [
  { value: 'flex-start', label: EnumThemeHorizontalMenuPosition['flex-start'] },
  { value: 'center', label: EnumThemeHorizontalMenuPosition.center },
  { value: 'flex-end', label: EnumThemeHorizontalMenuPosition['flex-end'] },
];

const defaultThemeSetting: Project.Setting = {
  darkMode: ThemeEnum.LIGHT,
  followSystemTheme: true,
  layout: {
    minWidth: 900,
    mode: 'vertical',
  },
  themeColor: themeColorList[0],
  themeColorList,
  otherColor: {
    info: '#2080f0',
    success: '#52c41a',
    warning: '#faad14',
    error: '#f5222d',
  },
  isCustomizeInfoColor: false,
  fixedHeaderAndTab: true,
  showReload: true,
  header: {
    inverted: false,
    height: 56,
    crumb: {
      visible: true,
      showIcon: true,
    },
  },
  tab: {
    visible: true,
    height: 44,
    mode: 'chrome',
    isCache: true,
  },
  sider: {
    /** 侧边栏反转色 */
    inverted: false,
    /** 侧边栏宽度 */
    width: 220,
    /** 侧边栏折叠时的宽度 */
    collapsedWidth: 64,
    /** vertical-mix模式下侧边栏宽度 */
    mixWidth: 80,
    /** vertical-mix模式下侧边栏折叠时的宽度 */
    mixCollapsedWidth: 48,
    /** vertical-mix模式下侧边栏的子菜单的宽度 */
    mixChildMenuWidth: 200,
    /** vertical-mix模式下 侧边栏的固定状态 */
    mixSiderFixed: true,
    /** 侧边栏折叠状态 */
    collapsed: false,
  },
  menu: {
    horizontalPosition: 'flex-start',
  },
  footer: {
    fixed: false,
    height: 48,
  },
  page: {
    animate: true,
    animateMode: 'fade-slide',
  },
  locale: {
    language: 'zh-CN',
    languageList: ['zh-CN', 'en-US'],
    default: 'zh-CN',
  },
  watermark: {
    visible: false,
    text: '水印',
  },
  themeSetting: {
    drawerVisible: true,
  },
};

export const themeSetting = (jsonSetting as Project.Setting) || defaultThemeSetting;
