<template>
    <div class="allBoards" id="outline">
        <h3>My Boards</h3>
        <form v-on:submit.prevent="createBoard">
            <input type="text" name="title" placeholder="Post Title" v-model="board.title">
            <button type="submit">Make a Board</button>
        </form>
        <router-link :to="{name: 'Board', params:{boardId: board._id}}" v-for="board in AllBoards" :key="board._id">{{board.title}}</router-link>
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
                }
            }
        },
        computed: {
            AllBoards() {
                return this.$store.state.AllBoards;
            }
        },
        methods: {
            openBoard(board) {
                router.push({
                    name: 'Board'
                })
            },
            createBoard() {
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