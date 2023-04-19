import { defineStore } from 'pinia';
import { useRouterPush } from '@/composables';
import { getThemeSettings } from '@/store/modules/app/helpers';
import { DeepPartial } from 'unocss';
import { deepMerge } from '@/utils';
// import { ProjectConfig } from '@/typings/config';

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
  },
});
