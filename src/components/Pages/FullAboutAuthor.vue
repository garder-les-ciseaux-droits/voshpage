<template>
    <div class="w-screen h-screen flex flex-col items-center overflow-x-hidden">
        <div class="w-full h-[100px] bg-black">
            <Navigation/>
            <img class="h-[10px] w-full" src="/src/assets/Images/Divider.png"/>
        </div>
        <div class="w-full h-[1350px] bg-white  flex flex-col items-center space-y-10 min-w-0 max-w-full overflow-y-auto pb-10">
          <div class="w-[1100px] h-[150px] bg-gray-600 flex rounded-3xl justify-center md:justify-start items-center px-6 mt-0 md:mt-10 space-x-4 min-w-0 max-w-full">
            <div class="w-[80px] h-full flex items-center justify-center">
              <img class="w-14 h-14 md:w-20 md:h-20 rounded-3xl" src="/src/assets/Images/2im.png"/>
            </div>
            <div class="w-[400px] md:w-[1000px] h-full flex flex-col items-start justify-center space-y-2 min-w-0 max-w-full">
              <p class="text-white font-serif text-xs md:text-base">"Не нужно всегда искать смысл. Иногда следует расслабиться и почувствовать себя на месте героя, хотя и глупого, но в моментах более счастливого." </p>
              <p class="text-white font-serif italic md:text-base text-xs">Эван Вош</p>
            </div>
          </div>
          <div class="w-[1100px] h-[700px] md:h-[700px] flex justify-start items-center space-x-4 min-w-0 max-w-full">
            <div class="w-[80px] h-full flex">
            </div>
            <div class="w-[1000px] h-full flex flex-col items-start text-black space-y-6 px-10 md:px-0">
              <h1 class="font-serif font-semibold text-base md:text-xl">Я просто создаю мир</h1>
              <p class="font-serif text-xs md:text-base">Писать - это, конечно, классно. Тем не менее, я скорее люблю создавать книгу, чем писать её. Звучит странно, но это так. Продумывать сюжет, арки, главы, сцены и героев - вот, что приносит мне большее удовольствие. Жанр лёгких романов, или ранобэ, меня привлёк своей простотой, но чем больше я читал, тем лучше осознавал, что дело не в способе строить предложения, количества диалогов и деталей. Этот жанр позволяет творить и делать это так, как сам считаешь нужным. Мы сами определяем границы дозволенного.</p>
              <h2 class="font-serif font-semibold text-base md:text-xl">Миссия</h2>
              <p class="font-serif  text-xs md:text-base">Думаю, что подарить миру пару историй, которые захочется прожить моим читателям. Прожить, почувствовать себя лучше, а затем вернуться в реальность, но с мотивацией идти достигать свои и цели и не отчаиваться в случае неудачи.</p>
              <h3 class="font-serif font-semibold text-base md:text-xl">Мои работы</h3>
              <p class="font-serif  text-xs md:text-base">Начинал я участия в конкурсе Original English Light Novels от Jnovels в сотрудничестве с KADOKAWA. Тогда я за 2 месяца написал первую книгу под названием "My dress for you". К сожалению, мои финальные корректировки в спешке испортили книгу, но я планирую её дописать и отправить в следующий раз снова. <a class="text-[#ff0069] flex items-center" href="https://raw.githubusercontent.com/garder-les-ciseaux-droits/echidna/main/uploads/Mydressforyou.Evan%20Vosh.pdf" download="MyDressForYou_EvanVosh.pdf">Скачать и почитать можно здесь.</a></p>
              <p class="font-serif  text-xs md:text-base">По мимо этого у меня имеется незаконченная (работа в процессе) книга в жанре городской мистики под названием "Shadowviel Ltd.", повествующей о проклятой семье Шэдоуфиль, вернувшейся в родные края.</p>
              <p class="font-serif  text-xs md:text-base">Ну и "Этот Ад - он как Рай, только по-адски особенный". Её вы можете найти на литрес в формате бесплатных черновиков. <a href="https://www.litres.ru/book/evan-vosh/etot-ad-on-kak-ray-tolko-po-adski-osobennyy-70640110/" class="text-[#ff0069]">Ссылка на литрес.</a></p>
            </div>
          </div>

        </div>
    </div>
</template>

<script>
import Navigation from '/src/components/views/NavigationAuthor.vue'

export default {
  components: {
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
body {
 background-image: url("/src/assets/Images/dalle.png");
 background-repeat: repeat;
 background-position: center;
 background-size: cover;  
}
</style>