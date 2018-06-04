<template>
    <div class="list col-4 ml-1 mt-3 mr-2 d-inline-flex flex-column" id="outline" v-if="list">
        <button @click="deleteList()">X</button>
            <h3>{{list.title}}</h3>
        <form v-on:submit.prevent="editList">
                <input type="text" name="title" placeholder="New List Name Here" v-model="list.title">
                <button type="submit">Change List Name</button>
            </form>
        <form v-on:submit.prevent="createTask">
            <input type="text" name="title" placeholder="Task Title" v-model="task.title">
            <button type="submit">Add Task</button>
        </form>
        
                <task :task="task" v-for="task in tasks"></task>
        
    </div>
</template>


<script>
    import task from './Task'
    export default {
        name: 'list',
        props: ['list'],
        components: {
            task
        },
        mounted() {
            this.$store.dispatch('getTasks', this.task.listId)
        },
        data() {
            return {
                task: {
                    title: '',
                    boardId: '',
                    listId: '',
                    authorId: ''
                },
            }
        },
        computed: {
            tasks() {
                return this.$store.state.tasks;
            },
            lists() {
                return this.$store.state.lists.find(l => l._id == this.listId);
            }
        },
        methods: {
            createTask() {
                this.task.authorId = this.list.authorId
                this.task.boardId = this.list.boardId
                this.task.listId = this.list._id
                debugger
                this.$store.dispatch('createTask', this.task)
            },
            editList(){
                this.$store.dispatch('editList', this.list)
            },
            deleteList(){
                this.$store.dispatch('deleteList', this.list)
            }
        }
    }
</script>


<style scoped>
    #outline {
        border: black solid 1px;
    }
</style>