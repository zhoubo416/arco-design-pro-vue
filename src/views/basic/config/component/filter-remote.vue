<template>
  <a-card title="远程排序">
    <a-input type="text" size="mini" ref="eFilterText" v-model="filterText" placeholder="过滤" />

    <template #actions>
      <a-button size="mini" @click="resetFilter($event)">取消</a-button>
      <a-button type="primary" size="mini" @click="updateFilter($event)">确认</a-button>
    </template>
  </a-card>
</template>
<script>
  export default {
    data: function () {
      return {
        filterText: null, // 过滤值
      };
    },
    methods: {
      updateFilter() {
        this.params.filterModifiedCallback();
      },
      resetFilter() {
        this.setModel('');
        this.updateFilter();
      },
      doesFilterPass() {
        return true;
      },
      isFilterActive() {
        return this.filterText != null && this.filterText !== '';
      },

      getModel() {
        if (!this.isFilterActive()) {
          return null;
        }

        return { value: this.filterText };
      },

      setModel(model) {
        this.filterText = model;
      },

      afterGuiAttached(params) {
        if (!params || !params.suppressFocus) {
          // focus the input element for keyboard navigation
          this.$refs.eFilterText.focus();
        }
      },
    },
  };
</script>
