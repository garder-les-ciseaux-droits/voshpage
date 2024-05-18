<template>
    <div class="w-full h-full font-serif bg-white text-black flex justify-center items-center min-w-0 max-w-full">
        <div class="w-full md:w-[1280px] h-full flex justify-center py-10 px-2 mx-4">
            <div>
                <img class="w-32 h-22 hidden md:flex" src="/src/assets/Images/2im-2.png"/>
            </div>
            <div class="flex flex-col w-full min-w-0 max-w-full overflow-y-auto min-w-[150px]">
                <h1 class="text-lg md:text-xl font-bold">Кратко об авторе</h1>
                <p class="text-xs md:text-base">Эван Вош, или я, - начинанающий писатель лёгких романов.
                    <br>
                    Моей основной целью является не столько написание книг, сколько создание историй, которые смогут унести моего читателя в путешествие, полное смеха, радости, печали и, возможно, горя.
                    <br>
                    <br>
                    Этот сайт служит мостиком, соединяющим меня, мои работы и вас.
                </p>
                <div class="w-[140px] h-[40px] rounded-3xl bg-black hover:bg-[#ff0069] text-white mt-4">
                    <router-link to="/author">
                        <button class="w-full h-full text-base">Узнать больше</button>
                    </router-link>
                </div>
            </div>
        </div>
        
    
    </div>
</template>

<script>
</script>


<style>
.af{
    background-color: #d7d7d7;
}
</style>