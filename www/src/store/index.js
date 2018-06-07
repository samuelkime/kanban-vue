import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"


vue.use(vuex)

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//kanban-tastic.herokuapp.com' : '//localhost:3000';

var api = axios.create({
  baseURL: baseUrl + '/api',
  timeout: 3000,
  withCredentials: true
})
var auth = axios.create({
  baseURL: baseUrl,
  timeout: 3000,
  withCredentials: true
})

function itemDictionary(arr, parent) {
  var out = {}
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (!out[item[parent]]) {
      out[item[parent]] = []
      out[item[parent]].push(item)
    }
    else {
      out[item[parent]].push(item)
    }
  }
  return out
}

export default new vuex.Store({
  state: {
    user: {},
    boards: [],
    lists: [],
    list: {},
    tasks: {},
    comments: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    deleteUser(state) {
      state.boards = [],
      state.lists = [],
      state.tasks = {},
      state.comments = {},
      state.user = {}
    },
    setBoards(state, boards){
      state.boards = boards
    },
    setLists(state, listData){
      state.lists = listData
    },
    setTasks(state, payload){
      vue.set(state.tasks, payload.listId, payload.data)
    },
    setComments(state, comments){
      state.comments = itemDictionary(comments, 'taskId')
    },

  },
  actions: {

    //AUTH STUFF
    login({ commit, dispatch }, loginCredentials) {
      auth.post('/auth/login', loginCredentials)
        .then(res => {
          console.log("successfully logged in!")
          commit('setUser', res.data)
          router.push({ name: 'Home' })
        })
    },
    logout({ commit, dispatch }) {
      auth.delete('/auth/logout')
      .then(res => {
        console.log("Successfully logged out!")
          commit('deleteUser')
          router.push({name: 'Login'})
        })
    },
    register({ commit, dispatch }, userData) {
      auth.post('/auth/register', userData)
        .then(res => {
          console.log("Registration Successful")  
          router.push({ name: 'Login' }) // I changed this to just change the component 
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('/authenticate')
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
       api.get('/boards')
       .then(res =>{
         console.log(res)
         commit('setBoards', res.data)
       })
    },
    createBoard({dispatch, commit, state}, board){
      api.post('/boards', board)
      .then(res =>{
        console.log(res)
        dispatch('getAllBoards', state.user)
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
    getLists({dispatch, commit}, boardId){
      api.get('/boards/'+boardId+'/lists')
      .then(res =>{
        console.log(res)
        commit('setLists', res.data)
      })
   },
   createList({dispatch, commit, state}, list){
     api.post('/lists', list)
     .then(res =>{
       dispatch('getLists', list.boardId)
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
       dispatch('getLists', list.boardId)
     })
   },
  //  TASK
    getTasks({dispatch, commit}, listId){
      api.get('/lists/'+listId+'/tasks')
      .then(res =>{
        let temp = {
          data: res.data,
          listId: listId
        }
        debugger
        commit('setTasks', temp)
      })
    },
    createTask({dispatch, commit, state}, task){
      api.post('/tasks', task)
      .then(res =>{
        dispatch('getTasks', task.listId)
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
        dispatch('getTasks', task.listId)
      })
    },
    moveTask({dispatch, commit}, task){
      api.put('/tasks/'+task._id, task)
        .then(res=>{
          dispatch('getTasks', task.listId)
          dispatch('getTasks', task.oldListId)
        })
    },
    // COMMENTS
    getComments({dispatch, commit}, user){
      api.get('/comments')
      .then(res =>{
        console.log(res)
        commit('setComments', res.data)
    })
  },
    createComment({dispatch, commit, state}, comment){
      api.post('/comments', comment)
      .then(res =>{
        dispatch('getComments', comment.authorId)
      })
    },
    editComment({dispatch, commit, state}, comment){
      api.put('/comments/' + comment._id)
      .then(res =>{
        console.log(res)
        dispatch('getComments', state.user.authorId)
      })
    }, 
    deleteComment({dispatch, commit}, comment){
      api.delete('/comments/'+comment._id)
      .then(res=>{
        dispatch('getComments')
        // router.push({name: 'AllComments'})
      })
    },
  }
})



