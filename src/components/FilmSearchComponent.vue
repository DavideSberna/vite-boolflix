<template>
    <div>
        <div>
            <div class="pt-5">
                <h3>Ecco i tuoi film!</h3>
                <div class="row">
                    <div class="col-3" v-for="films in store.searchFilms">
                        <div class="card">
                            {{ films.original_title}}
                        </div>
                    </div>
                </div>
            </div>
            <div>

    
            </div>
        </div>
    </div>
     
 </template>
 
 
 
 <script>
 import { store } from '../data/store';
  
 export default{
     name: 'FilmSearchComponent',
     data(){
         return{
            store,
 
         }
     },
     mounted(){
        store.getFilms()
    }
 
 }
  
 </script>
 
 
 
  
 <style lang="scss" scoped>
  
 </style>