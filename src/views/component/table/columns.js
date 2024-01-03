import * as VTable from '@visactor/vtable';

export const columns = [
  {
    "field": "idx",
    "title": "序号",
    "width": "auto",
     style: {
      textAlign: 'center'
     }
},
  {
      "field": "hospitalName",
      "title": "医院名称",
      "width": "auto",cellType: 'link',
      templateLink: 'https://www.google.com.hk/search?q={hospitalName}',
      style: {
       textAlign: 'center'
      },
      sort: true,
  },
  {
      "field": "organizationName",
      "title": "供应商",
      "width": "200",
      sort: true,
      editor: 'name-editor',
      customLayout(args){
        const { width, height}= args.rect;
        const {dataValue,table,row } =args;
        const elements=[];
        let top=30;
        const left=15;

        const container = new VTable.CustomLayout.Group({
          height,
          width,
          display: 'flex',
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-around',
        });

        const text = new VTable.CustomLayout.Text({
          text: row===1? '-----供应商2-----':'-----4444--供应商---4444----',
          maxLineWidth: 140,
          pickable: true
        });

        container.add(text);
        
        return {
          rootContainer: container,
        }
      }
  },
  {
      "field": "provinceCode1",
      "title": "省平台编码1",
      "width": "auto",
      editor: 'name-editor'
  },
  {
      "field": "provinceCode2",
      "title": "省平台编码2",
      "width": "auto",
      editor: 'name-editor'
  },
  {
      "field": "provinceCode3",
      "title": "省平台编码3",
      "width": "auto"
  },
  {
      "field": "materialUseTypeName",
      "title": "物资类型",
      "width": "auto"
  },
  {
      "field": "materialCode",
      "title": "耗材编码",
      "width": "auto"
  },
  {
      "field": "registerCode",
      "title": "注册证号",
      "width": "auto"
  },
  {
      "field": "hospitalCommodityCode",
      "title": "医院物资编码",
      "width": "auto"
  },
  {
      "field": "materialName",
      "title": "耗材名称",
      "width": "auto"
  },
  {
      "field": "materialAlias",
      "title": "耗材别名",
      "width": "auto"
  },
  {
      "field": "materialSpecModel",
      "title": "规格型号",
      "width": "auto"
  },
  {
      "field": "materialUnit",
      "title": "单位",
      "width": "auto",
      style: {
       textAlign: 'right'
      }
  },
  {
      "field": "materialPackage",
      "title": "包装规格",
      "width": "auto"
  },
  {
      "field": "materialProductCode",
      "title": "产品编码",
      "width": "auto"
  },
  {
      "field": "materialProductName",
      "title": "产品名称",
      "width": "auto"
  },
  {
      "field": "materialBrandName",
      "title": "品牌",
      "width": "auto"
  },
  {
      "field": "manufactureName",
      "title": "生产厂家",
      "width": "auto"
  },
  {
      "field": "chargePrice",
      "title": "his收费价格（元）",
      "width": "auto",
      style: {
       textAlign: 'right'
      }
  },
  {
      "field": "materialPrice",
      "title": "在用单价（元）",
      "width": "auto",
      style: {
       textAlign: 'right'
      }
  },
  {
      "field": "newMaterialPrice",
      "title": "新单价（元）",
      "width": "auto",
      style: {
       textAlign: 'right'
      }
  },
  {
      "field": "newPriceStartTime",
      "title": "新单价执行时间",
      "width": "auto"
  },
  {
      "field": "priceBase",
      "title": "价格依据",
      "width": "auto"
  },
  {
      "field": "saleYn",
      "title": "是否寄售",
      "width": "auto"
  },
  {
      "field": "authorizeStartTime",
      "title": "授权有效期起",
      "width": "auto"
  },
  {
      "field": "authorizeEndTime",
      "title": "授权有效期止",
      "width": "auto"
  },
  {
      "field": "accountPeriod",
      "title": "在用付款账期（月）",
      "width": "auto"
  },
  {
      "field": "newAccountPeriod",
      "title": "新付款账期",
      "width": "auto"
  },
  {
      "field": "newAccountPeriodStartTime",
      "title": "新付款账期执行时间",
      "width": "auto"
  },
  {
      "field": "accountYn",
      "title": "耗材是否可以结账",
      "width": "auto"
  },
  {
      "field": "materialManufactureType",
      "title": "耗材类别",
      "width": "auto"
  },
  {
      "field": "materialChoiceType",
      "title": "耗材类型",
      "width": "auto"
  },
  {
      "field": "shippingManagementName",
      "title": "发运管理",
      "width": "auto"
  },
  {
      "field": "storeCondition",
      "title": "存储条件",
      "width": "auto"
  },
  {
      "field": "purchaseStyle",
      "title": "采购方式",
      "width": "auto"
  },
  {
      "field": "volumeBasedPurchaseYnName",
      "title": "是否带量采购",
      "width": "auto"
  },
  {
      "field": "tendersStyle",
      "title": "招标方式",
      "width": "auto"
  },
  {
      "field": "contractNo",
      "title": "合同编号",
      "width": "auto"
  },
  {
      "field": "position",
      "title": "合同存放位置",
      "width": "auto"
  },
  {
      "field": "materialStartTime",
      "title": "启用时间",
      "width": "auto"
  },
  {
      "field": "materialStopTime",
      "title": "停用时间",
      "width": "auto"
  },
  {
      "field": "fromMaterialStatus",
      "title": "耗材状态",
      "width": "auto"
  },
  {
      "field": "materialStatus",
      "title": "清单状态",
      "width": "auto"
  },
  {
      "field": "expiredYn",
      "title": "是否已过期",
      "width": "auto"
  },
  {
      "field": "updateUserName",
      "title": "修改人",
      "width": "auto"
  },
  {
      "field": "updateTime2",
      "title": "修改时间",
      "width": "auto"
  },
  {
      "field": "remark",
      "title": "备注",
      "width": "auto"
  },
  {
      "field": "auditRemark",
      "title": "准入审核备注",
      "width": "auto"
  },
  {
      "field": "action",
      "title": "操作",
      "width": "180",
      style: {
        bgColor: 'rgb(242,242,242)'
       },
  }
]
