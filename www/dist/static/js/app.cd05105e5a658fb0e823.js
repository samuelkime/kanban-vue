webpackJsonp([1],{"3j80":function(t,e){},"6XdX":function(t,e){},JqNx:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("h1",[this._v("KANBAN VUE")]),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var a=s("VU/8")({name:"App",mounted:function(){this.$store.dispatch("getAllBoards")}},o,!1,function(t){s("JqNx")},null,null).exports,i=s("/ocq"),r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"comments",attrs:{id:"outline"}},[e("h3",[this._v("comment author")]),this._v(" "),e("h4",[this._v("comment body")])])}]};var u={name:"task",props:["task"],components:{comments:s("VU/8")({name:"comments",props:["task"],components:{},data:function(){return{}},computed:{},methods:{}},r,!1,function(t){s("o+UL")},"data-v-1df4262a",null).exports},data:function(){return{comments:{body:"",authorName:"",userId:"",taskId:""}}},mounted:function(){this.$store.dispatch("getTasks")},computed:{comments:function(){return this.$store.state.comments},tasks:function(){return this.$store.state.lists}},methods:{createComment:function(){this.task.boardId=this.board._id,this.task.listId=this.list._id,this.$store.dispatch("createTask",this.task)}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task",attrs:{id:"outline"}},[s("h3",[t._v(t._s(t.task.body))]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.createComment(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.comment.body,expression:"comment.body"}],attrs:{type:"text",name:"title",placeholder:"Comment Title"},domProps:{value:t.comment.body},on:{input:function(e){e.target.composing||t.$set(t.comment,"body",e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("Add Comment")])]),t._v(" "),s("comments",{attrs:{task:t.task}})],1)},staticRenderFns:[]};var l={name:"list",props:["list"],components:{task:s("VU/8")(u,c,!1,function(t){s("vKaD")},"data-v-2469f0f5",null).exports},mounted:function(){this.$store.dispatch("getTasks",this.list.boardId)},data:function(){return{task:{body:"",authorId:"",listId:"",boardId:""}}},computed:{tasks:function(){return this.$store.state.tasks},lists:function(){return this.$store.state.lists}},methods:{createTask:function(){this.task.boardId=this.list.boardId,this.task.listId=this.list._id,this.$store.dispatch("createTask",this.task)}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.list?s("div",{staticClass:"list",attrs:{id:"outline"}},[s("form",{on:{submit:function(e){return e.preventDefault(),t.createTask(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task.body,expression:"task.body"}],attrs:{type:"text",name:"title",placeholder:"Task Title"},domProps:{value:t.task.body},on:{input:function(e){e.target.composing||t.$set(t.task,"body",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.task.authorName,expression:"task.authorName"}],attrs:{type:"text",name:"",placeholder:"Who's writing this?"},domProps:{value:t.task.authorName},on:{input:function(e){e.target.composing||t.$set(t.task,"authorName",e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("Add Task")])]),t._v(" "),t._l(t.tasks,function(t){return s("task")})],2):t._e()},staticRenderFns:[]};var m={name:"board",props:["boardId"],components:{list:s("VU/8")(l,d,!1,function(t){s("aTn5")},"data-v-7ea01c77",null).exports},mounted:function(){this.$store.dispatch("getLists",this.boardId)},data:function(){return{list:{}}},computed:{board:function(){var t=this;return this.$store.state.AllBoards.find(function(e){return e._id==t.boardId})},lists:function(){return this.$store.state.lists}},methods:{backToAllBoards:function(){N.push({name:"AllBoards"})},createList:function(){this.list.boardId=this.board._id,this.$store.dispatch("createList",this.list)}}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.board?s("div",{staticClass:"board",attrs:{id:"outline"}},[s("button",{on:{click:function(e){t.backToAllBoards()}}},[t._v("Back to My Boards")]),t._v(" "),s("h3",[t._v(t._s(t.board.title))]),t._v(" "),t._l(t.lists,function(e){return s("button",[s("h1",[t._v(t._s(t.board.title))]),t._v(" "),s("h3",[t._v(t._s(e.title))]),t._v(" "),s("h3",[t._v(t._s(e.author))])])}),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.createList(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.list.title,expression:"list.title"}],attrs:{type:"text",name:"title",placeholder:"List Title"},domProps:{value:t.list.title},on:{input:function(e){e.target.composing||t.$set(t.list,"title",e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("Make a List")])]),t._v(" "),t._l(t.lists,function(t){return s("list",{attrs:{list:t}})})],2):t._e()},staticRenderFns:[]};var h=s("VU/8")(m,p,!1,function(t){s("X4DS")},"data-v-98d74620",null).exports,v={name:"allBoards",components:{board:h},data:function(){return{board:{title:"",author:""}}},computed:{AllBoards:function(){return this.$store.state.AllBoards}},methods:{openBoard:function(t){N.push({name:"Board"})},createBoard:function(){this.$store.dispatch("createBoard",this.board)}}},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"allBoards",attrs:{id:"outline"}},[s("h3",[t._v("My Boards")]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.createBoard(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.board.title,expression:"board.title"}],attrs:{type:"text",name:"title",placeholder:"Post Title"},domProps:{value:t.board.title},on:{input:function(e){e.target.composing||t.$set(t.board,"title",e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("Make a Board")])]),t._v(" "),t._l(t.AllBoards,function(e){return s("router-link",{key:e._id,attrs:{to:{name:"Board",params:{boardId:e._id}}}},[t._v(t._s(e.title))])})],2)},staticRenderFns:[]};var g=s("VU/8")(v,f,!1,function(t){s("3j80")},"data-v-cee6b690",null).exports,_={name:"Home",components:{allBoards:g},data:function(){return{}},mounted:function(){this.$store.state.user._id||N.push({name:"Login"})},methods:{logout:function(){this.$store.dispatch("logout"),N.push("Login")}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("allBoards"),this._v(" "),e("button",{on:{click:this.logout}},[this._v("Logout")])],1)},staticRenderFns:[]};var k=s("VU/8")(_,b,!1,function(t){s("bNsu")},"data-v-5ca8bcc8",null).exports,$={name:"",mounted:function(){this.$store.state.user._id||this.$store.dispatch("authenticate")},data:function(){return{login:{email:"",password:""}}},computed:{},methods:{userLogin:function(){this.$store.dispatch("login",this.login)},switchRegister:function(){N.push({name:"Register"})}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login-page"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.userLogin(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.email,expression:"login.email"}],attrs:{type:"text",name:"email",id:"email",placeholder:"Email Address"},domProps:{value:t.login.email},on:{input:function(e){e.target.composing||t.$set(t.login,"email",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],attrs:{type:"password",name:"password",id:"password",placeholder:"Password"},domProps:{value:t.login.password},on:{input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("LOGIN")])]),t._v(" "),s("button",{on:{click:t.switchRegister}},[t._v("Not a user? Click here to register")])])},staticRenderFns:[]};var y=s("VU/8")($,w,!1,function(t){s("XCJj")},null,null).exports,B={name:"register",data:function(){return{register:{username:"",email:"",password:""}}},computed:{},methods:{userRegister:function(){this.$store.dispatch("register",this.register)},switchLogin:function(){N.push({name:"Login"})}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.userRegister(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.username,expression:"register.username"}],attrs:{type:"text",name:"username",id:"username",placeholder:"username"},domProps:{value:t.register.username},on:{input:function(e){e.target.composing||t.$set(t.register,"username",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.email,expression:"register.email"}],attrs:{type:"text",name:"email",id:"email",placeholder:"Email Address"},domProps:{value:t.register.email},on:{input:function(e){e.target.composing||t.$set(t.register,"email",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],attrs:{type:"password",name:"password",id:"password",placeholder:"Password"},domProps:{value:t.register.password},on:{input:function(e){e.target.composing||t.$set(t.register,"password",e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("Register")])]),t._v(" "),s("button",{on:{click:t.switchLogin}},[t._v("Already a user? Click here to login!")])])},staticRenderFns:[]};var L=s("VU/8")(B,x,!1,function(t){s("6XdX")},null,null).exports;n.a.use(i.a);var N=new i.a({routes:[{path:"/Login",name:"Login",component:y},{path:"/",name:"Home",component:k},{path:"/Register",name:"Register",component:L},{path:"/boards",name:"AllBoards",component:g},{path:"/boards/:boardId",name:"Board",props:!0,component:h}]}),A=s("NYxO"),C=s("mtWM"),T=s.n(C);n.a.use(A.a);var R=T.a.create({baseURL:"http://localhost:3000/api",timeout:3e3,withCredentials:!0}),U=T.a.create({baseURL:"http://localhost:3000/auth",timeout:3e3,withCredentials:!0}),I=new A.a.Store({state:{user:{},AllBoards:[],lists:[],tasks:[],comments:[]},mutations:{setUser:function(t,e){t.user=e},deleteUser:function(t){t.user={}},setBoards:function(t,e){t.AllBoards=e},setLists:function(t,e){t.lists=e},setTasks:function(t,e){t.tasks=e},setComments:function(t,e){t.comments=e}},actions:{login:function(t,e){var s=t.commit;t.dispatch;U.post("/login",e).then(function(t){console.log("successfully logged in!"),s("setUser",t.data),N.push({name:"Home"})})},logout:function(t){var e=t.commit;t.dispatch;U.delete("/logout").then(function(t){console.log("Successfully logged out!"),e("deleteUser"),N.push({name:"Login"})})},register:function(t,e){t.commit,t.dispatch;U.post("/register",e).then(function(t){console.log("Registration Successful"),N.push({name:"Login"})})},authenticate:function(t){var e=t.commit;t.dispatch;R.get("/authenticate").then(function(t){e("setUser",t.data),N.push({name:"Home"})}).catch(function(t){console.log(t.data)})},getAllBoards:function(t){t.dispatch;var e=t.commit;R.get("/boards").then(function(t){console.log(t),e("setBoards",t.data)})},createBoard:function(t,e){var s=t.dispatch,n=(t.commit,t.state);R.post("/boards",e).then(function(t){s("getAllBoards",n.user.author)})},getLists:function(t){t.dispatch;var e=t.commit;R.get("/lists").then(function(t){console.log(t),e("setLists",t.data)})},createList:function(t,e){var s=t.dispatch,n=(t.commit,t.state);R.post("/lists",e).then(function(t){s("getLists",n.user.author)})},getTasks:function(t){t.dispatch;var e=t.commit;R.get("/tasks").then(function(t){console.log(t),e("setTasks",t.data)})},createTask:function(t,e){var s=t.dispatch,n=(t.commit,t.state);R.post("/tasks",e).then(function(t){s("getTasks",n.user.author)})},getComments:function(t){t.dispatch;var e=t.commit;R.get("/comments").then(function(t){console.log(t),e("setComments",t.data)})},createComment:function(t,e){var s=t.dispatch,n=(t.commit,t.state);R.post("/comments").then(function(t){s("getComments",n.user.author)})}}});n.a.config.productionTip=!1,new n.a({el:"#app",router:N,store:I,components:{App:a},template:"<App/>"})},X4DS:function(t,e){},XCJj:function(t,e){},aTn5:function(t,e){},bNsu:function(t,e){},"o+UL":function(t,e){},vKaD:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cd05105e5a658fb0e823.js.map