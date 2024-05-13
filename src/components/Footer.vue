<template>
    <div class="w-full h-full flex justify-center">
        <div class="w-[1280px] h-full flex flex-col justify-center items-center">
            <img class="hidden md:flex h-[20px] w-full" src="/src/assets/Images/Divider.png"/>
            <nav class="w-full h-full flex text-white justify-center font-playfair text-xs md:text-base md:mx-10">
                <div class="w-1/4 h-full flex items-center md:justify-start justify-center">
                
                </div>
                <div class="w-3/4 hidden h-full md:flex justify-center items-center space-x-10 md:space-x-14">
                    <router-link to="/links" class="flex font-playfair hover:text-[#ff0069]">Ссылки</router-link>
                    <router-link to="/read" class="flex font-playfair hover:text-[#ff0069]">Начать читать</router-link>
                    <router-link to="/author" class="flex font-playfair hover:text-[#ff0069]">Об авторе</router-link>
                    
                </div>
                <div class="w-1/4 h-full flex justify-center items-center">
                
                </div>
                
            </nav>
        </div>
    </div>
</template>


<script>

</script>
<style>
</style>