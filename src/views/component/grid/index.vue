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
          <span class="mb-2 ml-2">已选择{{ total?.count }}条数据</span>
          <ag-grid-vue
            style="height: 95%"
            class="ag-theme-quartz"
            :rowData="rowData"
            :columnDefs="colDefs"
            :defaultColDef="defaultColDef"
            :dataTypeDefinitions="dataTypeDefinitions"
            rowSelection="multiple"
            :suppressRowClickSelection="true"
            :isRowSelectable="isRowSelectable"
            @selectionChanged="onSelectionChanged"
            :pagination="true"
            :paginationAutoPageSize="true"
            :paginateChildRows="true"
          />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-card>
</template>

<script>
  import { ref, onBeforeMount } from 'vue';
  import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
  import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
  import { AgGridVue } from 'ag-grid-vue3'; // Vue Grid Logic

  import { columns } from './columns';
  import { tableData } from './data';

  import tableForm from '../table/form.vue';

  export default {
    name: 'App',
    components: {
      AgGridVue, // Add AG Grid Vue3 component
      tableForm,
    },
    setup() {
      // Row Data: The data to be displayed.
      const rowData = ref(
        tableData.data.rows.map((it, idx) => ({ ...it, isCheck: false, idx: idx + 1 }))
      );

      // Column Definitions: Defines & controls grid columns.
      const colDefs = ref(columns);

      const defaultColDef = ref({
        flex: 1,
        minWidth: 140,
        filter: true,
        floatingFilter: false,
        editable: true,
      });

      const dataTypeDefinitions = ref(null);

      const isRowSelectable = ref(null);
      onBeforeMount(() => {
        dataTypeDefinitions.value = {
          object: {
            baseDataType: 'object',
            extendsDataType: 'object',
            valueParser: (params) => ({ name: params.newValue }),
            valueFormatter: (params) => (params.value == null ? '' : params.value.name),
          },
        };

        isRowSelectable.value = () => {
          return true;
        };
      });

      // 表单布局
      const formLayout = ref('right');
      // 合计信息
      const total = ref({ count: 0 });

      const onSelectionChanged = (event) => {
        const rows = event.api.getSelectedRows();
        total.value.count = rows.length;
      };

      return {
        rowData,
        colDefs,
        defaultColDef,
        dataTypeDefinitions,
        formLayout,
        total,
        isRowSelectable,
        onSelectionChanged,
      };
    },
  };
</script>
