// 定义所需的参数和返回类型
interface ICellRendererParams {
  node: {
    rowIndex: number;
  };
}

class RowIndexRenderer {
  // 定义 eGui 为一个私有属性，并初始化为 any 类型，以便在 init 方法中赋值
  private eGui: HTMLElement | null = null;

  // 为 init 方法添加参数类型注解
  init(params: ICellRendererParams) {
    this.eGui = document.createElement('div');
    this.eGui.textContent = '' + (params.node.rowIndex + 1);
  }

  // refresh 方法返回 boolean 类型，参数类型为 any，因为没有明确指定
  refresh(): boolean {
    return false;
  }

  // getGui 方法返回 HTMLElement 类型
  getGui(): HTMLElement | null {
    return this.eGui;
  }
}

export const columns = [
  {
    headerName: '#',
    maxWidth: 100,
    cellRenderer: RowIndexRenderer,
    headerCheckboxSelection: true,
    checkboxSelection: true,
    showDisabledCheckboxes: true,
    pinned: 'left',
    editable: false,
  },
  {
    field: 'hospitalName',
    headerName: '医院名称',
  },
  {
    field: 'organizationName',
    headerName: '供应商',
  },
  {
    field: 'provinceCode1',
    headerName: '省平台编码1',
  },
  {
    field: 'provinceCode2',
    headerName: '省平台编码2',
  },
  {
    field: 'provinceCode3',
    headerName: '省平台编码3',
  },
  {
    field: 'materialUseTypeName',
    headerName: '物资类型',
  },
  {
    field: 'materialCode',
    headerName: '耗材编码',
  },
  {
    field: 'registerCode',
    headerName: '注册证号',
  },
  {
    field: 'hospitalCommodityCode',
    headerName: '医院物资编码',
  },
  {
    field: 'materialName',
    headerName: '耗材名称',
  },
  {
    field: 'materialAlias',
    headerName: '耗材别名',
  },
  {
    field: 'materialSpecModel',
    headerName: '规格型号',
  },
  {
    field: 'materialUnit',
    headerName: '单位',
  },
  {
    field: 'materialPackage',
    headerName: '包装规格',
  },
  {
    field: 'materialProductCode',
    headerName: '产品编码',
  },
  {
    field: 'materialProductName',
    headerName: '产品名称',
  },
  {
    field: 'materialBrandName',
    headerName: '品牌',
  },
  {
    field: 'manufactureName',
    headerName: '生产厂家',
  },
  {
    field: 'chargePrice',
    headerName: 'his收费价格（元）',
  },
  {
    field: 'materialPrice',
    headerName: '在用单价（元）',
  },
  {
    field: 'newMaterialPrice',
    headerName: '新单价（元）',
  },
  {
    field: 'newPriceStartTime',
    headerName: '新单价执行时间',
  },
  {
    field: 'priceBase',
    headerName: '价格依据',
  },
  {
    field: 'saleYn',
    headerName: '是否寄售',
    valueFormatter: function (params: any) {
      return `格式化：${params.value === 'Y' ? '是' : '否'}`;
    },
  },
  {
    field: 'authorizeStartTime',
    headerName: '授权有效期起',
  },
  {
    field: 'authorizeEndTime',
    headerName: '授权有效期止',
  },
  {
    field: 'accountPeriod',
    headerName: '在用付款账期（月）',
  },
  {
    field: 'newAccountPeriod',
    headerName: '新付款账期',
  },
  {
    field: 'newAccountPeriodStartTime',
    headerName: '新付款账期执行时间',
  },
  {
    field: 'accountYn',
    headerName: '耗材是否可以结账',
  },
  {
    field: 'materialManufactureType',
    headerName: '耗材类别',
  },
  {
    field: 'materialChoiceType',
    headerName: '耗材类型',
  },
  {
    field: 'shippingManagementName',
    headerName: '发运管理',
    width: '160',
  },
  {
    field: 'storeCondition',
    headerName: '存储条件',
  },
  {
    field: 'purchaseStyle',
    headerName: '采购方式',
  },
  {
    field: 'volumeBasedPurchaseYnName',
    headerName: '是否带量采购',
  },
  {
    field: 'tendersStyle',
    headerName: '招标方式',
  },
  {
    field: 'contractNo',
    headerName: '合同编号',
  },
  {
    field: 'position',
    headerName: '合同存放位置',
  },
  {
    field: 'materialStartTime',
    headerName: '启用时间',
  },
  {
    field: 'materialStopTime',
    headerName: '停用时间',
  },
  {
    field: 'fromMaterialStatus',
    headerName: '耗材状态',
  },
  {
    field: 'materialStatus',
    headerName: '清单状态',
  },
  {
    field: 'expiredYn',
    headerName: '是否已过期',
  },
  {
    field: 'updateUserName',
    headerName: '修改人',
  },
  {
    field: 'updateTime2',
    headerName: '修改时间',
  },
  {
    field: 'remark',
    headerName: '备注',
  },
  {
    field: 'auditRemark',
    headerName: '准入审核备注',
  },
  {
    field: 'action',
    headerName: '操作',
    pinned: 'right',
    editable: false,
  },
];
