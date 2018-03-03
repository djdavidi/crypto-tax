<!-- takes in array of columns -->
<!-- takes in array of objects with the prop names ? -->

<!-- make editable -->
<!-- add hover row that creates blank value row that you can use -->
	<!-- 	Table component goes here
		takes props of the fields depending on tab
		object mapping and then displays
		Give table pagination so don't have to render all 
		those rows, let type in number into input -->
		<!-- pagination is annoying -->
<template>
  <div class="data-table">
  	<div class="data-table__columns" v-for="header in columns">
  		{{column}}
  	</div>
  	<div v-for="row in rows">
  		
  	</div>
  </div>
</template>

<script>
// import EditableField from "./EditableField"
export default {
  name: 'DataTable',
  props: ["columns", "rows"]
}
</script>

</style>
