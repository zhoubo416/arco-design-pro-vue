/**
 * SimpleMenu 上下文
 */

import type { InjectionKey, Ref } from 'vue';

import { createContext, useContext } from '@/hooks/core/useContext';
import type { Emitter } from '@/utils/mitt';

export interface SimpleRootMenuContextProps {
  rootMenuEmitter: Emitter;
  activeName: Ref<string | number>;
}

const key: InjectionKey<SimpleRootMenuContextProps> = Symbol();

// 创建一个简单的根菜单上下文
export function createSimpleRootMenuContext(context: SimpleRootMenuContextProps) {
  return createContext<SimpleRootMenuContextProps>(context, key, { readonly: false, native: true });
}

// 获取一个简单的根菜单上下文
export function useSimpleRootMenuContext() {
  return useContext<SimpleRootMenuContextProps>(key);
}
