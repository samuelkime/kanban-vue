<template>
    <div class="comments">
            <h6><button @click="deleteComment()">X</button></h6>
            <h5>{{comment.body}}</h5>
    </div>
</template>


<script>

export default {
    name: 'comment',
    props:['comment'],
    components:{},
    data(){
        return {
        }
    },
    computed:{
        comments(){
            return this.$store.state.comments;
        },
    },
    methods:{
        editComment(){
            this.$store.dispatch('editComment', this.comment)
        },
        deleteComment(){
            this.$store.dispatch('deleteComment', this.comment)
        },
    }
}
</script>


<style scoped>
    #outline{
        border: black solid 1px;
        }
</style>