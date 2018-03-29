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
    <div>
      <div>
        blurb
      </div>
      <div class="file-load" @click="up = !up">
        <div class="inner-wrapper">
          <div class="text-wrapper">
            <span class="file-text" v-if="up">Upload File</span>
            <span class="file-text" v-if="!up">Download File</span>   
          </div>
          <span class="icon-wrapper" :class="{thing: up}"><i class="fa fa-arrow-up"></i></span>
        </div>
      </div>
      <div>
          table
      </div>
    </div>

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
      mockTableShow: false,
      up: true
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

.file-load {
  border-radius: 10px;
  height: 50px;
  width: 200px;
  border: 1px solid #009688;
  color: #009688;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.file-load .fa-arrow-up {
  font-size: .875em;
}
.file-load:hover {
  background: #009688;
  color: white;
}
.icon-wrapper {
  animation: rotater 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

.inner-wrapper {
  display: flex;
  flex-direction: row;
  width: 80%;
}
.text-wrapper {
  width: 100%;
}

.file-text {
  /*width: 150px;*/
  width: 100%;
}

@keyframes rotater {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}


.thing {
  transform: rotate(180deg);
  animation: thinger 1s;
  animation-fill-mode: forwards;
}
@keyframes thinger {
  100% {
    transform: rotate(360deg);
  }
}
</style>
