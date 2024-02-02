<template>
  <div class="h-full w-full flex justify-center items-center"> {{ title }} @ {{ year }} </div>
</template>

<script lang="ts" setup>
  import { useAppInfo } from '@/composables';

  const date = new Date();
  const year = date.getFullYear();
  const { title } = useAppInfo();
</script>

<style lang="less" scoped></style>
