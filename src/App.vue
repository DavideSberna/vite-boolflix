 

<template>
    <div>
 <!-- <header>
        <NavComponent/>
         </header> -->
        <main>
        <ContentComponent/>
    </main>
    <footer>
        <FooterComponent/>
    </footer>
    </div>
</template>



<script>
import { store } from './data/store';
// import { activity } from './data/activity';
import ContentComponent from '../src/components/ContentComponent.vue';
import FooterComponent from '../src/components/FooterComponent.vue';
 
 
export default{
    name: 'App',
    components:{
        ContentComponent,
        FooterComponent,
    },
    data(){
        return{
            store,
            

        }
    },
    mounted(){
       
    }

}
 
</script>



<style lang="scss" scoped>
 div{
    width: 100vw;
    height: 100vh;  
    background-color: rgb(67, 67, 67);
 }
</style>
