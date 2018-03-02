<template>
  <div class="home-age">
    Home Page
<!--     <template v-for="account in accounts">
        input: input
        account: {{account}}
        upload withdrawal
        upload deposit
        upload trades
    </template> -->
    <tree-display></tree-display>
  </div>
</template>

<script>
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
  components: {TreeDisplay}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
