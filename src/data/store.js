import { reactive } from 'vue';
import axios from 'axios';


export const store = reactive({
    searchFilms:[],
    searchSeries:[],
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
    
    getSeries(){
        let url = this.baseUrl + this.endPoint.search + this.endPoint.tv;
        let option= {}
        let params= {}

        for(let key in this.queryString){
            if(this.queryString[key]){
                params[key] = this.queryString[key]
            }
        }

        if(Object.keys(params).length > 0){
            option.params = params
        }

        axios.get(url, option).then((res) => {
            this.searchSeries = res.data.results
        })



    },
    getFilms() {
        let url = this.baseUrl + this.endPoint.search + this.endPoint.movie;
        let option= {}
        let params= {}

        for(let key in this.queryString){
            if(this.queryString[key]){
                params[key] = this.queryString[key]
            }
        }
        console.log(this.queryString)
        if(Object.keys(params).length > 0){
            option.params = params
        }

        axios.get(url, option).then((res) => {
            this.searchFilms = res.data.results 
        });
            

        },
    getData(){
        this.getFilms();
        this.getSeries()
    }

    
    
})



// https://api.themoviedb.org/3/search/movie?api_key=762cdc479ddd3e209057937a020a8609&language=en&query=1