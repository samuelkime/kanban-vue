<template>
    <div class="board container" id="outline" v-if="board">
        <button @click="backToAllBoards()">Back to My Boards</button>
        <h3>{{board.title}}
            <button @click="deleteBoard()">X</button>
        </h3>
        <form class="mb-2" v-on:submit.prevent="editBoard">
            <input type="text" name="title" placeholder="New Board Name Here" v-model="board.title">
            <button type="submit">Change Board Name</button>
        </form>
        <form v-on:submit.prevent="createList">
            <input type="text" name="title" placeholder="List Title" v-model="list.title">
            <button type="submit">Make a List</button>
        </form>
        <list v-for="list in lists" :list="list"></list>
    </div>
</template>


<script>
    import router from '../router'
    import list from './List'
    export default {
        name: 'board',
        components: {
            list
        },
        mounted() {
            this.$store.dispatch('getLists', this.$route.params.boardId)
            if (!this.$store.state.user._id) {
                router.push({ name: 'Login' }) // this goes to a login.vue
            }
        },
        data() {
            return {
                list: {
                    title: ''
                }
            }
        },
        computed: {
            board() {
                return this.$store.state.boards.find(b => b._id == this.$route.params.boardId)
            },
            lists() {
                return this.$store.state.lists
            },
            user(){
                return this.$store.state.user
            }
        },
        methods: {
            // Sends user back to AllBoards component
            backToAllBoards() {
                router.push({
                    name: 'AllBoards'
                })
            },
            createList() {
                this.list.boardId = this.board._id
                this.list.author = this.user._id
                this.$store.dispatch('createList', this.list)
                this.list = { title: '' }
            },
            editBoard() {
                this.$store.dispatch('editBoard', this.board)
            },
            deleteBoard() {
                this.$store.dispatch('deleteBoard', this.board)
            }
        }
    }
</script>


<style scoped>
    #outline {
        border: black solid 1px;
        background-image: url('../assets/CorkBoardBackground.jpg');
        text-align: center;
    }

    h3 {
        background-color: burlywood;
        border: sienna solid 2px;
    }
</style>