<template>
    <div class="col-12 col-sm-6 col-md-4 p-3 m-0 position-relative">
        <div class="hover-card">
            <div class="card overflow-hidden border border-0 shadow-lg">
                <div class="poster_path cardImage">
                    <img :src="(image) ? store.imagePath + store.imgSize + image : '/images/not_available.png'" :alt="title">
                </div>
                <div class="">
                    <div class="cardOverview d-none pt-3 ps-2 pe-2">
                        <div class="mt-2 h-100" :class="activity.showOverView ? 'overflow': ''" v-if="!activity.overview">
                            <div>
                                <div class="fw-bold" v-if="!showOverView">
                                    <h4>{{activity.titleSubstring(title)}}</h4>
                                </div>
                                <div class="fw-bold" v-else>
                                    <h4>{{titleAll}}</h4>
                                </div>
                                <div>
                                    <div>
                                        <div class="d-flex align-items-center">
                                            <div>
                                                <p class="p-0 m-0">{{ original_title}}</p>
                                            </div>
                                            <div class="flag-img ms-2">
                                                <img class="d-block" :src="'/images/' + activity.flagCheck(language) + '.png'" :alt="language">
                                            </div>
                                        </div>
                                        <div class="pt-2"> 
                                            <font-awesome-icon icon="fa-solid fa-star" v-for="(star, index) in 5" :key="index" :class="checkStars(star) ? 'text-secondary' : 'text-warning'"/>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div>
                               <h5>Overview</h5>
                            </div>
                            <div>
                                <p class="p-0 m-0" v-if="!activity.showOverView">{{ activity.widthScreen(overview) }}</p>
                                <p class="p-0 m-0 pb-5" v-else>{{ overviewAll }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="showBadge" class="fa-chevron d-flex justify-content-center d-none">
                <span class="badge rounded-pill text-danger" @click="activity.openOverview"><font-awesome-icon icon="fa-solid fa-chevron-down"/></span>
            </div>
        </div>
    </div>
</template>



<script>
import { store } from '../data/store';
import { activity } from '../data/activity';
export default{
 name: 'SeriesPopular',
 props:[
    'title', 'original_title','language','vote','image', 'loaders', 'error', 'overview', 'overviewAll', 'showBadge','titleAll'
 ],
 
 data(){
     return{
        store,
        activity,
        starClass: '',
        showOverView: false,
       
     }
 },
 methods:{
    
    checkStars(star){
        this.starClass = Math.round(this.vote / 2)
        if(this.starClass < star){
            return true;
        } else{
            return false;
        }
    }, 
 },
 computed:{
    starRate(){
        return Math.round(this.vote / 2);
    },
     
    
 }
 
  

}

</script>




<style lang="scss" scoped>
.hover-card{
&:hover{
    .cardImage{
        opacity: 0;
         
    }
    .cardOverview{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: block !important;
    }
     
     
    .overflow{
        overflow: auto;
        scrollbar-color: unset;
        scrollbar-width: thin;
         
    }
    .fa-chevron{
       display: block !important;
}
    
}
}



.fa-chevron{
    position: absolute;
    bottom: 25px;
    left: calc(50% - 13px);
}

.poster_path{

 img{
    width: 100%; 
 }
}



.flag-img{
width: 30px;
img{
    width: 100%;
}
}



</style>

     

 