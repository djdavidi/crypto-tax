<!-- Use this for the initial Non total display
with each exchange being a parent node and withdrawals, deposits, trades, and All  being sub nodes and underneath the -->


<template>
  <div class="tree-display">
	Hello
  </div>
</template>

<script>
export default {
  name: 'TreeDisplay',
  props: [],
  data () {
    return {
      
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
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
