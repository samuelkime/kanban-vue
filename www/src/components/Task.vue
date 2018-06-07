<template>
    <div class="task d-flex flex-column justify-content-start">
        <div class="backgroundPic">
            <h3><button @click="deleteTask()">X</button></h3>
            <h3>{{task.title}}</h3>
            <!-- <form class="form-inline d-flex justify-content-center" v-on:submit.prevent="editTask">
                <input type="text" name="title" placeholder="New Task Name Here" v-model="task.title">     
            </form> -->
            <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option v-for="list in lists" :value="list._id">{{list.title}}</option>
            </select>
            <button @click="moveTask">Onward!</button>
            <form class="form-inline d-flex justify-content-center" v-on:submit.prevent="createComment">
                <input type="text" name="body" placeholder="Comment Title" v-model="comment.body">
                <button type="submit">Add Comment</button>
            </form>
            <ul>
                <li v-for="comment in comments[task._id]">
                    <comment :comment="comment"></comment>
                </li>
            </ul>
        </div>
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
            this.$store.dispatch('getComments')
        },
        data() {
            return {
                comment: {
                    body: '',    
                },
                selected: ''
            }
        },
        computed: {
            comments() {
                return this.$store.state.comments;
            },
            lists() {
                return this.$store.state.lists;
            }
        },
        methods: {
            createComment() {
                this.comment.author = this.task.author
                this.comment.taskId = this.task._id
                this.$store.dispatch('createComment', this.comment)
                this.comment = {body: ''}
            },
            editTask(){
                this.$store.dispatch('editTask', this.task)
            },
            moveTask(){
                if(this.selected == ""){
                    return
                }
                this.task.oldListId = this.task.listId
                this.task.listId = this.selected
                this.$store.dispatch('moveTask', this.task)
                this.selected = ''
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
    .backgroundPic {
        background-image: url('../assets/StickynoteTaskBackground.jpg');
        background-size: cover;
        background-repeat: no-repeat
    }
</style>