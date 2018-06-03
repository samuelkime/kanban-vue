import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"


vue.use(vuex)

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//kanban-tastic.herokuapp.com/' : '//localhost:3000';

var api = axios.create({
  baseURL: baseUrl + "/api",
  timeout: 3000,
  withCredentials: true
})
var auth = axios.create({
  baseURL: baseUrl + "/auth",
  timeout: 3000,
  withCredentials: true
})

export default new vuex.Store({
  state: {
    user: {},
    boards: [],
    lists: [],
    tasks: [],
    comments: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    deleteUser(state) {
      state.user = {}
    },
    setBoards(state, boards){
      state.boards = boards
    },
    setLists(state, lists){
      state.lists = lists
    },
    setTasks(state, tasks){
      state.tasks = tasks
    },
    setComments(state, comments){
      state.comments = comments
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

    // BOARD
    getAllBoards({dispatch, commit}, user){
      debugger
       api.get('/boards')
       .then(res =>{
         debugger
         console.log(res)
         commit('setBoards', res.data)
       })
    },
    createBoard({dispatch, commit, state}, board){
      debugger
      api.post('/boards', board)
      .then(res =>{
        debugger
        console.log(res)
        dispatch('getAllBoards', res)
      })
    },
    editBoard({dispatch, commit, state}, board){
      api.put('/boards/' + board._id)
      .then(res =>{
        console.log(res)
      })
      
    },
    deleteBoard({dispatch, commit}, board){
      api.delete('/boards/' + board._id)
      .then(res =>{
        dispatch('getAllBoards')
        router.push({name: 'AllBoards'})
      })
    },
    // LIST
    getLists({dispatch, commit}, user){
      api.get('/lists')
      .then(res =>{
        console.log(res)
        commit('setLists', res.data)
      })
   },
   createList({dispatch, commit, state}, list){
     debugger
     api.post('/lists', list)
     .then(res =>{
       dispatch('getLists', state.user.authorId)
     })
   },
   editList({dispatch, commit, state}, list){
    api.put('/lists/' + list._id)
    .then(res =>{
      console.log(res)
    })
  },
   deleteList ({dispatch, commit}, list){
     api.delete('/lists/'+ list._id)
     .then(res=>{
       dispatch('getLists')
     })
   },
  //  TASK
    getTasks({dispatch, commit}){
      api.get('/tasks')
      .then(res =>{
        console.log(res)
        debugger
        commit('setTasks', res.data)
      })
    },
    createTask({dispatch, commit, state}, task){
      api.post('/tasks', task)
      .then(res =>{
        debugger
        dispatch('getTasks', state.user.authorId)
      })
    },
    editTask({dispatch, commit, state}, task){
      api.put('/tasks/' + task._id)
      .then(res =>{
        console.log(res)
      })
    },
    deleteTask({dispatch, commit}, task){
      api.delete('/tasks/'+task._id)
      .then(res=>{
        dispatch('getTasks')
      })
    },
    // COMMENTS
    getComments({dispatch, commit}, user){
      debugger
      api.get('/comments')
      .then(res =>{
        console.log(res)
        commit('setComments', res.data)
    })
  },
    createComment({dispatch, commit, state}, comment){
      api.post('/comments', comment)
      .then(res =>{
        debugger
        dispatch('getComments', state.user.authorId)
      })
    },
    editComment({}){},
    deleteComment({dispatch, commit}, comment){
      api.delete('/comments/'+comment._id)
      .then(res=>{
        dispatch('getComments')
        // router.push({name: 'AllComments'})
      })
    },
  }
})



