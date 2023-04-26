 
<template>
    <div>
        <div>
            <div>
                <div class="loader">
                    <p>loading...</p>  
                </div>
            </div>
        </div>
    </div>
     
 </template>
 
 
 
 <script>
 import { store } from '../data/store';
  
  
 export default{
     name: 'loader',
      
     data(){
         return{
            store, 
         }
     },
     methods:{


     },
 }
  
 </script>
 
 
 
  
 <style lang="scss" scoped>
 .loader{
    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000

 }
  
 </style>