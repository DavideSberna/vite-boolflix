 

<template>
    <div>
        <allComponent/>
        <!-- <div>
            <ul>
                <li v-for="films in store.searchFilms">{{ films.original_title}}</li>
            </ul>     
        </div> -->
    </div>
</template>



<script>
import { store } from './data/store';
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

        }
    },
    mounted(){
        store.getFilms()
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
