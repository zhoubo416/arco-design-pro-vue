export class CustomInput {
  constructor(editorConfig) {
    (this.editorType = 'Input'), (this.editorConfig = editorConfig);
  }
  createElement() {
    const input = document.createElement('input');
    //遍历对象this.editorConfig
    const attrs = this.editorConfig?.attr;
    for (const key in attrs) {
      input.setAttribute(key, attrs[key]);
    }
    /**
     * 默认样式
     */
    input.style.position = 'absolute';
    input.style.padding = '4px';
    input.style.width = '100%';
    input.style.boxSizing = 'border-box';
    if (this.editorConfig?.style) {
      Object.assign(input.style, this.editorConfig.style);
    }

    this.element = input;
    this.container.appendChild(input);
  }
  setValue(value) {
    this.element.value = void 0 !== value ? value : '';
  }
  getValue() {
    return this.element?.value;
  }
  beginEditing(container, referencePosition, value) {
    (this.container = container),
      this.createElement(),
      value && this.setValue(value),
      (null == referencePosition ? void 0 : referencePosition.rect) &&
        this.adjustPosition(referencePosition.rect),
      this.element.focus();
  }
  adjustPosition(rect) {
    (this.element.style.top = rect.top + 'px'),
      (this.element.style.left = rect.left + 'px'),
      (this.element.style.width = rect.width + 'px'),
      (this.element.style.height = rect.height + 'px');
  }
  endEditing() {}
  exit() {
    this.container.removeChild(this.element);
  }
  targetIsOnEditor(target) {
    return target === this.element;
  }
}
//# sourceMappingURL=input-editor.js.map
