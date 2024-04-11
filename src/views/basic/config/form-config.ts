import * as ARCO from '@arco-design/web-vue';

export const defaultProps = { labelColFlex: '100px' };
export const item = [
  {
    field: 'functionModule',
    label: '功能模块  ',
    defaultValue: '1',
    itemProps: { validateTrigger: 'blur' },
    is: ARCO['Input'],
    isProps: { placeholder: '请输入' },
  },
  {
    field: 'configType',
    label: '类型',
    defaultValue: '',
    itemProps: { validateTrigger: 'blur' },
    is: ARCO['Input'],
    isProps: {},
  },
  { field: 'configName', label: '配置名称|备注', defaultValue: '', is: ARCO['Input'], isProps: {} },
  { field: 'update', label: '修改时间', defaultValue: [], is: ARCO['RangePicker'], isProps: {} },
];
export const rules = {
  functionModule: [
    {
      required: true,
      message: '功能模块必填',
    },
  ],
  configType: [
    {
      required: true,
      message: '类型必填',
    },
  ],
};
