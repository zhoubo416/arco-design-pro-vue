<template>
  <div>
    <a-button type="text" status="primary" @click="clickEvent">设置</a-button>
  </div>
</template>
<script>
  import { useRouterPush } from '@/composables';
  const { routerPush } = useRouterPush();

  export default {
    methods: {
      clickEvent() {
        routerPush('/dashboard/analysis');
      },
    },
  };
</script>
