<script lang="ts">
  import { prefixCls } from '@/settings';
  import { defineComponent } from 'vue';

  interface Props {
    /**
     * class style prefix
     */
    prefixCls: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    prefixCls: prefixCls,
  });

  // export default defineComponent({
  //   name: 'AppProvider',
  //   inheritAttrs: false,
  //   props,
  //   setup(props, { slots }) {
  //     return () => {};
  //   },
  // });
</script>
