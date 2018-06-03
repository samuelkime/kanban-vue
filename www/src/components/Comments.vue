<template>
    <div class="comments" id="outline">
            <h3>{{comment.username}}</h3>
            <h4>{{comment.body}}</h4>

    </div>
</template>


<script>

export default {
    name: 'comments',
    props:['comments'],
    components:{},
    data(){
        return {
        }
    },
    computed:{
        allComments(){
            return this.$store.state.allComments;
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