<script setup>
import { RouterView } from 'vue-router';
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


        <div class="flex flex-col justify-center">

            <h1 class="text-2xl text-center font-bold">Регистрация</h1>



            <div class="mt-12 ml-12 flex flex-col">
                <router-link to="teachreg">
                    <div class="reg">
                        <p class="text-4xl font-bold">Я учитель</p>
                    </div>
                </router-link>

                <router-link to="/studreg">
                    <div class="reg">
                        <p class="text-4xl font-bold">Я ученик</p>
                    </div>
                </router-link>

            </div>

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
