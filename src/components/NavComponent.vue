<template>
   <section>
        <div class="container d-flex align-items-center justify-content-between h-100">
            <div>
                <h3>NetFlix</h3>
            </div>
            <div class="input-group w-input">
                <input type="text" class="form-control" placeholder="Username" v-model="store.queryString.query"  @keyup.enter="getDataSearch()">
                <button type="button" class="btn btn-danger" @click="getDataSearch()">Primary</button>
            </div>
        </div>
   </section>
</template>



<script>
import { store } from '../data/store';
 
export default{
    name: 'NavComponent',
    emits:['showData'],
     
    
     
    data(){
        return{
            store,
            

        }
    },
    methods:{
        getDataSearch(){
            this.$emit('showData')
        }
       

         

    },
     

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