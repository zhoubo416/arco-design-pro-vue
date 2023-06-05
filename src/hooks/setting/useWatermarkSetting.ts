import { useAppStore } from '@/store';
import { computed, unref } from 'vue';
import watermark from '@/utils/watermark';

export function useWatermarkSetting() {
  const appStore = useAppStore();

  // // 获取水印配置
  // const getWatermarkSetting = computed(() => appStore.getWatermarkSetting);

  // 获取水印文本
  const getWatermarkText = computed(() => appStore.getWatermarkSetting.text);

  // 获取水印是否展示
  const getWatermarkVisible = computed(() => appStore.getWatermarkSetting.visible);

  // // 设置水印配置
  // const setWatermarkSetting = (setting: Partial<Project.Watermark>) => {
  //   appStore.setWatermarkSetting(setting);
  // };

  //     /** 设置水印 */
  //     setWatermark(val: boolean) {
  //       this.watermark.watermark = val;
  //       val ? watermark.set(this.watermark.watermarkText || '水印', {}) : watermark.close();
  //     },
  //     /** 设置水印文字 */
  //     setWatermarkText(text: string) {
  //       this.watermark.watermarkText = text;
  //     },

  // 设置水印文本
  const setWatermarkText = (text: string) => {
    appStore.setWatermarkSetting({ text });
  };

  // 设置水印是否展示
  const setWatermarkVisible = (visible: boolean) => {
    appStore.setWatermarkSetting({ visible });
    console.log(visible, unref(getWatermarkText));
    visible ? watermark.set(unref(getWatermarkText) || '水印', {}) : watermark.close();
  };

  return {
    // getWatermarkSetting,
    getWatermarkText,
    getWatermarkVisible,

    setWatermarkText,
    setWatermarkVisible,
  };
}
