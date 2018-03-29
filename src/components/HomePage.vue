<template>
  <div class="home-page">
    Home Page
    <!-- <tree-display></tree-display> -->
  </div>
</template>

<script>
import GlobalHeader from "./common/GlobalHeader"
import Papa from "papaparse"
import xlsx from "xlsx"
import TreeDisplay from "./common/TreeDisplay"
export default {
  name: 'HelloWorld',
  data () {
    return {
      accounts: [123456, 98765]
    }
  },
  methods: {
    calculateTotalGains() {

    },
    calculateTaxOnEvent() {

    },
    calculateFeeOnEvent() {
      // trade
      // Base pair before diff base pair after
      // Base pair price per share * num of shares
      // diff of these 2
    }
  },
  components: {GlobalHeader,TreeDisplay}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
