<template>
   <section>
        <div class="container d-flex align-items-center justify-content-between h-100">
            <div>
                <h3>NetFlix</h3>
            </div>
            <div class="input-group w-input">
                <input type="text" class="form-control" placeholder="Username" v-model="store.queryString.query"  @keyup.enter="activity.getData()">
                <button type="button" class="btn btn-primary" @click="activity.getData()">Primary</button>
            </div>
        </div>
   </section>
</template>



<script>
import { store } from '../data/store';
import { activity } from '../data/activity';
export default{
    name: 'NavComponent',
    data(){
        return{
            store,
            activity,

        }
    },
    methods:{
        click(){
            activity.getFilms()
        }

    },
    mounted(){
        activity.getFilms()
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