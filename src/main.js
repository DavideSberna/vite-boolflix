import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/general.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faStar)
 
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
