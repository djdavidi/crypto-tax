<template>
  <div class="upload-file">
  <span v-model="name">{{name}}</span>
    Upload File
  <input type="file" @change="fileUpload($event)" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel">
  </div>
</template>

<script>
import Papa from "papaparse"
import xlsx from "xlsx"
export default {
  name: 'UploadFile',
  data() {
    return {
      name: ""
    }
  },
  methods: {
    fileUpload(event) {
      console.log($event.target.name)
      console.log($event.target.file)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
