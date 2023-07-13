<template>
  <div class="banner relative h-full">
    <div class="banner-inner flex flex-col justify-center items-center relative">
      <img class="w-500px" src="@/assets/svg/login_source.svg" alt="" />
      <div class="text-2xl font-bold text-center mt-8">
        {{ t('login.banner.title') }}
      </div>
      <div class="text-base text-center mt-4">
        {{ t('login.banner.subtitle') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>

<style lang="less" scoped>
  .banner {
    //background-color: rgb(var(--primary-5));

    &-inner {
      flex: 1;
      height: 100%;
    }
  }
</style>
