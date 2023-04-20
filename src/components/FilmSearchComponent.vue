<template>
    <div>
        <div>
            <div class="pt-5">
                <h3>Ecco i tuoi film!</h3>
                <div class="row align-items-stretch">
                    <div class="col-12 col-sm-6 col-md-4 p-3 m-0" v-for="films in store.searchFilms">
                        <div class="card h-100 d-flex flex-column justify-content-between">
                            <div class="poster_path">
                                <img :src="store.imagePath + store.imgSize + films.poster_path" alt="">
                            </div>
                            <div>
                                <div>
                                    <div class="min-h">
                                        <h4>{{ films.title}}</h4>
                                        <p>{{ films.release_date}}</p>
                                    </div>
                                    <div>
                                        <div>
                                            
                                        </div>
                                        <div>
                                            <div class="flag-img">
                                                <img :src="'/images/' + flagCheck(films.original_language)  + '.png'" alt="">
                                            </div>
                                            <div>
                                                <ul class="d-flex align-items-center list-item-group">
                                                    <li v-if="films.vote_average > 0" class="list-group-item" v-for="star in crateStars(films.vote_average)"><font-awesome-icon icon="fa-solid fa-star" /></li> 
                                                    <li v-else class="list-group-item">{{crateStars(films.vote_average)}}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     
 </template>
 
 
 
 <script>
 import { store } from '../data/store';
 import { activity } from '../data/activity';
  
 export default{
     name: 'FilmSearchComponent',
     data(){
         return{
            store,
            activity,
            
 
         }
     },
     methods:{
        crateStars(rate){
             
            let stars = rate / 2;
            if(stars > 0){
                return Math.floor(stars)
            } else {
                return 'Nessuna valutazione'
            }
        },
        flagCheck(path){
            if(store.flagPath.includes(path)){
                return path
            }else{
                return 'flag'
            }
        }

     },
      
 
 }
  
 </script>
 
 
 
  
 <style lang="scss" scoped>

 .poster_path{
    // min-height: 362px;
     img{
        width: 100%; 
     }
 }

 .min-h{
    min-height: 120px;
 }

 .flag-img{
    width: 40px;
    img{
        width: 100%;
    }
 }
  
 </style>