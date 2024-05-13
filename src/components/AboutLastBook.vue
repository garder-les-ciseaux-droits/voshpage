<template>
    <div class="w-full h-full flex flex-col justify-center items-center mx-10 min-w-0">
        <div class="w-full md:w-[1280px] text-xs md:text-lg h-[50px] mt-4 flex font-engry text-white justify-center items-center">
            <div class="w-full h-full grid-cols-1 flex justify-center items-center text-center">
                <span>Этот Ад</span>
                <span> - он как</span>
                <span class="text-[#ff0069] mr-1 ml-1"> Рай, </span>
                <span> только </span>
                <span class="text-[#ff0069] ml-1">по-</span>
                <span>адски особенный</span>
            </div>
        </div>
        <div class="w-full md:w-[1280px] h-[500px] grid-cols-1 md:flex justify-center space-y-10 md:space-y-0 space-x-2 md:space-x-10 min-w-0 max-w-full">
            <div class="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start">
                <p class="text-white text-xs md:text-base font-serif text-center md:text-left px-10 md:px-0 leading-4">
                    Жизнь в деревне Рутория складывается из простых радостей, тяжёлых будней и страшных легенд вокруг замка на холме Вимиур. В центре этой истории — парень-подросток Кайри Мирай из семьи пекарей, который всегда чувствовал, что ни одну существо не рождается монстром. 
                    Неожиданный поворот судьбы устраивает испытания его жизнненным убеждениям: его похищают и отдают на волю молодой вампирше, не способной пить кровь из-за своего извращенного характера.
                    Кайри придется прожить целый год в стенах замка, покорно служа своей хозяйке с особенными вкусами. Справится ли его наивный характер с трудностями или же столкнётся с суровой реальностью?
                </p>
                <div class="w-[140px] h-[40px] rounded-3xl bg-white hover:bg-[#ff0069] hover:text-white text-black mt-4">
                    <router-link to="/read">
                        <button class="w-full h-full text-base">Читать</button>
                    </router-link>
                   
                </div>
            </div>
            <div class="flex justify-center items-center">
                <img class="h-[200px] w-[270px] md:h-[300px] md:w-[400px]" src="/src/assets/Images/dopim.png"/>

            </div>
        </div>
    </div>
</template>

<script>
</script>


<style>
</style>