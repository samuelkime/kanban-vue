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

  

</style>