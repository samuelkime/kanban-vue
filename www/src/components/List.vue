<template>
    <div class="list col-4 ml-1 mt-3 mr-2 d-inline-flex flex-column" v-if="list">
        <div class="backgroundPic">
            <h5>{{list.title}}  <button @click="deleteList()">X</button></h5>
            <!-- <form v-on:submit.prevent="editList">
                <input class="mb-1" type="text" name="title" placeholder="New List Name Here" v-model="list.title">
                <button class="mb-1"  type="submit">^Change List Name^</button>
            </form> -->
            <form v-on:submit.prevent="createTask">
                <input class="mb-1" type="text" name="title" placeholder="Task Title" v-model="task.title">
                <button class="mb-3" type="submit">Add Task</button>
            </form>
                <task :task="task" v-for="task in tasks[list._id]"></task>
        </div>
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
            this.$store.dispatch('getTasks', this.list._id)
        },
        data() {
            return {
                task: {
                    title: '',
                },
            }
        },
        computed: {
            tasks() {
                return this.$store.state.tasks;
            }
        },
        methods: {
            createTask() {
                this.task.author = this.list.author
                this.task.listId = this.list._id
                this.$store.dispatch('createTask', this.task)
                this.task = {title: ''}
            },
            editList() {
                this.$store.dispatch('editList', this.list)
            },
            deleteList() {
                this.$store.dispatch('deleteList', this.list)
            }
        }
    }
</script>


<style scoped>
    #outline {
        border: black solid 1px
    }
    h5{
        background-color: burlywood;
        border: sienna solid 2px;
    }
</style>