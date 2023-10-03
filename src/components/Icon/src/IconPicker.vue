<template>
  <a-input
    disabled
    :style="{ width }"
    :placeholder="t('component.icon.placeholder')"
    :class="prefixCls"
    v-model:value="currentSelect"
  >
    <template #suffix>
      <a-popover
        placement="bottomLeft"
        trigger="click"
        v-model="visible"
        :overlayClassName="`${prefixCls}-popover`"
      >
        <template #title>
          <div class="flex justify-between">
            <a-input
              :placeholder="t('component.icon.search')"
              @change="debounceHandleSearchChange"
              allowClear
            />
          </div>
        </template>

        <template #content>
          <div v-if="paginationList.length">
            <ScrollContainer class="border border-solid border-t-0">
              <ul class="flex flex-wrap px-2">
                <li
                  v-for="icon in paginationList"
                  :key="icon"
                  :class="currentSelect === icon ? 'border border-primary' : ''"
                  class="p-2 w-1/8 cursor-pointer mr-1 mt-1 flex justify-center items-center border border-solid hover:border-primary"
                  @click="handleClick(icon)"
                  :title="icon"
                >
                  <!-- <Icon :icon="icon" :prefix="prefix" /> -->
                  <SvgIcon v-if="isSvgMode" :name="icon" />
                  <Icon :icon="icon" v-else />
                </li>
              </ul>
            </ScrollContainer>
            <div class="flex py-2 items-center justify-center" v-if="icons.length >= pageSize">
              <a-pagination
                showLessItems
                size="small"
                :pageSize="pageSize"
                :total="icons.length"
                @change="handlePageChange"
              />
            </div>
          </div>
          <template v-else
            ><div class="p-5"><a-empty /></div>
          </template>
        </template>

        <span class="cursor-pointer px-2 py-1 flex items-center" v-if="isSvgMode && currentSelect">
          <SvgIcon :name="currentSelect" />
        </span>
        <Icon :icon="currentSelect || 'ion:apps-outline'" class="cursor-pointer px-2 py-1" v-else />
      </a-popover>
    </template>
  </a-input>
</template>
<script lang="ts" setup>
  import iconsData from '@/components/Icon/data/icons.data';
  import svgIcons from 'virtual:*';
  import { ref, unref, watch, watchEffect } from 'vue';
  import { useDesign } from '@/hooks/web/useDesign';
  import { useI18n } from 'vue-i18n';
  import { useClipboard, useDebounceFn, useOffsetPagination } from '@vueuse/core';
  import { Message } from '@arco-design/web-vue';
  import SvgIcon from './SvgIcon.vue';
  import Icon from '../Icon.vue';

  interface Props {
    value: string;
    width: string;
    pageSize: number;
    copy: boolean;
    mode: 'svg' | 'iconify';
  }

  const props = defineProps<Props>();

  function getIcons() {
    const data = iconsData as any;
    const prefix: string = data?.prefix ?? '';
    let result: string[] = [];
    if (prefix) {
      result = (data?.icons ?? []).map((item: any) => `${prefix}:${item}`);
    } else if (Array.isArray(iconsData)) {
      result = iconsData as string[];
    }
    return result;
  }

  function getSvgIcons() {
    return svgIcons.map((icon: any) => icon.replace('icon-', ''));
  }

  const emit = defineEmits(['change', 'update:value']);

  const isSvgMode = props.mode === 'svg';
  const icons = isSvgMode ? getSvgIcons() : getIcons();

  const currentSelect = ref('');
  const visible = ref(false);
  const currentList = ref(icons);
  const paginationList = ref(icons);

  const { t } = useI18n();
  const { prefixCls } = useDesign('icon-picker');

  const debounceHandleSearchChange = useDebounceFn(handleSearchChange, 100);

  // if (props.copy) {
  const { text, copy, copied, isSupported } = useClipboard({ source: props.value });
  // }

  function fetchData({
    currentPage,
    currentPageSize,
  }: {
    currentPage: number;
    currentPageSize: number;
  }) {
    const start = (currentPage - 1) * currentPageSize;
    const end = start + currentPageSize;
    paginationList.value = unref(icons).slice(start, end);
  }

  const { currentPage, pageCount } = useOffsetPagination({
    total: unref(currentList).length,
    pageSize: props.pageSize,
    onPageChange: fetchData,
    onPageSizeChange: fetchData,
  });

  watchEffect(() => {
    currentSelect.value = props.value;
  });

  watch(
    () => currentSelect.value,
    (v) => {
      emit('update:value', v);
      return emit('change', v);
    }
  );

  function handlePageChange(page: number) {
    currentPage.value = page;
  }

  function handleClick(icon: string) {
    currentSelect.value = icon;
    if (props.copy) {
      copy(icon);
      if (unref(copied)) {
        Message.success(t('component.icon.copy'));
      }
    }
  }

  function handleSearchChange(e: any) {
    const value = e.target.value;
    if (!value) {
      currentPage.value = 1;
      currentList.value = icons;
      return;
    }
    currentList.value = icons.filter((item: any) => item.includes(value));
  }
</script>
<style lang="less">
  @prefix-cls: ~'@{nameCls}-icon-picker';

  .@{prefix-cls} {
    .ant-input-group-addon {
      padding: 0;
    }

    &-popover {
      width: 300px;

      .ant-popover-inner-content {
        padding: 0;
      }

      .scrollbar {
        height: 220px;
      }
    }
  }
</style>
