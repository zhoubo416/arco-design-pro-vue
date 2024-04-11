<template>
  <div class="flex-col h-full">
    <a-card :bordered="false" size="small" class="rounded-16px shadow-sm">
      <a-form ref="formRef" :model="form" :rules="rulesForm" @submit="handleSubmit">
        <a-row :gutter="10">
          <a-col v-for="it in formItem" :key="it.field" :span="6">
            <a-form-item
              :field="it.field"
              :label="it.label"
              v-bind="{ ...it.itemProps, ...formItemDef }"
            >
              <component :is="it.is" v-model="form[it.field]" v-bind="it.isProps" />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item>
              <a-space>
                <a-button html-type="submit">确定</a-button>
                <a-button @click="$refs.formRef.resetFields()">重置</a-button>
              </a-space>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-card>
    <a-card :bordered="false" size="small" class="general-card flex-1 h-full">
      <ag-grid-vue
        style="width: 100%; height: 100%"
        :class="'ag-theme-quartz'"
        :columnDefs="colDefs"
        :columnTypes="columnTypes"
        :rowData="rowData"
      />
    </a-card>
  </div>
</template>

<script setup>
  import { AgGridVue } from 'ag-grid-vue3';
  import { ref, shallowRef } from 'vue';

  import { defaultProps, item, rules } from './form-config.ts';

  // 表单数据和渲染
  const form = ref(
    [...item].reduce((obj, curr) => {
      obj[curr.field] = curr.defaultValue;
      return obj;
    }, {})
  );
  const formItem = shallowRef([...item]);
  const formItemDef = shallowRef({ ...defaultProps });
  const rulesForm = shallowRef({ ...rules });

  const handleSubmit = ({ values, errors }) => {
    console.log('values:', values, '\nerrors:', errors);
  };

  // 表格数据和渲染
  import { column, types } from './table-config.ts';
  const colDefs = shallowRef([...column]);
  const columnTypes = shallowRef({ ...types });
  import { reqData } from './data.ts';
  const tableData = reqData.data.rows;
  const rowData = shallowRef(tableData);
</script>
<style lang="less" scoped>
  ::v-deep(.arco-card-body) {
    height: 100%;
  }
</style>
