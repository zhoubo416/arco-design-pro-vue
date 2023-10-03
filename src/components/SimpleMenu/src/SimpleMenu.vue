<template>
  <Menu
    v-bind="getBindValues"
    :activeName="menuState.activeName"
    :openNames="getOpenKeys"
    :class="prefixCls"
    :activeSubMenuNames="menuState.activeSubMenuNames"
    @select="handleSelect"
  >
    <template v-for="item in items" :key="item.path">
      <SimpleSubMenu
        :item="item"
        :parent="true"
        :collapsedShowTitle="collapsedShowTitle"
        :collapse="collapse"
      />
    </template>
  </Menu>
</template>

<script lang="ts" setup>
  import Menu from './components/Menu.vue';
  import { useDesign } from '@/hooks/web/useDesign';
  import { computed, reactive, ref, toRefs, unref, useAttrs, watch } from 'vue';
  import { MenuState, Props } from './types';
  import { RouteLocationNormalizedLoaded, useRouter } from 'vue-router';
  import { useOpenKeys } from '@/components/SimpleMenu/src/useOpenKeys';
  import { listenerRouteChange } from '@/logics/mitt/routeChange';
  import { REDIRECT_NAME } from '@/router/constant';
  import { isFunction, isUrl, openWindow } from '@/utils';
  import SimpleSubMenu from './SimpleSubMenu.vue';

  interface Emits {
    (e: 'menuClick', key: string): boolean;
  }

  const props = defineProps<Props>();
  const emit = defineEmits<Emits>();
  const attrs = useAttrs();

  const currentActiveMenu = ref('');
  const isClickGo = ref(false);

  const menuState = reactive<MenuState>({
    activeName: '',
    openNames: [],
    activeSubMenuNames: [],
  });

  const { prefixCls } = useDesign('simple-menu');
  const { currentRoute } = useRouter();
  const { items, accordion, mixSider, collapse } = toRefs(props);

  const { setOpenKeys, getOpenKeys } = useOpenKeys(
    menuState,
    items,
    accordion,
    mixSider as any,
    collapse as any
  );

  const getBindValues = computed(() => ({ ...attrs, ...props }));

  watch(
    () => props.collapse,
    (collapsed) => {
      if (collapsed) {
        menuState.openNames = [];
      } else {
        setOpenKeys(currentRoute.value.path);
      }
    },
    { immediate: true }
  );

  watch(
    () => props.items,
    () => {
      if (!props.isSplitMenu) {
        return;
      }
      setOpenKeys(currentRoute.value.path);
    },
    { flush: 'post' }
  );

  listenerRouteChange((route) => {
    if (route.name === REDIRECT_NAME) return;

    currentActiveMenu.value = route.meta?.currentActiveMenu as string;
    handleMenuChange(route);

    if (unref(currentActiveMenu)) {
      menuState.activeName = unref(currentActiveMenu);
      setOpenKeys(unref(currentActiveMenu));
    }
  });

  async function handleMenuChange(route?: RouteLocationNormalizedLoaded) {
    if (unref(isClickGo)) {
      isClickGo.value = false;
      return;
    }
    const path = (route || unref(currentRoute)).path;

    menuState.activeName = path;

    await setOpenKeys(path);
  }

  async function handleSelect(key: string) {
    if (isUrl(key)) {
      openWindow(key);
      return;
    }
    const { beforeClickFn } = props;
    if (beforeClickFn && isFunction(beforeClickFn)) {
      const flag = await beforeClickFn(key);
      if (!flag) return;
    }

    emit('menuClick', key);

    isClickGo.value = true;
    await setOpenKeys(key);
    menuState.activeName = key;
  }

  defineExpose({
    //   prefixCls,
    //   getBindValues,
    //   getOpenKeys,
    //   handleSelect,
  });
</script>
