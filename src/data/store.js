import { reactive } from 'vue';
import axios from 'axios';


export const store = reactive({
    searchFilms:[],
    searchSeries:[],
    filmsPopular:[],
    seriesPopular:[],
    show: false,
    imagePath: 'https://image.tmdb.org/t/p/',
    imgSize: 'w342',
    baseUrl: 'https://api.themoviedb.org/3/',
        queryString:{
            api_key: '762cdc479ddd3e209057937a020a8609',
            query: '',
        },
        endPoint:{
            movie: 'movie',
            tv: 'tv',
            search: 'search/',
            popular: 'popular',
            
        },
    search:{
        film: ''
    },
    flagPath:[
        'it',
        'en',
        'fr',
        'ru',
        'ja',
    ],
    // getSeriesPopular(){
    //     let url = this.baseUrl + this.endPoint.tv +'/'+ this.endPoint.popular;
        
    //     let option= {}
    //     let params= {}

    //     for(let key in this.queryString){
    //         if(this.queryString[key]){
    //             params[key] = this.queryString[key]
    //         }
    //     }

    //     if(Object.keys(params).length > 0){
    //         option.params = params
    //     }
       

    //     axios.get(url, option).then((res) => {
    //         this.seriesPopular = res.data.results
    //         console.log(this.seriesPopular)
            
    //     })



    // },
    // getFilmsPopular(){
    //     let url = this.baseUrl + this.endPoint.movie +'/'+ this.endPoint.popular;
       
    //     let option= {}
    //     let params= {}

    //     for(let key in this.queryString){
    //         if(this.queryString[key]){
    //             params[key] = this.queryString[key]
    //         }
    //     }

    //     if(Object.keys(params).length > 0){
    //         option.params = params
    //     }
       

    //     axios.get(url, option).then((res) => {
    //         this.filmsPopular = res.data.results
           
    //     })



    // },
    // getSeries(){

    //     let url = this.baseUrl + this.endPoint.search + this.endPoint.tv;
    //     let option= {}
    //     let params= {}

    //     for(let key in this.queryString){
    //         if(this.queryString[key]){
    //             params[key] = this.queryString[key]
    //         }
    //     }

    //     if(Object.keys(params).length > 0){
    //         option.params = params
    //     }

    //     axios.get(url, option).then((res) => {
    //         this.searchSeries = res.data.results
    //     })



    // },
    // getFilms() {
    //     let url = this.baseUrl + this.endPoint.search + this.endPoint.movie;
    //     let option= {}
    //     let params= {}

    //     for(let key in this.queryString){
    //         if(this.queryString[key]){
    //             params[key] = this.queryString[key]
    //         }
    //     }
    //     console.log(this.queryString)
    //     if(Object.keys(params).length > 0){
    //         option.params = params
    //     }

    //     axios.get(url, option).then((res) => {
    //         this.searchFilms = res.data.results 
    //     });
            

    //     },
    // getData(){
    //     this.show = true
    //     this.getFilms();
    //     this.getSeries()
    // }

    
    
})
