<template>
  <div id='app' style='margin:0;'>
    <router-view></router-view>
    <!-- <ShowPage msg='Which do you prefer?'/> -->
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@import './assets/styles/showpage.css';
@import './assets/styles/button.css';
@import './assets/styles/text.css';
</style>
