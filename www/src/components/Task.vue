<template>
    <div class="task d-flex flex-column justify-content-start" id="outline">
            <form class="form-inline" v-on:submit.prevent="editTask">
                <input type="text" name="title" placeholder="New Task Name Here" v-model="task.title">     
            </form>
            <h3><button @click="deleteTask()">X</button></h3>
            <form class="form-inline" v-on:submit.prevent="createComment">
                <input type="text" name="body" placeholder="Comment Title" v-model="comment.body">
                <button type="submit">Add Comment</button>
            </form>
        <comment :comment="comment" v-for="comment in comments"></comment>
    </div>
</template>


<script>
    import comment from './Comment'
    export default {
        name: 'task',
        props: ['task'],
        components: {
            comment
        },
        mounted() {
            this.$store.dispatch('getComments', this.comment.taskId)
        },
        data() {
            return {
                comment: {
                    body: '',
                    username: '',
                    authorId: '',
                    taskId: '',
                    boardId: '',
                    listId: ''
                },
            }
        },
        computed: {
            comments() {
                return this.$store.state.comments;
            },
            tasks() {
                return this.$store.state.tasks.find(t => t._id == this.taskId);
            },
        },
        methods: {
            createComment() {
                // this.comment.username = username
                this.comment.authorId = this.task.authorId
                this.comment.boardId = this.task.boardId
                this.comment.listId = this.task.listId
                this.comment.taskId = this.task._id
                debugger
                this.$store.dispatch('createComment', this.comment)
            },
            editTask(){
                this.$store.dispatch('editTask', this.task)
            },
            deleteTask() {
                this.$store.dispatch('deleteTask', this.task)
            }
        }
    }
</script>


<style scoped>
    #outline {
        border: black solid 1px;
    }
</style>