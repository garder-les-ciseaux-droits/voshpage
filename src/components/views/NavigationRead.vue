<template>
    <div class="w-full h-full flex justify-center">
        <nav class="w-[1280px] h-full flex text-white justify-center font-playfair text-xs md:text-base md:mx-10">
            <div class="w-1/4 h-full flex items-center md:justify-start justify-center">
                <router-link to="/" class="pl-14 md:pl-0 hover:text-[#ff0069]">EVAN VOSH PAGE</router-link>
            </div>
            <div class="w-3/4 h-full flex justify-center items-center space-x-14">
                <router-link to="/links" class="hidden md:flex font-playfair hover:text-[#ff0069]">Ссылки</router-link>
                <router-link to="/read" class="hidden md:flex font-playfair hover:text-[#ff0069]">Начать читать</router-link>
                <router-link to="/author" class="hidden md:flex font-playfair hover:text-[#ff0069]">Об авторе</router-link>
                
            </div>
            <div class="w-1/4 h-full flex justify-center items-center">
                <button class="w-full h-full flex md:hidden flex justify-center items-center">
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
                            <source src="/src/assets/music/music.mp3" type="audio/mp3">    
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
      volume: 0.5 // Устанавливаем начальный уровень громкости на 50%
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
  }
}
</script>
<style>
</style>