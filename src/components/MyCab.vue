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


    <div class="m-12 gap-64 flex justify-center">

        <div class="flex flex-col gap-4">

            <h1 class="text-4xl font-bold">Кабинет</h1>

            <div class="w-64 h-64 bg-sky-500">

                lol

            </div>

            <div>
                <p
                    class="font-bold text-center border border-black rounded-md bg-gradient-to-b from-sky-200 to-sky-500 p-2">
                    Имя</p>

                <router-link to="/myclass">
                    <p
                        class="mt-4 font-bold text-center border border-black rounded-md bg-gradient-to-b from-sky-200 to-sky-500 p-2">
                        Класс</p>
                </router-link>
            </div>
        </div>


        <div class=" mt-8 w-80 h-96 bg-sky-300">

            <div>

                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\oyu.png" alt=""
                    class="size-32 m-2">

            </div>



            <div class="relative h-54 mt-64">

                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\oyu.png" alt=""
                    class="size-32 m-4 rotate-180 absolute bottom-0 right-0">

            </div>



        </div>
    </div>




</template>