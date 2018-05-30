import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

let api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 3000
})

vue.use(vuex)

export default new vuex.Store({
  state:{
    
  },
  mutations:{

  },
  actions:{

  }
})