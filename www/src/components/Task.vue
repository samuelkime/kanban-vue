<template>
    <div class="component" id="outline">
        <h3>task title</h3>
        <comments></comments>

    </div>
</template>


<script>
import comments from './Comments'
export default {
    name: 'component',
    components:{
        comments
    },
    data(){
        return {}
    },
    computed:{},
    methods:{}
}
</script>


<style scoped>
    #outline{
        border: black solid 1px;
        }
</style>