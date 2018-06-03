<template>
    <div class="comments" id="outline">
            <h3>{{comment.authorId}}</h3>
            <h4>{{comment.body}}</h4>

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
        editComment(){},
        deleteComment(){},
    }
}
</script>


<style scoped>
    #outline{
        border: black solid 1px;
        }
</style>