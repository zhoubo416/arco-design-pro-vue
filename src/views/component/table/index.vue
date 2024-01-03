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

  const record = {
    230517143221027: 'CA-2018-156720',
    230517143221030: 'JM-15580',
    230517143221032: 'Bagged Rubber Bands',
    230517143221023: 'Office Supplies',
    230517143221034: 'Fasteners',
    230517143221037: 'West',
    230517143221024: 'Loveland',
    230517143221029: '2018-12-30',
    230517143221042: '3',
    230517143221040: '3.024',
    230517143221041: '-0.605',
  };
  const records = Array(100).fill({ ...record });

  const columns = [
    {
      field: '230517143221027',
      title: 'Order ID',
      width: 'auto',
    },
    {
      field: '230517143221030',
      title: 'Customer ID',
      width: 'auto',
    },
    {
      field: '230517143221032',
      title: 'Product Name',
      width: 'auto',
      editor: (args) => {
        if (args.row % 2 === 0) return 'list-editor';
        else return 'name-editor';
      },
      cellType: 'text',
      sort: true, // 使用内置默认排序逻辑
    },
    {
      field: '230517143221023',
      title: 'Category',
      width: 'auto',
      style: {
        textAlign: 'left',
        textBaseline: 'middle',
        textOverflow: 'ellipsis',
        color: '#F66',
        fontSize: 14,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontVariant: 'small-caps',
        fontStyle: 'italic',
      },
    },
    {
      field: '230517143221034',
      title: 'Sub-Category',
      width: 'auto',
    },
    {
      field: '230517143221037',
      title: 'Region',
      width: 'auto',
    },
    {
      field: '230517143221024',
      title: 'City',
      width: 'auto',
    },
    {
      field: '230517143221029',
      title: 'Order Date',
      width: 'auto',
    },
    {
      field: '230517143221042',
      title: 'Quantity',
      width: 'auto',
    },
    {
      field: '230517143221040',
      title: 'Sales',
      width: 'auto',
    },
    {
      field: '230517143221041',
      title: 'Profit',
      width: 'auto',
    },
  ];

  const option = {
    records,
    columns,
    widthMode: 'standard',
    heightMode: 'standard',
  };
  let listTable = null;

  function renderTable() {
    listTable = new ListTable(listTableRef.value, option);

    listTable.on('click_cell', (params) => {
      console.log(params, 'click_cell');
    });
    listTable.on('change_cell_value', (params) => {
      console.log(params, 'changeCellValue');
    });
    listTable.on('start_edit_cell', (params) => {
      console.log(params, 'startEditCell');
    });
    listTable.on('complete_edit_cell', (params) => {
      console.log(params, 'completeEditCell');
    });
    console.log('renderTable...');
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
