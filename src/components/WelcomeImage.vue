<template>
    <div class="w-full flex flex-col justify-start items-center">
        <div class="relative w-full h-fit flex justify-center items-start min-w-0">
            <img class="relative flex w-full h-full bg-gradient-to-r bg-from-black bg-to-transparent" src="/src/assets/Images/websiteimage.png"/>
            <div class="w-full h-full text-black absolute flex justify-start items-start pl-10 pt-10 text-2xl md:text-4xl font-engry">
                <div class="w-[500px] flex-col flex space-y-0 md:space-y-2">
                    <p>Этот Ад - он</p>
                    <div class="flex space-x-2">
                        <p>как</p>
                        <p class="text-[#ff0069]">Рай</p>
                    </div>
                    <div class="bg-white md:bg-transparent h-[30px] w-[150px] flex items-center">
                        <p class="drop-shadow-[0_7px_5px_rgba(255,255,255,1)]"> только</p> 
                    </div>
                    
                    <div class="flex items-center">
                        <p class="text-[#ff0069]">по-</p>
                        <p class="text-white bg-[#1f1f1f] w-[160px] md:w-[190px] h-[40px] flex items-center">адски</p>
                    </div>
                    
                    <p class="drop-shadow-[0_1px_4px_rgba(255,255,255,1)]">особенный</p>
                    <div class="z-50 bg-black text-white border-2 border-black justify-center w-[140px] md:w-[200px] h-[30px] flex items-center">
                        <p class="text-base md:text-xl">Эван Вош</p>
                    </div>
                    <div class="pt-4 flex md:hidden text-base font-sans w-[180px] h-[60px] z-50">
                        <button class="bg-white w-full h-full rounded-3xl drop-shadow-xl hover:bg-[#121212] hover:text-white">Читать Онлайн</button>
                    </div>
                </div>
                
            </div>
            <div class="hidden w-full h-full absolute md:flex justify-end items-start pt-10 pr-10">
                <div class="w-[350px] flex flex-col space-y-4 items-end text-left">
                    <div class="flex w-full drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]">
                        <p>Потом она сказала то, чего я и представить бы не решился, будь у меня бесконечное время на подсчёт всевозможных вариантов:
                            "Мне требовалось сменить нижнее бельё, потому что я... Перевозбудилась."</p>
                    </div>
                    <div class="text-base w-[180px] h-[50px] z-50">
                        <router-link to="/read">
                            <button class="bg-white w-full h-full rounded-3xl drop-shadow-xl hover:bg-[#121212] hover:text-white">Читать Онлайн</button>
                        </router-link>
                       
                    </div>
                </div>
            </div>
            <div class="w-full h-full absolute flex justify-end items-end pb-10">
                <p class="font-engry text-4xl pr-10 text-[#ff0069]">16+</p>
            </div>
            

        </div>
        <div class="h-[400px] bg-red-100 w-full md:h-[300px] w-full">
            <BasicAboutMe/>
        </div> 
        <div class="w-full h-[200px] flex justify-center items-center">
            <Support/>
        </div>
        <div class="w-full h-[550px] md:h-[600px] bg-black flex justify-center">
            <AboutLastBook/>
        </div>
        <div class="w-full h-[200px] flex items-center bg-black">
            <Footer/>
        </div>

       

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