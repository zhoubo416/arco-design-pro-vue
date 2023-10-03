<template>
  <SvgIcon
    :size="size"
    :name="getSvgIcon"
    v-if="isSvgIcon"
    :class="[$attrs.class, 'anticon']"
    :spin="spin"
  />
  <span
    v-else
    ref="elRef"
    :class="[$attrs.class, 'app-iconify anticon', spin && 'app-iconify-spin']"
    :style="getWrapStyle"
  ></span>
</template>

<script lang="ts" setup>
  import SvgIcon from './src/SvgIcon.vue';
  import { computed, CSSProperties, nextTick, onMounted, ref, unref, watch } from 'vue';
  import { isString } from '@/utils';

  interface Props {
    // icon name
    icon: string;
    // icon color
    color?: string;
    // icon size
    size?: number | string;
    spin?: boolean;
    prefix?: string;
  }

  const props = defineProps<Props>();

  const SVG_END_WITH_FLAG = '|svg';
  const elRef = ref(null);

  const isSvgIcon = computed(() => props.icon?.endsWith(SVG_END_WITH_FLAG));
  const getSvgIcon = computed(() => props.icon.replace(SVG_END_WITH_FLAG, ''));
  const getIconRef = computed(() => `${props.prefix ? props.prefix + ':' : ''}${props.icon}`);

  const update = async () => {
    if (unref(isSvgIcon)) return;

    const el: any = unref(elRef);
    if (!el) return;

    await nextTick();
    const icon = unref(getIconRef);
    if (!icon) return;

    // const svg = Iconify.renderSVG(icon, {});
    // if (svg) {
    //   el.textContent = '';
    //   el.appendChild(svg);
    // } else {
    //   const span = document.createElement('span');
    //   span.className = 'iconify';
    //   span.dataset.icon = icon;
    //   el.textContent = '';
    //   el.appendChild(span);
    // }
  };

  const getWrapStyle = computed((): CSSProperties => {
    const { size, color } = props;
    let fs = size;
    if (isString(size)) {
      fs = parseInt(size, 10);
    }

    return {
      fontSize: `${fs}px`,
      color: color,
      display: 'inline-flex',
    };
  });

  watch(() => props.icon, update, { flush: 'post' });

  onMounted(update);
</script>

<style lang="less" scoped></style>
