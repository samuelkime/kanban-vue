<template>
    <div id="app">
        <h1 class="title-font"><strong>K</strong></h1>
        <img class="title-img" src="./assets/logo.png">
        <h1 class="title-font"><strong>NB</strong></h1>
        <img class="title-img" src="./assets/logo.png">
        <h1 class="title-font"><strong>N VUE</strong></h1>
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
