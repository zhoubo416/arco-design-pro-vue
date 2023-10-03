import { Ref } from 'vue';

export interface Props {
  /** 主题 */
  theme: string;
  /** 当前激活菜单的 index */
  activeName?: string | number;
  /** 当前打开的 sub-menu 的 index 的数组 */
  openNames: string[];
  /** 是否开启手风琴模式 */
  accordion: boolean;
  /** 菜单宽度(字符串类型) */
  width: string;
  /** 折叠宽度(字符串类型) */
  collapsedWidth: string;
  /** 缩进大小 */
  indentSize: number;
  /** 是否折叠 */
  collapse: boolean;
  /** 当前激活的 sub-menu 的 index 的数组 */
  activeSubMenuNames: (string | number)[];
}

export interface SubMenuProvider {
  addSubMenu: (name: string | number, update?: boolean) => void;
  removeSubMenu: (name: string | number, update?: boolean) => void;
  removeAll: () => void;
  sliceIndex: (index: number) => void;
  isRemoveAllPopup: Ref<boolean>;
  getOpenNames: () => (string | number)[];
  handleMouseleave?: Fn;
  level: number;
  props: Props;
}
