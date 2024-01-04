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
  import { onMounted, reactive, ref, watch } from 'vue';
  import { Message } from '@arco-design/web-vue';

  import tableForm from './form.vue';
  import { columns } from './columns';
  import { tableData2 } from './data';
  const tableData = tableData2.data.rows.map((it, index) => ({ ...it, idx: index + 1,isCheck: false }));
  const records = reactive(tableData) ;

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
    allowFrozenColCount: 2,
    dragHeaderMode: 'all',
    rightFrozenColCount: 1,
    hover: {
      highlightMode: 'cross',
    },
    editCellTrigger: 'click',
    menu: {
      renderMode: 'html',
      defaultHeaderMenuItems: [
        {
          text: '筛选',
          icon: {
            svg: '<svg width="14" height="14" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M71 24L88 41.0286V53.0005L74.996 39.9755L74.9968 88.0005H66.9968L66.996 39.9835L54 53.0005V41.0286L71 24ZM48 80V88H8V80H48ZM48 44V52H8V44H48ZM88 8V16H8V8H88Z" fill="#2e2f32" fill-opacity="0.9"></path></svg>',
          },
          selectedIcon: {
            svg: '<svg width="14" height="14" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M71 24L88 41.0286V53.0005L74.996 39.9755L74.9968 88.0005H66.9968L66.996 39.9835L54 53.0005V41.0286L71 24ZM48 80V88H8V80H48ZM48 44V52H8V44H48ZM88 8V16H8V8H88Z" fill="rgb(55,145,255)" fill-opacity="0.9"></path></svg>',
          },
          stateIcon: {
            svg: '<svg width="12" height="11" viewBox="0 0 64 64" fill="#161616" xmlns="http://www.w3.org/2000/svg" class="visactor-table-action-area-icon"><path fill-rule="evenodd" clip-rule="evenodd" d="M45.0144 25.4994L34.9864 15.4674L34.9864 60.0154H28.9864L28.9864 15.5334L18.9864 25.5294V17.0454L27.776 8.25802H27.7732L32.0158 4.01538L45.0144 17.0134V25.4994Z" fill="#161616" fill-opacity="0.9"></path></svg>',
          },
        },
      ],
      contextMenuItems: ['复制', '粘贴'],
    },
  };
  let listTable = null;

  function renderTable() {
    listTable = new ListTable(listTableRef.value, option);

    // listTable.on('click_cell', (params) => {});
    // listTable.on('change_cell_value', (params) => {});
    // listTable.on('start_edit_cell', (params) => {});
    // listTable.on('complete_edit_cell', (params) => {});
    listTable.on('selected_cell', (params) => {
      Message.info('selected_cell');
    });
    listTable.on('click_cell', (args) => {
      const { col, row, targetIcon, originData } = args;
      // console.log(args, 'args')
      if (targetIcon) {
        if (targetIcon.name === 'edit') {
          Message.info('编辑第 ' + (originData.organizationName) + '的数据');
          // window?.alert?.('编辑第 ' + (row - listTable.columnHeaderLevelCount + 1) + ' 条数据');
        } else if (targetIcon.name === 'delete') {
          records.splice(row - listTable.columnHeaderLevelCount, 1);
          listTable.setRecords(records);
          Message.error('删除第 ' + (originData.organizationName) + ' 条数据');
        }
      }
    });
    listTable.on('dropdown_icon_click', (params) => {
      Message.info('dropdown_icon_click!');
    });
    listTable.on('dropdown_menu_click', (params) => {
      Message.info('dropdown_menu_click!');
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
</script>
