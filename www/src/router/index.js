import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AllBoards from '@/components/AllBoards'
import Board from '@/components/Board'
// import List from '@/components/List'
// import Task from '@/components/Task'
// import Comments from '@/components/Comments'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }, {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/boards',
      name: 'AllBoards',
      component: AllBoards
    },
    {
      path: '/boards/:boardId',
      name: 'Board',
      props: true,
      component: Board
    }
  ]
})
