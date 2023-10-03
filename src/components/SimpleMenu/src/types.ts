import { Menu as MenuItem } from '@/router/types';

export interface Props {
  // 菜单集合
  items: MenuItem[];
  // 是否折叠
  collapse: boolean;
  // 是否显示logo
  mixSider: boolean;
  // 主题
  theme: string;
  // 手风琴
  accordion: boolean;
  // 折叠是否显示title
  collapsedShowTitle: boolean;
  // 点击方法
  beforeClickFn: (key: string) => Promise<boolean>;
  // 是否折叠菜单
  isSplitMenu?: boolean;
}

export interface MenuState {
  activeName: string;
  openNames: string[];
  activeSubMenuNames: string[];
}
