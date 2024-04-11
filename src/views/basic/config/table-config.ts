export const types = {
  common: {
    filter: true,
    tooltipValueGetter: (p: any) => p.value,
  },
};
import ActionButton from './components/action-button.ts';

export const column = [
  {
    //序号
    headerName: '序号',
    width: 60,
    pinned: 'left',
    valueGetter: (params: any) => parseInt(params.node.id) + 1,
  },
  {
    field: 'functionModule',
    headerName: '功能模块',
    width: 160,
    type: ['common'],
  },
  {
    field: 'configType',
    headerName: '类型',
    type: ['common'],
    width: 160,
  },
  {
    field: 'configName',
    headerName: '配置名称',
    type: ['common'],
    width: 180,
  },
  {
    field: 'remark',
    headerName: '备注',
    type: ['common'],
    width: 210,
  },
  {
    field: 'updateUserName',
    headerName: '修改人',
    type: ['common'],
    width: 180,
  },
  {
    field: 'updateTime',
    headerName: '修改时间',
    type: ['common'],
    width: 180,
  },
  {
    field: 'actions',
    headerName: '操作',
    width: 120,
    pinned: 'right',
    cellRenderer: ActionButton,
  },
];
