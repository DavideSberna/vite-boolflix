<template>
    <div>
        <div>
            <h3>Ecco le tue serie!</h3>
                <div class="row align-items-stretch">
                    <div class="col-12 col-sm-6 col-md-4 p-3 m-0" v-for="series in store.searchSeries">
                        <div class="card h-100 d-flex flex-column justify-content-between">
                            <div class="poster_path">
                                <img :src="store.imagePath + store.imgSize + series.poster_path" alt="">
                            </div>
                            <div>
                                <div>
                                    <div class="min-h">
                                        <h4>{{ series.name}}</h4>
                                        <p>{{ series.first_air_date}}</p>
                                    </div>
                                    <div>
                                        <div>
                                            
                                        </div>
                                        <div>
                                            <div class="flag-img">
                                                <img :src="'/images/' + flagCheck(series.original_language)  + '.png'" alt="">
                                            </div>
                                            <div>
                                                <ul class="d-flex align-items-center list-item-group">
                                                    <li v-if="series.vote_average > 0" class="list-group-item" v-for="star in crateStars(series.vote_average)"><font-awesome-icon icon="fa-solid fa-star" /></li> 
                                                    <li v-else class="list-group-item">{{crateStars(series.vote_average)}}</li>
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
</template>



<script>
import { store } from '../data/store';
export default{
    name: 'SeriesSearchComponent',
    data(){
        return{
            store,

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
     mounted(){
        store.getFilms()
         
    }

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