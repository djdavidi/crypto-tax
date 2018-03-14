<template>
  <div class="price-download">
    <div class="pd__blurb">
      Welcome to Crassus
    </div>
    <div class="pd__input" @click="onInput">
      
    </div>
    <!-- clear upload icon --> upload button with up and down 
    icon and coloring, green and up arrow to upload, blue and 
    down arrow once down to download new csv, animate change

    <!-- could prob use simple animation, translate icon 180
    degrees and background color as well -->
  <!-- hover darken effect -->
    mock table below of top results 
    <div class="pd__mock-table" v-if="mockTableShow">
        
    </div>
  </div>
</template>

<script>

export default {
  name: 'PriceDownload',
  data () {
    return {
      mockTableShow: false
    }
  },
  methods: {
    onInput() {
      this.mockTableShow = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .price-download {
    display: grid;
  }
</style>
