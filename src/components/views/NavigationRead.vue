<template>
      <div v-if="burgerMenuShown"  class="md:hidden z-50 w-full h-full grid grid-cols-1 bg-black absolute right-0 top-0 z-50 overflow-x-hidden">
        <div class="w-full h-full">
                <div class="w-full h-[80px] flex justify-end items-center">
                    <button class="w-[40px] h-[40px] rounded-3xl bg-white mr-6" @click="burgerMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#181818" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    </button>
                </div>
                <div class="w-full h-[400px] flex items-center justify-start min-w-0">
                        <nav class="w-full h-full mx-10 flex flex-col text-white text-xl text-white font-clash space-y-8 justify-center items-start">
                            <a class="flex w-full h-[50px]">
                                <div class="h-full w-1/2">
                                  <router-link to="/links" class="font-playfair hover:text-[#ff0069]">Книги</router-link>
                                </div>
                                <div class="w-1/2 h-full flex justify-end">
                                <router-link to="/links">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                  </svg>
                                </router-link>
                                </div>
                            </a>
                            <a class="flex w-full h-[50px]">
                                <div class="h-full w-1/2">
                                  <router-link to="/read" class="font-playfair hover:text-[#ff0069]">Начать читать</router-link>
                                </div>
                                <div class="w-1/2 h-full flex justify-end">
                                <router-link to="/read">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                  </svg>
                                </router-link>
                                </div>
                            </a>
                            <a class="flex w-full h-[50px]">
                                <div class="h-full w-1/2">
                                  <router-link to="/author" class="font-playfair hover:text-[#ff0069]">Об авторе</router-link>
                                </div>
                                <div class="w-1/2 h-full flex justify-end">
                                <router-link to="/author">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                  </svg>
                                </router-link>
                                </div>
                            </a>

                        </nav>
                
                </div>
                
        </div>
    </div> 
    <div class="w-full h-full flex justify-center">
        <nav class="w-[1280px] h-full flex text-white justify-center font-playfair text-xs md:text-base md:mx-10">
            <div class="w-1/4 h-full flex items-center md:justify-start justify-center">
                <router-link to="/" class="pl-6 md:pl-0 hover:text-[#ff0069]">EVAN VOSH PAGE</router-link>
            </div>
            <div class="w-3/4 h-full flex justify-center items-center space-x-14">
                <router-link to="/links" class="hidden md:flex font-playfair hover:text-[#ff0069]">Книги</router-link>
                <router-link to="/read" class="hidden md:flex font-playfair hover:text-[#ff0069]">Начать читать</router-link>
                <router-link to="/author" class="hidden md:flex font-playfair hover:text-[#ff0069]">Об авторе</router-link>
            </div>
            <div class="w-1/4 h-full flex justify-center items-center">
                <button class="w-full h-full flex md:hidden flex justify-center items-center" @click="burgerMenu">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    class="w-8 h-8"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                    </svg>
                </button>
                <div class="hidden md:flex justify-center items-center">
                    <div class="flex flex-col">
                    <button class="hover:text-[#ff0069]" @click="playMusic">Воспроизвести</button>
                     <button class="hover:text-[#ff0069]" @click="pauseMusic">Пауза</button>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <label class="text-white" for="volumeControl">Громкость:</label>
                        <div class="bg-[#ff0069] rounded-xl flex justify-center items-center">
                        <input class="w-full h-full" type="range" min="0" max="1" v-model="volume" step="0.01"@input="setVolume">
                        </div>
                        <audio class="hidden" ref="audioPlayer" controls>
                            <source src="/src/assets/music/FreeGamePianoMusicPack.mp3" type="audio/mp3">    
                        </audio>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>


<script>
export default {
    data() {
    return {
      volume: 0.5,
      burgerMenuShown: false,
    };
  },
  methods: {
    setVolume() {
      this.$refs.audioPlayer.volume = this.volume;
    },
    playMusic() {
      this.$refs.audioPlayer.play();
    },
    pauseMusic() {
      this.$refs.audioPlayer.pause();
    },
    burgerMenu(){
        this.burgerMenuShown = !this.burgerMenuShown;
        console.log(this.burgerMenuShown);
      }
  }
}

</script>
<style>
</style>