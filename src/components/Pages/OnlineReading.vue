<template>
    <div class="w-screen h-screen overflow-y-hidden">
        <div class="w-full h-[100px] bg-[#010204]">
            <Navigation/>
        </div>
        <div class="w-full h-full overflow-y-auto flex justify-center">
          <div class="w-[1180px] h-fit text-white bg-[#010204] text-left flex justify-center min-w-0 mx-0 md:mx-10">
            <div v-show="index === currentChapter" class="w-[1000px] h-full pt-10 pb-24 px-4 space-y-4 flex flex-col items-center" v-for="(chapter,index) in bookText.thishellis" :key="chapter.id">
              <h1 v-show="index === 0" class="font-bold text-2xl">Этот Ад - он как Рай, только по-адски особенный.</h1>
              <h2 class="font-semibold">Глава {{ index + 1 }}</h2>
              <div  class="w-full h-full flex flex-col items-start space-y-4 ">
                <p v-for="paragraph in chapter.text" :key="paragraph.id" class="text-white">{{ paragraph }}</p>
              </div>
              <h3 v-show="index + 1 === bookText.thishellis.length" class="text-[#ff0069] hover:text-white">Следующая глава выйдет в понедельник. Спасибо за прочтение!</h3>
              <div class="w-full h-[100px] flex items-end">
                <div class="w-1/2 h-full flex justify-start">
                  <button class="hover:text-[#ff0069]" v-show="index >= 1" @click="currentChapter--">Предыдущая Глава</button>
                </div>
                <div class="w-1/2 h-full flex justify-end">
                  <button class="hover:text-[#ff0069]" v-show="bookText.thishellis.length != 1 && index + 1 !== bookText.thishellis.length" @click="currentChapter++">Следующая Глава</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import bookText from '/src/assets/jsonData/bookText.json'
import Navigation from '/src/components/views/NavigationRead.vue'
export default {
  components: {
    Navigation
  },
  data() {
    return {
      bookText: bookText,
      currentChapter: 0,
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
body {
 background-image: url("/src/assets/Images/dalle.png");
 background-repeat: no-repeat, repeat;
 background-position: center;
 background-size: cover;  
}
</style>