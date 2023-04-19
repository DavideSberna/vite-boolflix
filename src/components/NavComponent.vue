<template>
   <section>
        <div class="container d-flex align-items-center justify-content-between h-100">
            <div>
                <h3>NetFlix</h3>
            </div>
            <div class="input-group w-input">
                <input type="text" class="form-control" placeholder="Username" v-model="store.search.film">
                <button type="button" class="btn btn-primary" @click="store.getFilms()">Primary</button>
            </div>
        </div>
   </section>
</template>



<script>
import { store } from '../data/store';
export default{
    name: 'NavComponent',
    data(){
        return{
            store,

        }
    },
    methods:{
        click(){
            store.getFilms()
        }

    },
    mounted(){
        store.getFilms()
    }

}
 
</script>



 
<style lang="scss" scoped>
 
section{
    width: 100%;
    height: 80px;
    background-color: black;
    color: white;

    .w-input{
       width: 300px;
    }
}
</style>