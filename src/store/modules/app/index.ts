import { defineStore } from 'pinia';
import { useRouterPush } from '@/composables';
import { getThemeSettings } from '@/store/modules/app/helpers';
import { DeepPartial } from 'unocss';
import { deepMerge } from '@/utils';
import type { Project } from '@/typings/system';
import { ThemeEnum } from '@/enums';
import { storage } from '@/utils/storage/storage';
import { APP_DARK_MODE_KEY, LOCALE_KEY } from '@/enums/cacheEnum';
import { setBaseColor } from '@/utils/color';

interface AppState {
  /** 切换页面加载状态 */
  pageLoading: boolean;
  /** 项目配置的抽屉可见状态 */
  // settingDrawerVisible: boolean;
  /** 侧边栏折叠状态 */
  // siderCollapse: boolean;
  /** 项目设置 */
  projectSetting: Project.Setting;
  /** 项目按钮 */
  projectButton: Project.Button;
}

export const useAppStore = defineStore('app-store', {
  state: (): AppState => ({
    pageLoading: false,
    // settingDrawerVisible: false,
    // siderCollapse: false,
    // mixSiderFixed: false,
    projectSetting: getThemeSettings(),
    projectButton: {
      setting: true,
      github: true,
    },
  }),
  getters: {
    getPageLoading(): boolean {
      return this.pageLoading;
    },
    getProjectSetting(): Project.Setting {
      return this.projectSetting;
    },
    getProjectButton(): Project.Button {
      return this.projectButton;
    },
    getHeaderSetting(): Project.Header {
      return this.projectSetting.header;
    },
    getMenuSetting(): Project.Menu {
      return this.projectSetting.menu;
    },
    getSiderSetting(): Project.Sider {
      return this.projectSetting.sider;
    },
    getTabSetting(): Project.Tab {
      return this.projectSetting.tab;
    },
    getFooterSetting(): Project.Footer {
      return this.projectSetting.footer;
    },
    getLayoutSetting(): Project.Layout {
      return this.projectSetting.layout;
    },
    getPageSetting(): Project.Page {
      return this.projectSetting.page;
    },
    getLocale(): Project.Locale {
      return this.projectSetting.locale;
    },
    getDarkMode(): ThemeEnum {
      return this.projectSetting.darkMode;
    },
    getThemeSetting(): Project.ThemeSetting {
      return this.projectSetting.themeSetting;
    },
  },
  actions: {
    /**
     * 重载页面
     */
    async reloadPage(path: string) {
      const { routerPush } = useRouterPush(false);
      routerPush(`/redirect${path}`);
      // this.reloadFlag = false;
      // await nextTick();
      // if (duration) {
      //   setTimeout(() => {
      //     this.reloadFlag = true;
      //   }, duration);
      // } else {
      //   this.reloadFlag = true;
      // }
      // setTimeout(() => {
      //   document.documentElement.scrollTo({ left: 0, top: 0 });
      // }, 100);
    },

    /** 设置页面加载状态 */
    setPageLoading(loading: boolean): void {
      this.pageLoading = loading;
    },
    setProjectSetting(setting: DeepPartial<Project.Setting>): void {
      this.projectSetting = deepMerge(this.projectSetting || {}, setting);
    },
    setHeaderSetting(setting: DeepPartial<Project.Header>): void {
      this.projectSetting.header = deepMerge(this.projectSetting.header || {}, setting);
    },
    setSiderSetting(setting: DeepPartial<Project.Sider>): void {
      this.projectSetting.sider = deepMerge(this.projectSetting.sider || {}, setting);
    },
    setLayoutSetting(setting: DeepPartial<Project.Layout>): void {
      this.projectSetting.layout = deepMerge(this.projectSetting.layout || {}, setting);
    },
    setThemeSetting(setting: DeepPartial<Project.ThemeSetting>): void {
      // this.projectSetting.themeSetting = deepMerge(this.projectSetting.themeSetting || {}, setting);
      console.log(1111);
      this.projectSetting.themeSetting.drawerVisible = setting.drawerVisible ?? false;
    },
    setT1(a: boolean): void {
      this.projectSetting.themeSetting.drawerVisible = a;
    },
    setDarkMode(mode: ThemeEnum): void {
      this.projectSetting.darkMode = mode;
      storage.set(APP_DARK_MODE_KEY, mode);
      setBaseColor(this.getProjectSetting.themeColor);
    },
    setLocale(locale: Partial<Project.Locale>): void {
      this.projectSetting.locale = { ...this.projectSetting.locale, ...locale };
      storage.set(LOCALE_KEY, locale);
    },
    setThemeColor(color: string): void {
      this.projectSetting.themeColor = color;
    },

    initLocale() {
      const locale = storage.get(LOCALE_KEY);
      console.log('initLocale', locale);
      if (locale) {
        this.setLocale(locale);
      }
    },
  },
});
