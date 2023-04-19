<template>
    <section class="container">
        <div>
            <FilmSearchComponent/>
        </div>
        <!-- <div>
            <SeriesSearchComponent/>
        </div>
        <div>
            <FilmsPopular/>
        </div>
        <div>
            <SeriesPopular/>
        </div> -->
    </section>
</template>



<script>
import FilmSearchComponent from './FilmSearchComponent.vue';
import SeriesSearchComponent from './SeriesSearchComponent.vue'
import FilmsPopular from './FilmsPopular.vue'
import SeriesPopular from './SeriesPopular.vue'
export default{
    name: 'ContentComponent',
    components:{
        FilmSearchComponent,
        SeriesSearchComponent,
        FilmsPopular,
        SeriesPopular,
    },
    data(){
        return{

        }
    }

}
 
</script>



<style lang="scss" scoped>
 
section{
    width: 100%;
    height: calc(100vh - 160px);
    overflow-y: auto;
}
</style>