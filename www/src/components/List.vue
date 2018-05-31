<template>
    <div class="list" id="outline">
        <form v-on:submit.prevent="createList">
            <input type="text" name="title" placeholder="List Title" v-model="list.title">
            <button type="submit">Make a List</button>
        </form>
        <button v-for="list in lists">
            <h3>{{list.title}}</h3>
            <h3>{{list.author}}</h3>
            <h1>{{board.title}}</h1>
        </button>
        <!-- <task></task> -->
    </div>
</template>


<script>
    import task from './Task'
    export default {
        name: 'list',
        components: {
            task
        },
        props: ['board'],
        data() {
            return {
                list: {
                    title: '',
                    artist: '',
                    // boardId: ''
                }
            }
        },
        mounted() {
            this.$store.dispatch('getLists')
        },
        computed: {
            lists() {

                return this.$store.state.lists;
            }
        },
        methods: {
            createList() {
                this.list.boardId = this.board._id
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