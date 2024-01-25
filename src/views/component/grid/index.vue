<template>
  <ag-grid-vue
    style="height: 100%"
    class="ag-theme-quartz"
    :rowData="rowData"
    :columnDefs="colDefs"
/></template>

<script>
  import { ref } from 'vue';
  import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
  import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
  import { AgGridVue } from 'ag-grid-vue3'; // Vue Grid Logic

  export default {
    name: 'App',
    components: {
      AgGridVue, // Add AG Grid Vue3 component
    },
    setup() {
      // Row Data: The data to be displayed.
      const rowData = ref([
        { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
        { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
        { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
      ]);

      // Column Definitions: Defines & controls grid columns.
      const colDefs = ref([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' },
        { field: 'electric' },
      ]);

      return {
        rowData,
        colDefs,
      };
    },
  };
</script>
