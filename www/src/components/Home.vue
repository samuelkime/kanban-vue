<template>
  <div class="home">
    <allBoards></allBoards>
<button @click="logout">Logout</button>
  </div>
</template>

<script>
  import router from '../router'
  import allBoards from './AllBoards'
export default {
  name: 'Home',
  components: {
    allBoards
  },
  data () {
    return {
    }
  },
  mounted(){
    if(!this.$store.state.user._id){
      router.push({name: 'Login'}) // this goes to a login.vue
    }
  },
  methods:{
    logout(){
      this.$store.dispatch('logout')
      router.push('Login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
