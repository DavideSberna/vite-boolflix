<template>
    <header>
        <NavComponent/>
    </header>
    <main>
        <ContentComponent/>
    </main>
    <footer>
        <FooterComponent/>
    </footer>
</template>



<script>
import NavComponent from './NavComponent.vue';
import ContentComponent from './ContentComponent.vue';
import FooterComponent from './FooterComponent.vue';
export default{
    name: 'MainComponent',
    components:{
        NavComponent,
        ContentComponent,
        FooterComponent,
    },
    data(){
        return{

        }
    }

}
 
</script>



<style scoped>
 
</style>
