<template>
  <ul :class="getClass">
    <slot></slot>
  </ul>
</template>

<!--<script lang="ts">-->
<!--  export default {-->
<!--    name: 'Menu',-->
<!--  };-->
<!--</script>-->

<script lang="ts" setup>
  import {
    computed,
    getCurrentInstance,
    nextTick,
    onMounted,
    provide,
    ref,
    watch,
    watchEffect,
  } from 'vue';
  import { useDesign } from '@/hooks/web/useDesign';
  import mitt from '@/utils/mitt';
  import { createSimpleRootMenuContext } from './useSimpleMenuContext';
  import { Props, SubMenuProvider } from './types';

  export interface Emits {
    (e: 'select', index: string | number): boolean;
    (e: 'open-change', index: string[]): boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    theme: 'light',
    collapse: true,
    accordion: true,
    width: '100%',
    collapsedWidth: '48px',
    indentSize: 16,
  });
  const emit = defineEmits<Emits>();
  const { prefixCls } = useDesign('menu');
  const rootMenuEmitter = mitt(); // 事件总线
  const instance = getCurrentInstance(); // 当前实例
  const currentActiveName = ref<string | number>(''); // 当前激活菜单的 index
  const openedNames = ref<string[]>([]); // 当前打开的 sub-menu 的 index 的数组

  const isRemoveAllPopup = ref(false); // 是否移除所有的 popup

  createSimpleRootMenuContext({
    rootMenuEmitter: rootMenuEmitter,
    activeName: currentActiveName,
  });

  const getClass = computed(() => {
    const { theme } = props;
    return [
      prefixCls,
      `${prefixCls}-${theme}`,
      `${prefixCls}-vertical`,
      {
        [`${prefixCls}-collapse`]: props.collapse,
      },
    ];
  });

  // 更新打开的菜单
  watchEffect(() => {
    openedNames.value = props.openNames;
  });

  // 更新激活的菜单
  watchEffect(() => {
    if (props.activeName) {
      currentActiveName.value = props.activeName;
    }
  });

  // 更新打开的菜单
  watch(
    () => props.openNames,
    () => {
      nextTick(() => {
        updateOpened();
      });
    }
  );

  // 更新打开的菜单
  function updateOpened() {
    rootMenuEmitter.emit('on-update-opened', openedNames.value);
  }

  // 添加子菜单
  function addSubMenu(name: string) {
    if (openedNames.value.includes(name)) return;
    openedNames.value.push(name);
    updateOpened();
  }

  // 移除子菜单
  function removeSubMenu(name: string) {
    openedNames.value = openedNames.value.filter((item) => item !== name);
    updateOpened();
  }

  // 移除所有子菜单
  function removeAll() {
    openedNames.value = [];
    updateOpened();
  }

  function sliceIndex(index: number) {
    if (index === -1) return;
    openedNames.value = openedNames.value.slice(0, index + 1);
    updateOpened();
  }

  provide<SubMenuProvider>(`subMenu:${instance?.uid}`, {
    addSubMenu,
    removeSubMenu,
    getOpenNames: () => openedNames.value,
    removeAll,
    isRemoveAllPopup,
    sliceIndex,
    level: 0,
    props: props as any,
  });

  onMounted(() => {
    openedNames.value = !props.collapse ? [...props.openNames] : [];
    updateOpened();
    rootMenuEmitter.on('on-menu-item-select', (name: string) => {
      currentActiveName.value = name;

      nextTick(() => {
        props.collapse && removeAll();
      });
      emit('select', name);
    });

    rootMenuEmitter.on('open-name-change', ({ name, opened }) => {
      if (opened && !openedNames.value.includes(name)) {
        openedNames.value.push(name);
      } else if (!opened) {
        const index = openedNames.value.findIndex((item) => item === name);
        index !== -1 && openedNames.value.splice(index, 1);
      }
    });
  });

  // 提供给子组件的数据
  defineExpose({
    getClass,
    openedNames,
  });
</script>

<style lang="less" scoped>
  @import url('./menu.less');
</style>
