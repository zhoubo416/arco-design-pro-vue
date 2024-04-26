import CommonFilter from './component/common-filter.vue';
import FilterLocal from './component/filter-local.vue';
import FilterRemote from './component/filter-remote.vue';

export const types = {
  common: {
    filter: true,
    tooltipValueGetter: (p: any) => p.value,
  },
  filterType: {
    filter: CommonFilter,
  },
  filterLocal: {
    filter: FilterLocal,
  },
  filterRemote: {
    filter: FilterRemote,
  },
};
import ActionButton from './component/action-button.vue';
import { useRouterPush } from '@/composables';
const { routerPush } = useRouterPush();

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
    type: ['filterRemote'],
  },
  {
    field: 'configType',
    headerName: '类型',
    type: ['filterLocal'],
    width: 160,
  },
  {
    field: 'configName',
    headerName: '配置名称',
    type: ['common'],
    width: 260,
  },
  {
    field: 'remark',
    headerName: '备注',
    type: ['common'],
    width: 280,
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
    cellRendererParams: { routerPush: routerPush },
  },
];
