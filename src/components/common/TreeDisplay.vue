<!-- Use this for the initial Non total display
with each exchange being a parent node and withdrawals, deposits, trades, and All  being sub nodes and underneath the -->


<template>
  <div class="tree-display">
  	<div class="tree-display__tabs">
  		<span v-for="tab in tabs" class="tree-display__tabs__tab"
		@click="currentTab = tab"
		:class="{'tree-display__tabs__tab--active': 'tab === currentTab'}">{{tab}}</span>
  	</div>
	<div class="tree-display__accounts">
		<div @click="currentAccount = account" v-for="account in accounts" >{{account.name}}
		<!-- Have click on here to remove -->
		</div>
		<div> Add</div>
	</div>
	<div class="tree-display__content">
		Table component goes here
		takes props of the fields depending on tab
		object mapping and then displays
		Give table pagination so don't have to render all 
		those rows, let type in number into input
	</div>
	<div class="tree-display__summary">
		summary thing
	</div>
  </div>
</template>

<script>
// Could pull this out and make prop
// more reusable
const tabs = ["Deposits", "Withdrawals", "Trades", "All"]
import {mapState} from "vuex"
export default {
  name: 'TreeDisplay',
  props: [],
  data () {
    return {
    	currentTab: "",
    	currentAccount: "",
    	tabs: tabs
    }
  },
  methods: {
  },
  computed: {
  	...mapState(["accounts"])
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tree-display {
	width: calc(100% - 50px);
	margin-left: 25px;
	margin-right: 25px;
	display: grid;
	/*col or row start thing*/
	grid-template-columns: 1fr 5fr 1.5fr;
	grid-template-rows: auto;
	grid-template-areas: 
	"tabs tabs tabs"
	"accounts content summary";
}

.tree-display .tree-display__tabs {
	display: flex;
	flex-direction: row;
	grid-area: tabs;
	/*width: 100%;*/
}
.tree-display__tabs__tab {
	border: 1px;
}

.tree-display__accounts {
	grid-area: accounts;
}

.tree-display__tabs__tab--active {
	background: #CECECE;
	color: #FFF;
}

.tree-account .tree-account__content {
	background: #CECECE;
	grid-area: content;
	width: 100%;
}

.tree-display__summary {
	grid-area: summary;
}
</style>
