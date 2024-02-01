import type { IEditor } from '@visactor/vtable-editors';
import { h, createApp, ref } from 'vue';
import { Input } from '@arco-design/web-vue';

interface EditorConfig {
  params?: any;
}

interface ReferencePosition {
  rect: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
}
const customElementId = 'customElement';
const customValue = ref('');

export class CustomEditor implements IEditor {
  element!: HTMLElement;
  container!: HTMLElement;
  editorConfig: EditorConfig;
  successCallback?: () => void;
  customNode: any;

  constructor(editorConfig: EditorConfig) {
    this.editorConfig = editorConfig;
  }

  public createElement(value: string, referencePosition: ReferencePosition | undefined): void {
    // 1、创建元素，用来挂着目标组件
    const holder = document.createElement('div');
    holder.setAttribute('id', customElementId);
    holder.style.position = 'absolute';
    // holder.style.padding = '4px';
    holder.style.width = '100%';
    holder.style.boxSizing = 'border-box';
    this.element = holder;
    this.container.append(holder);
    if (referencePosition?.rect) this.adjustPosition(referencePosition.rect);
    const style = {
      width: (referencePosition?.rect?.width || 0) + 'px',
      height: (referencePosition?.rect?.height || 0) + 'px',
      boxSizing: 'border-box',
    };
    // 2、实例化并挂着组件
    customValue.value = value;
    const vNode = h(Input, {
      style: style,
      'default-value': value,
      onInput: (v) => {
        customValue.value = v;
      },
    });
    const customNode = createApp(vNode);
    customNode.mount('#' + customElementId);

    // 3、暴露这个组件实例，在退出时销毁
    this.customNode = customNode;

    // 4、获得焦点
    const child = document.getElementById(customElementId)?.getElementsByTagName('input');
    child?.[0].focus();
  }

  public getValue(): string {
    return customValue.value;
  }

  public beginEditing(
    container: HTMLElement,
    referencePosition: ReferencePosition | undefined,
    value: string
  ): void {
    this.container = container;
    this.createElement(value, referencePosition);
  }

  private adjustPosition(rect: { top: number; left: number; width: number; height: number }): void {
    this.element.style.top = rect.top + 'px';
    this.element.style.left = rect.left + 'px';
    this.element.style.width = rect.width + 'px';
    this.element.style.height = rect.height + 'px';
  }

  public endEditing(): void {
    // Your logic for ending editing
  }

  public exit(): void {
    this.customNode?.unmount();
    this.element?.parentNode?.removeChild(this.element);
  }

  public targetIsOnEditor(target: HTMLElement): boolean {
    return target?.parentNode?.parentNode === this.element;
  }

  public bindSuccessCallback(success: () => void): void {
    this.successCallback = success;
  }
}
