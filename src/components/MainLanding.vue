<template>
    <div class="w-screen h-screen justify-center overflow-y-auto overflow-x-hidden bg-black/50">
        <div class="w-full h-[100px] bg-[#010204]">
            <Navigation/>
        </div>
        <div class="w-full h-[1500px] min-w-0 min-h-0">
          <WelcomeImage/>
        </div>
        

    </div>
  
  </template>
  
<script>
import WelcomeImage from '/src/components/WelcomeImage.vue'
import Navigation from '/src/components/views/Navigation.vue'

  export default {
    components: {
      Navigation,
      WelcomeImage,

    },
    data() {
      return {
       
      }
    },
    methods: {
  
    },
    mounted() {
    },
    computed: {
  
    }
  
  }  
  
  </script>
  
  <style>
  ::-webkit-scrollbar {
    width: 0px;
  
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(241, 241, 241, 0);
  }
  
  
  
  
  ::-webkit-scrollbar-thumb:hover {
    background: #020202;
    border-radius: 6px;
  }

body {
 background-image: url("/src/assets/Images/dalle.png");
 background-repeat: no-repeat, repeat;
 background-position: center;
 background-size: cover;  
}
  </style>
  