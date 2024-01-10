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
          <div ref="listTableRef" class="w-full h-full"></div>
        </a-layout-content>
      </a-layout>
    </a-layout>
    <a-modal
      v-model:visible="modal.visible"
      @ok="modalHandleOk"
      @cancel="modalHandleCancel"
      draggable
      :title="modal.title"
      title-align="start"
    >
      <div>{{ JSON.stringify(modal.obj) }}</div>
    </a-modal>
  </a-card>
</template>

<script setup>
  import { onMounted, reactive, ref, watch } from 'vue';
  import { Message } from '@arco-design/web-vue';

  import tableForm from './form.vue';
  import { columns } from './columns';
  import { tableData2 } from './data';
  const tableData = tableData2.data.rows.map((it, index) => ({
    ...it,
    idx: index + 1,
    isCheck: false,
  }));
  const records = reactive(tableData);

  // 计算总结
  watch(
    records,
    () => {
      console.log('records', records?.length);
    },
    { deep: true }
  );

  import * as VTable from '@visactor/vtable';
  const ListTable = VTable.ListTable;

  import { DateInputEditor, InputEditor } from '@visactor/vtable-editors';
  const inputEditor = new InputEditor();
  const dateInputEditor = new DateInputEditor();
  VTable.register.editor('name-editor', inputEditor);
  VTable.register.editor('date-editor', dateInputEditor);

  import { CustomInput } from './editor/custom-input';
  const customInput = new CustomInput({ attr: { type: 'text' }, style: { color: 'red' } });
  VTable.register.editor('custom-input', customInput);

  VTable.register.icon('order', {
    type: 'svg',
    svg: 'https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/order.svg',
    width: 22,
    height: 22,
    name: 'order',
    positionType: VTable.TYPES.IconPosition.left,
    marginRight: 0,
    hover: {
      width: 22,
      height: 22,
      bgColor: 'rgba(101, 117, 168, 0.1)',
    },
    cursor: 'pointer',
    tooltip: {
      style: {
        bgColor: 'gray',
        fontSize: 16,
      },
      // 气泡框，按钮的的解释信息
      title: '点击可复制',
      placement: VTable.TYPES.Placement.top,
    },
  });

  const listTableRef = ref();
  const option = {
    records,
    columns,
    widthMode: 'standard',
    heightMode: 'standard',
    frozenColCount: 2,
    allowFrozenColCount: 2,
    dragHeaderMode: 'all',
    rightFrozenColCount: 1,
    hover: {
      highlightMode: 'cross',
    },
    editCellTrigger: 'click',
    menu: {
      renderMode: 'html',
      contextMenuItems: [
        { menuKey: 'copy', text: '复制' },
        { menuKey: ' update', text: '更新' },
      ],
    },
  };
  let listTable = null;
  // 合计信息
  const total = ref({ count: 0 });
  function renderTable() {
    listTable = new ListTable(listTableRef.value, option);

    // listTable.on('click_cell', (params) => {});
    // listTable.on('change_cell_value', (params) => {});
    // listTable.on('start_edit_cell', (params) => {});
    // listTable.on('complete_edit_cell', (params) => {});
    // listTable.on('selected_cell', (params) => {});

    listTable.on('change_cell_value', (params) => {
      const IEditor = listTable.getEditor(params.col + 1, params.row);
      // console.log(IEditor, params, 'IEditor');
      if (IEditor?.editorConfig && IEditor.editorConfig?.attr) {
        IEditor.editorConfig.style.color = (params.changedValue === 'abc' ? 'blue' : 'red');
        // console.log(IEditor, 'IEditor2');
      }
    });
    listTable.on('checkbox_state_change', (params) => {
      // console.log('checkbox_state_change', params);
      const selected = listTable.getCheckboxState();
      total.value.count = selected.filter((it) => it.isCheck).length;
    });

    listTable.on('click_cell', (args) => {
      const { row, targetIcon, originData } = args;
      if (targetIcon) {
        if (targetIcon.name === 'edit') {
          Message.info('编辑第 ' + originData.organizationName + '的数据');
          // window?.alert?.('编辑第 ' + (row - listTable.columnHeaderLevelCount + 1) + ' 条数据');
        } else if (targetIcon.name === 'delete') {
          records.splice(row - listTable.columnHeaderLevelCount, 1);
          listTable.setRecords(records);
          Message.error('删除第 ' + originData.organizationName + ' 条数据');
        } else if (targetIcon.name === 'order') {
          Message.success('已复制供应商' + originData.organizationName);
        } else if (targetIcon.name === 'header-filter') {
          modalHandleShow('筛选' + args.value, { field: args.field, value: args.value });
        } else if (targetIcon.name === 'header-edit') {
          modalHandleShow('批量编辑' + args.value, { field: args.field, value: args.value });
        }
      }
    });
    listTable.on('dropdown_icon_click', (params) => {
      Message.info('dropdown_icon_click!' + JSON.stringify(params));
    });
    listTable.on('dropdown_menu_click', (params) => {
      Message.info('dropdown_menu_click!' + JSON.stringify(params));
    });
    listTable.on('mouseenter_cell', (args) => {
      const { col, row, targetIcon } = args;
      if (col < 2 || row < 1) {
        return;
      }
      const rect = listTable.getVisibleCellRangeRelativeRect({ col, row });
      listTable.showTooltip(col, row, {
        content: listTable.getCellValue(col, row),
        referencePosition: { rect, placement: VTable.TYPES.Placement.right }, //TODO
        className: 'defineTooltip',
        style: {
          bgColor: 'black',
          color: 'white',
          font: 'normal bold normal 14px/1 STKaiti',
          arrowMark: true,
        },
      });
    });
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

  const modal = reactive({ visible: false, obj: '', title: 'title' });

  const modalHandleShow = (title, obj) => {
    modal.visible = true;
    modal.obj = obj;
    modal.title = title;
  };

  const modalHandleOk = () => {
    modal.visible = false;
  };
  const modalHandleCancel = () => {
    modal.visible = false;
  };
</script>
