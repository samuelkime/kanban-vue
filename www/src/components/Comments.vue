<template>
    <div class="comments" id="outline">
        <h3>{{comment.username}}</h3>
        <h4>{{comment.body}}</h4>

    </div>
</template>


<script>

    export default {
        name: 'comments',
        props: ['comment'],
        components: {},
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
        },
        methods: {
            editComment() { },
            deleteComment() { }
        }
    }
</script>


<style scoped>
    #outline {
        border: black solid 1px;
    }
</style>