<template>
  <a-card>
    <template #title>
      <a-radio-group v-model="filterModel">
        <a-radio value="local">本页</a-radio>
        <a-radio value="remote">远程</a-radio>
      </a-radio-group>
    </template>
    <a-checkbox-group
      v-if="filterModel == 'local'"
      v-model="filterType"
      direction="vertical"
      class="h-30 overflow-auto"
    >
      <a-checkbox value="contain">包含</a-checkbox>
      <a-checkbox value="=">等于</a-checkbox>
      <a-checkbox value=">">大于</a-checkbox>
      <a-checkbox value="<">小于</a-checkbox>
    </a-checkbox-group>

    <a-input
      type="text"
      size="mini"
      ref="eFilterText"
      v-model="filterText"
      @press-enter="updateFilter($event)"
      placeholder="过滤"
    />

    <template #actions>
      <a-button size="mini">取消</a-button>
      <a-button type="primary" size="mini" @click="updateFilter($event)">确认</a-button>
    </template>
  </a-card>
</template>
<script>
  export default {
    data: function () {
      return {
        filterModel: 'local', // 筛选默认，远程还是本地
        filterType: '', // 筛选类型，包含、=、》、《
        filterText: null, // 过滤值
      };
    },
    mounted(){
      console.log(this,'this');
    },
    methods: {
      updateFilter() {
        this.params.filterChangedCallback();
      },

      doesFilterPass(params) {
        if (this.filterModel === 'local') {
          const { node } = params;
          const value = this.params.getValue(node);
          // make sure each word passes separately, ie search for firstname, lastname
          let passed = true;
          this.filterText
            .toLowerCase()
            .split(' ')
            .forEach((filterWord) => {
              if (value.toString().toLowerCase().indexOf(filterWord) < 0) {
                passed = false;
              }
            });
          return passed;
        } else if (this.filterModel === 'remote') {
          const { api } = this.params;
          api.setGridOption('rowData', []);
          return true;
        }
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
        this.filterText = model == null ? null : model.value;
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
