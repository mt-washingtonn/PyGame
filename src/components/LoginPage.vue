<script setup>

</script>


<template>

    <header class="bg-amber-400 p-8 border border-black">
        <div class="flex justify-between">
            <h1 class="flex  font-bold text-6xl">
                I <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\heart.png" alt=""
                    class="size-14">
                Coding & Quest
            </h1>
            <p class="ml-12 rounded-full p-4 bg-white text-center items-center flex font-bold">ru</p>
        </div>

    </header>

    <div class="flex justify-between">

        <div class="leftside m-6">

            <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Rectangle.png"
                class="w-32 pl-6 pt-2">
            <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Rectangle.png"
                class="w-32 pl-6 pt-2">
            <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Rectangle.png"
                class="w-32 pl-6 pt-2">


        </div>


        <div class="flex flex-col justify-center gap-4 mt-24">




            <input class="p-2 bg-sky-300 font-bold text-xl placeholder:text-slate-600 rounded-xl"
                placeholder="Имя пользователя">
            <input class="p-2 bg-sky-300 font-bold text-xl placeholder:text-slate-600 rounded-xl" placeholder="Пароль">


            <router-link to="/mappage">
                <div class="reg">
                    <p class="text-4xl font-bold">Войти</p>
                </div>
            </router-link>





        </div>





        <div class="rightside m-6">

            <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Rectangle.png"
                class="w-32 pr-6 pt-2">
            <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Rectangle.png"
                class="w-32 pr-6 pt-2">
            <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Rectangle.png"
                class="w-32 pr-6 pt-2">



        </div>





    </div>



</template>


<style scoped>
.reg {
    margin-top: 24%;
    padding: 32px;
    align-items: center;
    text-align: center;
    width: 24rem;
    height: 12rem;
    margin-right: 52px;
    background: url('/src/components/img/Vector.svg');
    background-repeat: no-repeat;
    background-size: 24rem;
}
</style>
