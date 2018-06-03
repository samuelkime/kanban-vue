<template>
    <div class="task" id="outline">
        <h3>{{task.title}}</h3>
        <form v-on:submit.prevent="createComment">
                <input type="text" name="body" placeholder="Comment Title" v-model="comment.body">
                <button type="submit">Add Comment</button>
            </form>
        <comments :comments="comments" v-for="comment in allComments"></comments>

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
            comment:{
                body:'',
                username:'',
                authorId:'',
                taskId:'',
                boardId:'',
                listId:''
              },
            }
        },
    mounted() {
            this.$store.dispatch('getComments', this.task.listId)
    },
    computed:{
        allComments(){
            return this.$store.state.allComments;
        },
        tasks(){
            return this.$store.state.tasks;
        },
    },
    methods:{
        createComment(){
            // this.comment.username = username
            this.comment.authorId = this.task.authorId
            this.comment.boardId = this.task.boardId
            this.comment.listId = this.task.listId
            this.comment.taskId = this.task._id
            debugger
            this.$store.dispatch('createComment', this.comment)
        }
    }
}
</script>


<style scoped>
    #outline{
        border: black solid 1px;
        }
</style>