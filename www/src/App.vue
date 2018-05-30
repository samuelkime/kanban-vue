<template>
    <div id="app">
      <h1>KANBAN VUE</h1>
      <h2>Check out this super crazy font!</h2>
        <router-view/>
      </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Monoton',cursive;
}
.title-img{
  transform: rotate(180deg);
  height: 2rem;
}
.title-font{
  font-family: 'Verdana';
  height: 3rem;
}
</style>
