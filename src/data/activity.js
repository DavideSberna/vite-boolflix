import { reactive } from 'vue';
import axios from 'axios';
import {store} from '../data/store'

export const activity = reactive({

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
            store.seriesPopular = res.data.results
            console.log(store.seriesPopular)
            
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
            store.filmsPopular = res.data.results
           
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
        })



    },
    getFilms() {
        let url = store.baseUrl + store.endPoint.search + store.endPoint.movie;
        let option= {}
        let params= {}

        for(let key in store.queryString){
            if(store.queryString[key]){
                params[key] = store.queryString[key]
            }
        }
        console.log(store.queryString)
        if(Object.keys(params).length > 0){
            option.params = params
        }

        axios.get(url, option).then((res) => {
            store.searchFilms = res.data.results 
        });
            

        },
    getData(){
        store.show = true
        this.getFilms();
        this.getSeries()
    }
})