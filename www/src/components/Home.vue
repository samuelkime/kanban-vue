<template>
  <div class="home">

  </div>
</template>

<script>
  import router from '../router'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  mounted(){
    if(!this.$state.store.user._id){
      router.push({name: 'Login'}) // this goes to a login.vue
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
