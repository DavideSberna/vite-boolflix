<template>
    <section>
        <div>
            <NavComponent @show-data="getData()"/>
        </div>
    </section>
    <section class="content">
        <div v-if="store.loaders.movie">
            <loader/>
        </div>
        <div class="container">
            <div class="alert alert-danger w-50 m-auto text-center mt-4 mb-4" v-if="show">
                <p class="p-0 m-0">Ricerca non valida</p>
            </div>
            <div v-if="!store.searchFilms.length == 0">
                <div class="mt-4">
                    <h3 class="text-white">Ecco i tuoi film!</h3>
                </div>
                <div class="d-flex flex-wrap">
                    <FilmSearchComponent v-for="(items, index) in store.searchFilms" :key="items.id" :title="items.title" :titleAll="items.title" :showBadge="showBadge" :original_title="items.release_date" :language="items.original_language" :vote="items.vote_average" :image="items.poster_path" :loaders="store.loaders" :error="store.errors" :overview="items.overview" :overviewAll="items.overview" />
                </div>
            </div>
            <div v-if="!store.searchSeries.length == 0">
                <div class="mt-4">
                    <h3 class="text-white">Ecco le tue serie TV!</h3>
                </div>
                <div class="d-flex flex-wrap">
                    <SeriesSearchComponent v-for="(items, index) in store.searchSeries" :key="items.id" :title="items.name" :titleAll="items.name" :showBadge="showBadge" :original_title="items.first_air_date" :language="items.original_language" :vote="items.vote_average" :image="items.poster_path" :loaders="store.loaders" :error="store.errors" :overview="items.overview" :overviewAll="items.overview" />
                </div>
            </div>
            <div v-if="!store.filmsPopular.length == 0">
                <div class="mt-4">
                    <h3 class="text-white">Ecco i film piu' popolari!</h3>
                </div>
                <div class="d-flex flex-wrap">
                    <FilmsPopular v-for="(items, index) in store.filmsPopular" :key="items.id" :title="items.title" :titleAll="items.title" :showBadge="showBadge" :original_title="items.release_date" :language="items.original_language" :vote="items.vote_average" :image="items.poster_path" :loaders="store.loaders" :error="store.errors" :overview="items.overview" :overviewAll="items.overview"/>
                </div>
            </div>
            <div v-if="!store.seriesPopular.length == 0">
                <div class="mt-4">
                    <h3 class="text-white">Ecco le serie piu' popolari!</h3>
                </div>
                <div class="d-flex flex-wrap">
                    <SeriesPopular v-for="(items, index) in store.seriesPopular" :key="items.id" :title="items.name" :titleAll="items.name" :showBadge="showBadge" :original_title="items.first_air_date" :language="items.original_language" :vote="items.vote_average" :image="items.poster_path" :loaders="store.loaders" :error="store.errors" :overview="items.overview" :overviewAll="items.overview"/>
                </div>
            </div>
        </div>

         
    </section>
</template>



<script>
import axios from 'axios';
import { store } from '../data/store';
import NavComponent from './NavComponent.vue';
import FilmSearchComponent from './FilmSearchComponent.vue';
import SeriesSearchComponent from './SeriesSearchComponent.vue';
import FilmsPopular from './FilmsPopular.vue';
import SeriesPopular from './SeriesPopular.vue';
import loader from './loader.vue';
export default{
    name: 'ContentComponent',
    components:{
        FilmSearchComponent,
        loader,
        NavComponent,
        SeriesSearchComponent,
        FilmsPopular,
        SeriesPopular,
    },
    data(){
        return{
            store,
            show: false,
            showOverView: false,
            showBadge: true,
        }
    },
    methods:{

        getFilms() {
            let url = store.baseUrl + store.endPoint.search + store.endPoint.movie;
            let option= {}
            let params= {}
    
            for(let key in store.queryString){
                if(store.queryString[key]){
                    params[key] = store.queryString[key];
                }
            }
            console.log(store.queryString)
            if(Object.keys(params).length > 0){
                option.params = params;
            }
    
            axios.get(url, option).then((res) => {
                store.searchFilms = res.data.results;
            }).catch((error) => {
                store.errors.movie = error.message;
            }).finally(()=>{
                store.loaders.movie = false;
                
            })
            },

            getSeries(){

            let url = store.baseUrl + store.endPoint.search + store.endPoint.tv;
            let option= {}
            let params= {}

            for(let key in store.queryString){
                if(store.queryString[key]){
                    params[key] = store.queryString[key]
                }
            }

            if(Object.keys(params).length > 0){
                option.params = params
            }

            axios.get(url, option).then((res) => {
                store.searchSeries = res.data.results
            }).catch((error) => {
                 store.errors.movie = error.message;
             }).finally(()=>{
                 store.loaders.movie = false;
                 
             })
            },

            getFilmsPopular(){
            let url = store.baseUrl + store.endPoint.movie +'/'+ store.endPoint.popular;
        
            let option= {}
            let params= {}

            for(let key in store.queryString){
                if(store.queryString[key]){
                    params[key] = store.queryString[key]
                }
            }

            if(Object.keys(params).length > 0){
                option.params = params
            }
        
            axios.get(url, option).then((res) => {
                store.filmsPopular = res.data.results;
            }).catch((error) => {
                 store.errors.movie = error.message;
             }).finally(()=>{
                 store.loaders.movie = false;
                 
             })
            },

            getSeriesPopular(){
            let url = store.baseUrl + store.endPoint.tv +'/'+ store.endPoint.popular;
            
            let option= {}
            let params= {}

            for(let key in store.queryString){
                if(store.queryString[key]){
                    params[key] = store.queryString[key]
                }
            }

            if(Object.keys(params).length > 0){
                option.params = params
            }
        

            axios.get(url, option).then((res) => {
                store.seriesPopular = res.data.results; 
            }).catch((error) => {
                    store.errors.movie = error.message;
                }).finally(()=>{
                    store.loaders.movie = false;   
                })
        },
        
            catchError(){
                if(store.queryString.query.trim() == ''){
                    this.show = true;
                    this.results = false;
                } else{
                    this.show = false;
                    this.results = true;
                }
            },
            getData(){
                store.loaders.movie = true;
                this.catchError(); 
                this.getFilms();
                this.getSeries()
                
            },
        
        
                
            },
            mounted(){
                this.getFilmsPopular()
                this.getSeriesPopular()
            }

    
     
     

}
 
</script>



<style lang="scss" scoped>
 
.content{
    width: 100%;
    height: calc(100vh - 160px);
    overflow-y: auto;
}
</style>