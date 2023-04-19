import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    searchFilms:[],
    baseUrl: 'https://api.themoviedb.org/3',
    endPoint: '/search/movie?api_key=762cdc479ddd3e209057937a020a8609&language=en&query=1',
    search:{
        film: ''
    },
     getFilms() {
        let url = this.baseUrl + this.endPoint;
        axios.get(url).then((res) => {
            // console.log(res.data.results)
            this.searchFilms = res.data.results
            console.log(this.searchFilms)
      });
          
        
      },
    
})


 




// https://api.themoviedb.org/3/search/movie?api_key=762cdc479ddd3e209057937a020a8609&language=en&query=1