<template>
    <div class="allBoards container d-flex flex-column align-items-center">
        <button @click="logout">Logout</button>
        <h3>Welcome Back!</h3>
        <h3>My Boards</h3>
        <form v-on:submit.prevent="createBoard">
            <input type="text" name="title" placeholder="Board Title" v-model="board.title">
            <button type="submit">Make a Board</button>
        </form>
        <ol class="tmargin">
            <li class="bmargin" v-for="board in boards" :key="board._id">
                <router-link :to="{name: 'Board', params:{boardId: board._id}}">{{board.title}}</router-link>
            </li>
        </ol>
    </div>
</template>


<script>
    import router from '../router'
    import board from './Board'
    export default {
        name: 'allBoards',
        components: {
            board
        },
        data() {
            return {
                board: {
                    title: '',
                    author: ''
                },
            }
        },
        computed: {
            boards() {
                return this.$store.state.boards;
            },
            user(){
                return this.$store.state.user;
            }
        },
        methods: {
            // LOGOUT BUTTON
            logout() {
                this.$store.dispatch('logout')
                router.push('Login')
            },
            openBoard(board) {
                router.push({
                    name: 'Board'
                })
            },
            createBoard() {
                this.board.author = this.user._id
                this.$store.dispatch('createBoard', this.board)
            }
        }
    }
</script>


<style scoped>
    .tmargin{
        margin-top: 5px
    };
    .bmargin{
        margin-bottom: 10wpx;
    }
</style>