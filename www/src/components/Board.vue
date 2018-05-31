<template>
    <div class="board" id="outline">
        <button @click="backToAllBoards()">Back to My Boards</button>
        <h3>{{board.name}}</h3>
        <list :board="board"></list>
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
        data() {
            return {
                list: {
                    title: '',
                    author: '',
                }
            }
        },
        computed: {
            board() {
                return this.$store.state.AllBoards.find(b => b._id == this.boardId) || {}
            }
        },
        methods: {
            // Sends user back to AllBoards component
            backToAllBoards() {
                router.push({
                    name: 'AllBoards'
                })
            },
        }
    }
</script>


<style scoped>
    #outline {
        border: black solid 1px;
    }
</style>