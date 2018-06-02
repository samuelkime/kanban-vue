<template>
    <div class="list" id="outline" v-if="list">
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
            this.$store.dispatch('getTasks', this.list.boardId)
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
                return this.$store.state.lists;
            }
        },
        methods: {
            createTask() {
                this.task.authorId = this.list.authorId
                this.task.boardId = this.list.boardId
                this.task.listId = this.list._id
                debugger
                this.$store.dispatch('createTask', this.task)
            }
        }
    }
</script>


<style scoped>
    #outline {
        border: black solid 1px;
    }
</style>