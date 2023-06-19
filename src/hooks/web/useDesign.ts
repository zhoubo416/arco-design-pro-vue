import { useAppProviderContext } from '@/components/Application/src/useAppContext';

export const useDesign = (scope: string) => {
  const values = useAppProviderContext();
  return {
    prefixCls: `${values.prefixCls}-${scope}`,
    prefixVar: values.prefixCls,
  };
};
