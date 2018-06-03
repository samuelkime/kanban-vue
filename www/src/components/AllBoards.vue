<template>
    <div class="allBoards" id="outline">
        <button @click="logout">Logout</button>
        <h3>My Boards</h3>
        <form v-on:submit.prevent="createBoard">
            <input type="text" name="title" placeholder="Board Title" v-model="board.title">
            <button type="submit">Make a Board</button>
        </form>
        <router-link :to="{name: 'Board', params:{boardId: board._id}}" v-for="board in boards" :key="board._id">{{board.title}}</router-link>
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
                    authorId: ''
                }
            }
        },
        computed: {
            boards() {
                return this.$store.state.boards;
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
                debugger
                this.board.authorId = this.$store.state.user._id
                this.$store.dispatch('createBoard', this.board)
            }
        }
    }
</script>


<style scoped>
    #outline {
        border: black solid 1px;
    }
</style>