<template>
  <div id="app">
    <h1>KANBAN VUE</h1>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted() {
      this.$store.dispatch('getAllBoards')
    }
  }
</script>

<style>
  body{
    background-image: url('./assets/ChalkboardBackground.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  h1{
    text-align: center;
    background-color: blanchedalmond
  }

</style>