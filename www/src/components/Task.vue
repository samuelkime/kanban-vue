<template>
    <div class="task" id="outline">
        <h3>{{task.body}}</h3>
        <form v-on:submit.prevent="createComment">
                <input type="text" name="title" placeholder="Comment Title" v-model="comment.body">
                <button type="submit">Add Comment</button>
            </form>
        <comments :task="task"></comments>

    </div>
</template>


<script>
import comments from './Comments'
export default {
    name: 'task',
    props: ['task'],
    components:{
        comments
    },
    data(){
        return {
            comments:{
                body:'',
                authorName:'',
                userId:'',
                taskId:''
              },
            }
        },
    mounted() {
            this.$store.dispatch('getTasks')
    },
    computed:{
        comments(){
            return this.$store.state.comments;
        },
        tasks(){
            return this.$store.state.lists;
        }
    },
    methods:{
        createComment(){
            this.task.boardId = this.board._id
            this.task.listId = this.list._id
            this.$store.dispatch('createTask', this.task)
        }
    }
}
</script>


<style scoped>
    #outline{
        border: black solid 1px;
        }
</style>