<template>
    <div class="w-screen h-screen flex flex-col items-center justify-start overflow-y-hidden">
        <div class="w-full h-[100px] bg-[#010204]">
            <Navigation/>
        </div>
        <div class="w-[1100px] md:h-[800px] grid-cols-1 md:flex  justify-center items-center min-w-0 max-w-full md:mt-0 mt-4 space-y-2">
          <div class="w-full h-1/2 md:w-1/2 md:h-full flex flex-col space-y-2 justify-center items-center pb-0 md:pb-24">
            <router-link to="/thishell">
              <img class="w-52 h-54 md:w-64 md:h-80 hover:border-2 hover:border-[#ff0069]" src="/src/assets/books/этотад4.png" @mouseleave="showThisHell = !showThisHell" @mouseenter="showThisHell = !showThisHell"/>
            </router-link>
            <h1 v-show="showThisHell" class="hidden md:flex text-white font-serif bg-black text-lg">Этот Ад - он как Рай, только по-адски особенный</h1>
            
              
            </div>
            <div class="w-full h-1/2 md:w-1/2 md:h-full flex flex-col space-y-2 justify-center items-center pb-0 md:pb-24">
              <img class="w-52 h-54 md:w-64 md:h-80 hover:border-2 hover:border-[#ff0069]" src="/src/assets/books/эванвошshadowviel.png"  @mouseleave="showShadowviel = !showShadowviel" @mouseenter="showShadowviel = !showShadowviel"/>
              <h1 v-show="showShadowviel" class="hidden md:flex text-white font-serif bg-black text-lg">Shadowviel Ltd.</h1>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from '/src/components/views/Navigation.vue'
export default {
  components: {
    Navigation
  },
  data() {
    return {
      showThisHell: false,
      showShadowviel: false
     
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
</style>