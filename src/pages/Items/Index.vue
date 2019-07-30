<template>
  <div class="q-pa-md">
    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'release_date', align: 'center', label: 'Release Date', field: 'release_date', sortable: true },
        { name: 'price', label: 'Price', field: 'price', sortable: true },
        { name: 'by_company', label: 'By Company', field: 'by_company', sortable: true }
      ],
      data: [
      ]
    }
  }
}

</script>