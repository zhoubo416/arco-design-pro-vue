<template>
  <a-card
    title="耗材查询"
    :bordered="false"
    size="small"
    class="shadow-sm rounded-16px w-full h-full"
  >
    <template #extra>
      <a-switch v-model="formLayout" checked-value="right" unchecked-value="top" />
    </template>
    <a-layout style="height: 70vh">
      <a-layout-sider v-if="formLayout === 'right'" :resize-directions="['right']">
        <a-card :bordered="false" size="small" class="shadow-sm rounded-16px w-full">
          <table-form layout="vertical" />
        </a-card>
      </a-layout-sider>
      <a-layout :style="{ height: formLayout === 'top' ? '50vh' : '70vh' }">
        <a-layout-header v-if="formLayout === 'top'">
          <a-resize-box
            :directions="['bottom']"
            :style="{
              height: '20vh',
              textAlign: 'center',
            }"
          >
            <a-card :bordered="false" size="small" class="shadow-sm rounded-16px w-full">
              <table-form layout="inline" />
            </a-card>
          </a-resize-box>
        </a-layout-header>
        <a-layout-content>
          <div ref="listTableRef" class="w-full h-full"></div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-card>
</template>

<script setup>
  import { onMounted, ref, watch } from 'vue';
  import tableForm from './form.vue';
  import {columns} from './columns'
  import {tableData2} from './data';
  const records = tableData2.data.rows.map((it,index) => ({...it,idx:index+1}));

  import * as VTable from '@visactor/vtable';
  const ListTable = VTable.ListTable;

  import { DateInputEditor, InputEditor, ListEditor } from '@visactor/vtable-editors';
  const inputEditor = new InputEditor();
  const dateInputEditor = new DateInputEditor();
  const listEditor = new ListEditor({ values: ['女', '男'] });

  VTable.register.editor('name-editor', inputEditor);
  VTable.register.editor('date-editor', dateInputEditor);
  VTable.register.editor('list-editor', listEditor);

  const listTableRef = ref();
  const option = {
    records,
    columns,
    widthMode: 'standard',
    heightMode: 'standard',
    frozenColCount: 2,
    allowFrozenColCount: 4,
    dragHeaderMode: 'all',
    rightFrozenColCount:1

  };
  let listTable = null;

  function renderTable() {
    listTable = new ListTable(listTableRef.value, option);

    // listTable.on('click_cell', (params) => {});
    // listTable.on('change_cell_value', (params) => {});
    // listTable.on('start_edit_cell', (params) => {});
    // listTable.on('complete_edit_cell', (params) => {});
  }

  onMounted(() => {
    renderTable();
  });

  // 表单布局
  const formLayout = ref('right');
  watch(formLayout, () => {
    listTable.release();
    setTimeout(() => {
      renderTable();
    }, 200);
  });
</script>
