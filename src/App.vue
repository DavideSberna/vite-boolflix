 

<template>
    <div>
        <allComponent/>
    </div>
</template>



<script>
import { store } from './data/store';
import { activity } from './data/activity';
import axios from 'axios';
import allComponent from './components/allComponent.vue'
export default{
    name: 'App',
    components:{
        allComponent,
    },
    data(){
        return{
            store,
            activity,

        }
    },
    mounted(){
        activity.getFilms()
    }

}
 
</script>



<style lang="scss" scoped>
 div{
    width: 100vw;
    height: 100vh;  
    background-color: rgb(255, 179, 179);
 }
</style>
