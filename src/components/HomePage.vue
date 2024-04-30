<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
    <div class="absolute bg-amber-400 top-0 w-full h-32">

        <header
            class="flex  justify-between  items-center m-12 pt-2 pb-16 pl-4 pr-4  border border-black shadow-inner shadow-slate-600  rounded-xl    ">
            <div class="">
                <h1 class="flex  font-bold text-6xl">
                    I <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\heart.png" alt=""
                        class="size-14">
                    Coding & Quest
                </h1>
            </div>

            <div class="flex font-bold text-2xl  gap-2">
                <router-link to="/loginpage">
                    <p>войти</p>
                </router-link>
                <p>|</p>
                <router-link to="/regpage">
                    <p>регистрация</p>
                </router-link>
                <p class="rounded-full bg-white pr-2 pl-2 flex">ru</p>
            </div>

        </header>
    </div>

    <div class="flex flex-col m-52">
        <div class="flex justify-between">
            <div class="flex">
                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 14.png" alt=""
                    class="size-8 ml-28">
                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 13.png" alt=""
                    class="w-20 h-6 ml-28">
            </div>

            <div>

                <div class="flex">
                    <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 12.png" alt=""
                        class="w-20 h-6 ml-8">
                    <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 13.png" alt=""
                        class="w-20 h-6 ml-8">
                </div>

            </div>
        </div>




        <div class="flex mt-4 justify-between border-b border-black">
            <div class="flex">
                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 7.png" alt=""
                    class="w-18 h-24 ">
                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 17.png" alt=""
                    class="w-18 h-24 ">
                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 7.png" alt=""
                    class=" absolute w-18 h-24 ">
                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 7.png" alt=""
                    class="w-18 h-24 ">
                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 17.png" alt=""
                    class="w-18 h-24 ">
                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 7.png" alt=""
                    class="w-18 h-24 ">
                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 7.png" alt=""
                    class="w-18 h-24 ">
            </div>


            <div class="flex">


                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 17.png" alt=""
                    class="w-18 h-24 ">
                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 8.png" alt=""
                    class="w-18 h-24">
                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 7.png" alt=""
                    class="w-18 h-24">
                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 17.png" alt=""
                    class="w-18 h-24">
                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 7.png" alt=""
                    class="w-18 h-24">
                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 7.png" alt=""
                    class="w-18 h-24">

            </div>








        </div>
        <div class="absolute flex mt-24 ">

            <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\Group 24.png" alt=""
                class="w-12 h-4 mt-24">
            <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\chel.png" alt=""
                class="h-24 ml-16  ">
            <div class="text-xl font-bold bg-amber-400 rounded-xl border border-black text-center p-12 ml-52">

                <p>ИГРАЕМ И УЧИМСЯ <br>ПРОГРАММИРОВАНИЮ <br>ВМЕСТЕ</p>

            </div>


        </div>





    </div>

    <div class="border-t border-black flex justify-between ml-24 mr-24">

        <div class="border-x border-black p-4">
            <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\sun.png" alt="" class="size-32">
        </div>


        <div class="border flex border-black p-4 gap-8">
            <div class="">
                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\items.png" alt="" class="h-32">
            </div>

            <div class="flex flex-col">
                <p class="font-bold">n=5</p>
                <p class="font-bold">
                    string="Hello World "</p>
                <p class="font-bold">print(string * n)</p>
            </div>

            <div class="flex flex-col">
                <p class="font-bold">if foo == 'blah':</p>
                <p class="font-bold">
                    do_blah_thing()for x</p>
                <p class="font-bold">in lst: total +=</p>
                <p class="font-bold"> xwhile t 10: t=delay()</p>
            </div>



        </div>
        <div class="border-r border-black p-4">
            <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\sun.png" alt="" class="size-32">
        </div>

    </div>
    <div class="ml-48 mr-48 p-46 mt-8">
        <div class="flex justify-center rounded-full bg-amber-400 gap-12 pl-4 pr-4">
            <div class="text-6xl font-bold flex items-center">
                <h1 class="text-center">CODING</h1>
            </div>
            <div class="bg-sky-400 p-4 ">
                <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\python.png" alt=""
                    class="size-32">
            </div>
            <div class="text-6xl font-bold flex items-center">
                <h1 class="text-center">LOGIC</h1>
            </div>
        </div>
    </div>
    <div class="mt-16 pl-32 pr-32">
        <div class="flex justify-center rounded-full bg-sky-400 gap-12">
            <div class="text-6xl  font-bold flex items-center p-12">
                <h1 class="text-center">учимся</h1>
            </div>
            <div class="text-6xl bg-amber-400 font-bold flex items-center">
                <h1 class="text-center p-4">python</h1>
            </div>
            <div class="text-6xl font-bold flex items-center p-12">
                <h1 class="text-center">весело</h1>
            </div>
        </div>
    </div>
</template>