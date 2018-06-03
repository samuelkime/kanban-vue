<template>
    <div class="task" id="outline">
        <form v-on:submit.prevent="editList">
                <input type="text" name="title" placeholder="New List Name Here" v-model="list.title">
                <button type="submit">Change List Name</button>
            </form>
        <h3>{{task.title}}<button @click="deleteTask()">X</button></h3>
        <form v-on:submit.prevent="createComment">
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