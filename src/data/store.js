import { reactive } from 'vue';
 


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
    errors:{
        movie: '',
        tv: '',
    },
    loaders:{
        movie: false,
        tv: false,
    }
 
})
