<template>
  <div id="app">
    <img src="./assets/logo.png">
    22
    <MyContent :MyContent="msg"></MyContent>
    <MyHeader></MyHeader>
    <MyBottom></MyBottom>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg:'我是hello，world'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
