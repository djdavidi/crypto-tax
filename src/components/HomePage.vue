<template>
  <div class="home">
  here
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pairs: []
    }
  },
  created() {
    this.getTradingPairs()
  },
  methods: {
    getTradingPairs() {
      axios.get("/api/pairs")
      .then(res => {
        console.log("res", res)
      })
      .catch(err => {
        console.log("err", err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
