import { reactive } from 'vue';
import {store} from '../data/store'

export const activity = reactive({
    showOverView: false,
    showBadge: true,
     

    flagCheck(setLanguage){
        if(store.flagPath.includes(setLanguage)){
            return setLanguage
        }else{
            return 'flag'
        }
    },
     
    openOverview(){
        
        this.showOverView = !this.showOverView;
    },
    titleSubstring(title){
        
        if(title.length > 30){
            if(screen.width <= 768){
                return title.substring(0, 40) + '...'
            } else if(screen.width <= 998){
                return title.substring(0, 30) + '...'
            } else{
                return title
            }
        } else {
            return title
        }
     
    
    
},
widthScreen(overview){
     
    if(overview.length > 40){
        if(screen.width <= 768){
            return overview.substring(0, 65) + '...';
        } else if(screen.width <= 998){
            return overview.substring(0, 40) + '...';
        } else if(screen.width <= 1200){
            return overview.substring(0, 200) + '...';
        } else if(screen.width <= 1400){
            return overview.substring(0, 400) + '...';
        } else{
            this.showBadge = false;
            return overview;
        }
    } else {
        this.showBadge = false;
        return overview;
    }  

}
})