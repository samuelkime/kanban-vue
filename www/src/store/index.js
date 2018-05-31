import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"


vue.use(vuex)

var api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 3000,
  withCredentials: true
})
var auth = axios.create({
  baseURL: 'http://localhost:3000/auth',
  timeout: 3000,
  withCredentials: true
})

export default new vuex.Store({
  state: {
    user: {},
    AllBoards: [],
    lists: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    deleteUser(state) {
      state.user = {}
    },
    setBoards(state, boards){
      state.AllBoards = boards
    },
    setLists(state, lists){
      state.lists = lists
    }

  },
  actions: {

    //AUTH STUFF
    login({ commit, dispatch }, loginCredentials) {
      auth.post('/login', loginCredentials)
        .then(res => {
          console.log("successfully logged in!")
          commit('setUser', res.data)
          router.push({ name: 'Home' })
        })
    },
    logout({ commit, dispatch }) {
      auth.delete('/logout')
      .then(res => {
        console.log("Successfully logged out!")
          commit('deleteUser')
          router.push({name: 'Login'})
        })
    },
    register({ commit, dispatch }, userData) {
      auth.post('/register', userData)
        .then(res => {
          console.log("Registration Successful")  
          router.push({ name: 'Login' }) // I changed this to just change the component 
        })
    },
    authenticate({ commit, dispatch }) {
      api.get('/authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'Home' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },
     
    //APP STUFF
    getAllBoards({dispatch, commit}){
       api.get('/boards')
       .then(res =>{
         console.log(res)
         commit('setBoards', res.data)
       })
    },
    createBoard({dispatch, commit, state}, board){
      api.post('/boards', board)
      .then(res =>{
        dispatch('getAllBoards', state.user.author)
      })
    },
    getLists({dispatch, commit}){
      api.get('/lists')
      .then(res =>{
        console.log(res)
        commit('setLists', res.data)
      })
   },
   createList({dispatch, commit, state}, list){
     api.post('/lists', list)
     .then(res =>{
       dispatch('getLists', state.user.author)
     })
   },
  }
})



