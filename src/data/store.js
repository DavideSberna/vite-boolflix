import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    searchFilms:[],
    baseUrl: 'https://api.themoviedb.org/3',
    endPointAll: '/search/movie?api_key=762cdc479ddd3e209057937a020a8609&language=en&query=1',
    slash: '/',
        queryString:{
            api_key: '762cdc479ddd3e209057937a020a8609',
            query: '',
        },
        endPoint:{
            movie: 'movie',
            search: 'search',
            
        },
    search:{
        film: ''
    },
    getFilms() {

        let url = this.baseUrl + this.slash + this.endPoint.search + this.slash + this.endPoint.movie;

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
    
})



// https://api.themoviedb.org/3/search/movie?api_key=762cdc479ddd3e209057937a020a8609&language=en&query=1