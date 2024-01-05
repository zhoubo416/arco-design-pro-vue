import * as VTable from '@visactor/vtable';

const customEditIcon = {
  type: 'svg', //指定svg格式图标，其他还支持path，image
  svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M2 26h28v2H2z" fill="currentColor"></path><path d="M25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10l3.6 3.6l-10 10H6z" fill="currentColor"></path></svg>`,
  width: 16,
  height: 16,
  name: 'edit', //定义图标的名称，在内部会作为缓存的key值
  positionType: VTable.TYPES.IconPosition.contentRight, // 指定位置，可以在文本的前后，或者在绝对定位在单元格的左侧右侧
  visibleTime: 'always', // 显示时机， 'always' | 'mouseenter_cell' | 'click_cell'
  hover: {
    // 热区大小
    width: 12,
    height: 12,
    bgColor: 'rgba(22,44,66,0.5)',
  },
  tooltip: {
    style: { arrowMark: false },
    // 气泡框，按钮的的解释信息
    title: '编辑',
    placement: VTable.TYPES.Placement.right,
  },
};

export const columns = [
  {
    field: 'idx',
    title: '序号',
    width: 'auto',
    style: {
      textAlign: 'center',
    },
  },
  {
    headerType: 'checkbox', //指定表头单元格显示为复选框
    cellType: 'checkbox', //指定body单元格显示为复选框
    field: 'isCheck',
    width: '50',
    style: {
      textAlign: 'center',
    },
  },
  {
    field: 'hospitalName',
    title: '医院名称',
    width: 'auto',
    cellType: 'link',
    templateLink: 'https://www.google.com.hk/search?q={hospitalName}',
    style: {
      textAlign: 'center',
    },
    sort: true,
    sort: (v1, v2, order) => {
      // console.log(v1, v2, order, 'v1, v2, order');
      // 使用自定义排序逻辑
      if (order === 'desc') {
        return v1 === v2 ? 0 : v1 > v2 ? -1 : 1;
      }
      return v1 === v2 ? 0 : v1 > v2 ? 1 : -1;
    },
  },
  {
    field: 'organizationName',
    title: '供应商',
    width: '200',
    sort: true,
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
    sort: (v1, v2, order) => {
      // console.log(v1, v2, order, 'v1, v2, order');
      // 使用自定义排序逻辑
      if (order === 'desc') {
        return v1 === v2 ? 0 : v1 > v2 ? -1 : 1;
      }
      return v1 === v2 ? 0 : v1 > v2 ? 1 : -1;
    },
    icon: 'order',
  },
  {
    field: 'provinceCode1',
    title: '省平台编码1',
    width: 'auto',
    editor: 'name-editor',
    headerIcon: customEditIcon,
  },
  {
    field: 'provinceCode2',
    title: '省平台编码2',
    width: 'auto',
    editor: 'name-editor',
    headerIcon: customEditIcon,
  },
  {
    field: 'provinceCode3',
    title: '省平台编码3',
    width: 'auto',
    editor: 'name-editor',
    headerIcon: customEditIcon,
    fieldFormat: (record) => '字典转换省3',
  },
  {
    field: 'materialUseTypeName',
    title: '物资类型',
    width: 'auto',
    editor: 'name-editor',
    headerIcon: customEditIcon,
  },
  {
    field: 'materialCode',
    title: '耗材编码',
    width: 'auto',
    editor: 'name-editor',
    headerIcon: customEditIcon,
  },
  {
    field: 'registerCode',
    title: '注册证号',
    width: 'auto',
    editor: 'name-editor',
    headerIcon: customEditIcon,
  },
  {
    field: 'hospitalCommodityCode',
    title: '医院物资编码',
    width: 'auto',
    editor: 'name-editor',
    headerIcon: customEditIcon,
  },
  {
    field: 'materialName',
    title: '耗材名称',
    width: 'auto',
    editor: 'name-editor',
    headerIcon: customEditIcon,
  },
  {
    field: 'materialAlias',
    title: '耗材别名',
    width: 'auto',
    editor: 'name-editor',
    headerIcon: customEditIcon,
  },
  {
    field: 'materialSpecModel',
    title: '规格型号',
    width: 'auto',
    editor: 'name-editor',
    headerIcon: customEditIcon,
  },
  {
    field: 'materialUnit',
    title: '单位',
    width: 'auto',
    style: {
      textAlign: 'right',
    },
  },
  {
    field: 'materialPackage',
    title: '包装规格',
    width: 'auto',
  },
  {
    field: 'materialProductCode',
    title: '产品编码',
    width: 'auto',
  },
  {
    field: 'materialProductName',
    title: '产品名称',
    width: 'auto',
  },
  {
    field: 'materialBrandName',
    title: '品牌',
    width: 'auto',
  },
  {
    field: 'manufactureName',
    title: '生产厂家',
    width: 'auto',
  },
  {
    field: 'chargePrice',
    title: 'his收费价格（元）',
    width: 'auto',
    style: {
      textAlign: 'right',
    },
  },
  {
    field: 'materialPrice',
    title: '在用单价（元）',
    width: 'auto',
    style: {
      textAlign: 'right',
    },
  },
  {
    field: 'newMaterialPrice',
    title: '新单价（元）',
    width: 'auto',
    style: {
      textAlign: 'right',
    },
  },
  {
    field: 'newPriceStartTime',
    title: '新单价执行时间',
    width: 'auto',
  },
  {
    field: 'priceBase',
    title: '价格依据',
    width: 'auto',
  },
  {
    field: 'saleYn',
    title: '是否寄售',
    width: 'auto',
  },
  {
    field: 'authorizeStartTime',
    title: '授权有效期起',
    width: 'auto',
  },
  {
    field: 'authorizeEndTime',
    title: '授权有效期止',
    width: 'auto',
  },
  {
    field: 'accountPeriod',
    title: '在用付款账期（月）',
    width: 'auto',
  },
  {
    field: 'newAccountPeriod',
    title: '新付款账期',
    width: 'auto',
  },
  {
    field: 'newAccountPeriodStartTime',
    title: '新付款账期执行时间',
    width: 'auto',
  },
  {
    field: 'accountYn',
    title: '耗材是否可以结账',
    width: 'auto',
  },
  {
    field: 'materialManufactureType',
    title: '耗材类别',
    width: 'auto',
  },
  {
    field: 'materialChoiceType',
    title: '耗材类型',
    width: 'auto',
  },
  {
    field: 'shippingManagementName',
    title: '发运管理',
    width: '160',
  },
  {
    field: 'storeCondition',
    title: '存储条件',
    width: 'auto',
  },
  {
    field: 'purchaseStyle',
    title: '采购方式',
    width: 'auto',
  },
  {
    field: 'volumeBasedPurchaseYnName',
    title: '是否带量采购',
    width: 'auto',
  },
  {
    field: 'tendersStyle',
    title: '招标方式',
    width: 'auto',
  },
  {
    field: 'contractNo',
    title: '合同编号',
    width: 'auto',
  },
  {
    field: 'position',
    title: '合同存放位置',
    width: 'auto',
  },
  {
    field: 'materialStartTime',
    title: '启用时间',
    width: 'auto',
  },
  {
    field: 'materialStopTime',
    title: '停用时间',
    width: 'auto',
  },
  {
    field: 'fromMaterialStatus',
    title: '耗材状态',
    width: 'auto',
  },
  {
    field: 'materialStatus',
    title: '清单状态',
    width: 'auto',
  },
  {
    field: 'expiredYn',
    title: '是否已过期',
    width: 'auto',
  },
  {
    field: 'updateUserName',
    title: '修改人',
    width: 'auto',
  },
  {
    field: 'updateTime2',
    title: '修改时间',
    width: 'auto',
  },
  {
    field: 'remark',
    title: '备注',
    width: 'auto',
  },
  {
    field: 'auditRemark',
    title: '准入审核备注',
    width: 'auto',
  },
  {
    field: 'action',
    title: '操作',
    width: '120',
    style: {
      bgColor: 'rgb(242,242,242)',
    },

    icon: [
      {
        name: 'edit',
        type: 'svg',
        marginLeft: 10,
        color: 'blue',
        positionType: VTable.TYPES.IconPosition.left,
        width: 20,
        height: 20,
        svg: 'https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/edit.svg',
        tooltip: {
          style: { arrowMark: true },
          // 气泡框，按钮的的解释信息
          title: '编辑',
          placement: VTable.TYPES.Placement.right,
        },
      },
      {
        name: 'delete',
        type: 'svg',
        marginLeft: 20,
        color: 'blue',
        positionType: VTable.TYPES.IconPosition.left,
        width: 20,
        height: 20,
        svg: 'https://lf9-dp-fe-cms-tos.byteorg.com/obj/bit-cloud/VTable/delete.svg',
        tooltip: {
          style: { arrowMark: true },
          // 气泡框，按钮的的解释信息
          title: '删除',
          placement: VTable.TYPES.Placement.right,
        },
      },
    ],
  },
];
