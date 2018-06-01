<template>
    <div class="board" id="outline" v-if="board"> 
        <button @click="backToAllBoards()">Back to My Boards</button>
        <form v-on:submit.prevent="createList">
                <input type="text" name="title" placeholder="List Title" v-model="list.title">
                <button type="submit">Make a List</button>
            </form>
        <h3>{{board.title}}</h3>
        <button v-for="list in lists">
            <h1>{{board.title}}</h1>
            <h3>{{list.title}}</h3>
            <h3>{{list.author}}</h3>
        </button>
        <list v-for="list in lists" :list="list"></list>
    </div>
</template>


<script>
    import router from '../router'
    import list from './List'
    export default {
        name: 'board',
        props: ['boardId'],
        components: {
            list
        },
        mounted(){
            this.$store.dispatch('getLists', this.boardId)
        },
        data() {
            return {
                list: {}
            }
        },
        computed: {
            board() {
                return this.$store.state.AllBoards.find(b => b._id == this.boardId)
            },
            lists(){
                return this.$store.state.lists
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
                debugger
                this.$store.dispatch('createList', this.list)
            }
        }
    }
</script>


<style scoped>
    #outline {
        border: black solid 1px;
    }
</style>