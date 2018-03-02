<template>
  <div class="upload-file">
    <div>Upload Files -- <span v-if="uploading">Uploading {{fileCount}} files</span> <span v-else>{{files.length}} files Uploaded</span></div> 
   
    <input type="file" @change="fileUpload($event)" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" multiple fileCount="$event.target.files.length">
  </div>
</template>

<script>
// filter uniques only
// add Tuype
import Papa from "papaparse"
import xlsx from "xlsx"
export default {
  name: 'UploadFile',
  // upload type will be Either Withdrawal, exchange, etc ?
  // this will still need to show at top very minimally
  props:["uploadType"],
  data() {
    return {
      name: "",
      files: []
    }
  },
  methods: {
    // filter out files with same names
    fileUpload(event) {
      console.log($event.target.name)
      console.log($event.target.files)
      this.files.push($event.target.files)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
