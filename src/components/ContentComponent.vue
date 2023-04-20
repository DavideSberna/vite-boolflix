<template>
    <section>
        <div class="container">
            <div v-show="store.show">
                <div>
                    <FilmSearchComponent/>
                </div>
                <div>
                    <SeriesSearchComponent/>
                </div>
            </div>
            
            <div>
                <FilmsPopular/>
            </div>
            <div>
                <SeriesPopular/>
            </div>
        </div>
    </section>
</template>



<script>
import { store } from '../data/store';
import { activity } from '../data/activity';
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
            store,
            activity,

        }
    },
    mounted(){
        activity.getSeriesPopular();
        activity.getFilmsPopular();
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