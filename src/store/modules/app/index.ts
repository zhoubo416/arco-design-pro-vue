import { defineStore } from 'pinia';
import { useRouterPush } from '@/composables';
// import { ProjectConfig } from '@/typings/config';

interface AppState {
  /** 切换页面加载状态 */
  pageLoading: boolean;
  //
  // /** 项目配置 */
  // projectConfig: ProjectConfig | null;
  /** 重载页面(控制页面的显示) */
  reloadFlag: boolean;
  /** 项目配置的抽屉可见状态 */
  settingDrawerVisible: boolean;
  /** 侧边栏折叠状态 */
  siderCollapse: boolean;
  /** vertical-mix模式下 侧边栏的固定状态 */
  mixSiderFixed: boolean;
}

export const useAppStore = defineStore('app-store', {
  state: (): AppState => ({
    pageLoading: false,
    reloadFlag: true,
    settingDrawerVisible: false,
    siderCollapse: false,
    mixSiderFixed: false,
  }),
  getters: {
    getPageLoading(): boolean {
      return this.pageLoading;
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
    /** 打开设置抽屉 */
    openSettingDrawer() {
      this.settingDrawerVisible = true;
    },
    /** 关闭设置抽屉 */
    closeSettingDrawer() {
      this.settingDrawerVisible = false;
    },
    /** 切换抽屉可见状态 */
    toggleSettingDrawerVisible() {
      this.settingDrawerVisible = !this.settingDrawerVisible;
    },
    /** 设置侧边栏折叠状态 */
    setSiderCollapse(collapse: boolean) {
      this.siderCollapse = collapse;
    },
    /** 折叠/展开 侧边栏折叠状态 */
    toggleSiderCollapse() {
      this.siderCollapse = !this.siderCollapse;
    },
    /** 设置 vertical-mix模式下 侧边栏的固定状态 */
    setMixSiderIsFixed(isFixed: boolean) {
      this.mixSiderFixed = isFixed;
    },
    /** 设置 vertical-mix模式下 侧边栏的固定状态 */
    toggleMixSiderFixed() {
      this.mixSiderFixed = !this.mixSiderFixed;
    },

    /** 设置页面加载状态 */
    setPageLoading(loading: boolean): void {
      this.pageLoading = loading;
    },
  },
});
