<template>
    <div class="w-full flex flex-col justify-start items-center min-w-0">
        <div class="relative w-full h-fit flex justify-center items-start max-w-full min-w-0">
            <img class="flex w-full h-full min-w-[700px] min-h-[400px] max-w-full" src="/src/assets/Images/websiteimage.png"/>
            <div class="w-full h-full text-black absolute flex justify-start items-start pl-10 pt-10 font-engry min-w-0 max-w-full">
                <div class="w-[200px] md:w-[320px] md:h-[260px] h-[220px] flex-col flex space-y-0 md:space-y-2 min-w-0 min-h-0 max-w-full">
                    <p class="text-base md:text-4xl">Этот Ад - он</p>
                    <div class="flex space-x-2 text-base md:text-4xl">
                        <p>как</p>
                        <p class="text-[#ff0069]">Рай</p>
                    </div>
                    <div class="bg-white md:bg-transparent h-[30px] w-[150px] flex items-center text-base md:text-4xl">
                        <p class="drop-shadow-[0_7px_5px_rgba(255,255,255,1)]"> только</p> 
                    </div>
                    
                    <div class="flex items-center text-base md:text-4xl">
                        <p class="text-[#ff0069]">по-</p>
                        <p class="text-white bg-[#1f1f1f] w-auto px-2 md:px-0 md:w-[190px] h-auto flex items-center">адски</p>
                    </div>
                    
                    <p class="drop-shadow-[0_1px_4px_rgba(255,255,255,1)] text-base md:text-4xl">особенный</p>
                    <div class="bg-black text-white border-2 border-black justify-center w-[140px] md:w-[200px] h-[30px] flex items-center text-xl md:text-4xl">
                        <p class="text-base md:text-xl">Эван Вош</p>
                    </div>
                    <div class="flex md:hidden font-sans w-[120px] h-[60px] text-xs flex items-center justify-start z-50">
                        <router-link to="/read">
                            <button class="bg-white  w-[120px] h-[40px] rounded-3xl drop-shadow-xl hover:bg-[#121212] hover:text-white">Читать Онлайн</button>
                        </router-link>
                        
                    </div>
                </div>
                
            </div>
            <div class="hidden w-full h-full absolute md:flex justify-end items-start pt-10 pr-10">
                <div class="w-[350px] flex flex-col space-y-4 items-end text-left z-50">
                    <div class="flex w-full drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]">
                        <p>Она закрыла глаза и подняла подбородок вверх. Из её маленького рта вырвалось то, чего я и представить бы не решился, будь у меня даже бесконечное время на подсчёт вариантов:
                            <br>"Мне требовалось сменить нижнее бельё, потому что я... Перевозбудилась."
                        </p>
                    </div>
                    <div class="text-base w-[180px] h-[50px]">
                        <router-link to="/read">
                            <button class="bg-white w-full h-full rounded-3xl drop-shadow-xl hover:bg-[#121212] hover:text-white">Читать Онлайн</button>
                        </router-link>
                       
                    </div>
                </div>
            </div>
            <div class="w-full h-full absolute flex justify-end items-end pb-10">
                <p class="font-engry text-xl md:text-4xl pr-10 text-[#ff0069]">16+</p>
            </div>
            

        </div>
        <div class="w-full flex min-w-0 h-auto w-full">
            <BasicAboutMe/>
        </div> 
        <div class="w-full h-[200px] flex justify-center items-center">
            <Support/>
        </div>
        <div class="w-full h-[650px] md:h-[790px] bg-black items-center flex justify-center min-w-0 max-w-full">
            <AboutLastBook/>
        </div>
        <!-- <div class="w-full h-[200px] flex items-center bg-black">
            <Footer/>
        </div> -->

       

    </div>
</template>

<script>
import BasicAboutMe from '/src/components/views/BasicAboutMe.vue'
import Support from '/src/components/Support.vue'
import AboutLastBook from '/src/components/AboutLastBook.vue'
import Footer from '/src/components/Footer.vue'
import Navigation from '/src/components/views/Navigation.vue'
export default {
    components: {
        Support,
      BasicAboutMe,
      AboutLastBook,
      Footer,
      Navigation
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
</style>