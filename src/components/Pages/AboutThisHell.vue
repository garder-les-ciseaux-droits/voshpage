<template>
    <div class="w-screen h-screen flex flex-col items-center justify-start">
        <div class="w-full h-[100px] bg-[#010204]">
            <NavigationHell/>
        </div>
        <div class="w-[1280px] h-auto bg-[#010204] flex justify-center min-w-0 max-w-full mx-10">
            <div class="w-[1100px] h-full text-white font-engry flex flex-col items-start space-y-10 md:space-y-24 mx-10 min-w-0 max-w-full">
                <img src="/src/assets/thishellassets/forevim.png"/>
                <div class="text-xs md:text-lg">
                    <h1>Замок Вимиур</h1>
                    <h2>Вид с южной стороны</h2>
                </div>
                <div class="font-serif text-xs md:text-base">
                    <p>Основная локация "Этот Ад - он как Рай, только по-адски особенный", в которой происходят все ключевые события. По легендам, распространившимся по деревне Рутория, замок Вимиур населял древний род вампиров. В сотнях комнат и десятках коридоров скрываются ответы, связанные с таинственными похищениями людей. <br><br>Самое страшное - потеряться в его стенах и напороться на обитателей.</p>
                </div>
                <div class="w-full h-auto flex flex-col justify-center items-center text-xs md:text-lg space-y-4 min-w-0 max-w-full">
                    <h1>Герои книги</h1>
                    <div class="w-full h-auto flex justify-center">
                        <Carousel :items-to-show="2.5" :wrap-around="true">
                        <Slide v-for="character in characters" :key="character.id">
                        <div class="carousel__item flex flex-col w-full h-full justify-center items-center">
                            <img class="relative" :src="character.image"/>
                            <div class="w-full h-full z-50 absolute flex items-end">
                                <div class="w-full h-1/2 flex justify-center items-center">
                                    <div class="w-full h-auto bg-black/50">
                                        <span class="text-white font-engry">{{character.name}}</span>
                                    </div>
                                
                                </div>
                            
                            </div>
                            
                        </div>
                        </Slide>

                        <template #addons>
                        <Navigation />
                        </template>
                    </Carousel>
                    </div>
                    
                </div>
                <div class="w-full h-[50px]">

                </div>

            </div>
        </div>
        <div class="w-[1280px] h-auto bg-[#010204] flex flex-col items-center justify-center space-y-10 min-w-0 max-w-full mx-10">
            <h1 class="font-engry text-white text-xs md:text-lg">Иллюстрации</h1>
            <div class="w-[1100px] h-auto grid grid-cols-2 gap-4 justify-center items-center min-w-0 max-w-full mx-10">
                <div class="w-full h-full" v-for="image in illustrations" :key="image.id">
                        <img class="w-full h-full" :src="image"/>
                </div>
            </div>
            <div class="w-full h-[100px] md:h-[150px] justify-center flex">
                <h1 class="text-white font-serif italic text-xs">Количество будет пополняться*</h1>
            </div>
        </div>
       
        
    </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import NavigationHell from '/src/components/views/Navigation.vue'
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  components: {
    NavigationHell,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data() {
    return {
        characters: [{name: "Ашаир Ва-Иута", image: '/src/assets/Images/characters/ashairweb.png'}, {name: "Кайри Мирай", image: "/src/assets/Images/characters/miraiweb.png"}, {name: "Ноктюрна фон Бернатте", image: "/src/assets/Images/characters/nocturnaweb.png"}, {name: "Люциан фон Бернатте", image: "/src/assets/Images/characters/lucianweb2.png"}, {name: "Корвин Корвиус", image: "/src/assets/Images/characters/korvinweb.png"}, {name: "Шелор", image: "/src/assets/Images/characters/Shelorweb.png"}],
        illustrations: ["/src/assets/Images/characters/illistrations/ashairchasing.png", "/src/assets/Images/characters/illistrations/AshairOnbed.png", "/src/assets/Images/characters/illistrations/AshairPortrait.png", "/src/assets/Images/characters/illistrations/nocturnaatchurch.png"],
        settings: {
      itemsToShow: 2,
      snapAlign: 'center',
    },

    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    }
     
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

<style scoped>
.carousel__slide {
  padding: 10px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

</style>