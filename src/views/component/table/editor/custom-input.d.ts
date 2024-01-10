import type { IEditor, Placement, RectProps } from '@visactor/vtable-editor/types';
export interface CustomInputConfig {
  max?: number;
  min?: number;
}
export declare class CustomInput implements IEditor {
  editorType: string;
  editorConfig: CustomInputConfig;
  container: HTMLElement;
  element: HTMLInputElement;
  constructor(editorConfig?: CustomInputConfig);
  createElement(): void;
  setValue(value: string): void;
  getValue(): string;
  beginEditing(
    container: HTMLElement,
    referencePosition: {
      rect: RectProps;
      placement?: Placement;
    },
    value?: string
  ): void;
  adjustPosition(rect: RectProps): void;
  endEditing(): void;
  exit(): void;
  targetIsOnEditor(target: HTMLElement): boolean;
}
