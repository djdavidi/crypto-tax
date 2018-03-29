<template>
  <div id="app">
  <!-- header -->
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
/* maybe add splash of color to top? above header?*/
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
  height: calc(100vh - 50px);
  width: 100vw;
}
</style>
