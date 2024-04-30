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

    <div class="mt-12 flex justify-between gap-52">

        <div class="m-8 flex flex-col gap-12 w-72">

            <input class="pl-2 bg-sky-300 font-bold text-xl placeholder:text-slate-600 rounded-xl"
                placeholder="Фамилия">
            <input class="pl-2 bg-sky-300 font-bold text-xl placeholder:text-slate-600 rounded-xl" placeholder="Имя">
            <input class="pl-2 bg-sky-300 font-bold text-xl placeholder:text-slate-600 rounded-xl"
                placeholder="Отчество">
            <input class="pl-2 bg-sky-300 font-bold text-xl placeholder:text-slate-600 rounded-xl" placeholder="Класс">
            <input class="pl-2 bg-sky-300 font-bold text-xl placeholder:text-slate-600 rounded-xl" placeholder="Почта">
            <input class="pl-2 bg-sky-300 font-bold text-xl placeholder:text-slate-600 rounded-xl"
                placeholder="Имя пользователя">
            <input class="pl-2 bg-sky-300 font-bold text-xl placeholder:text-slate-600 rounded-xl" placeholder="Пароль">



        </div>


        <router-link to="/gamepage">
            <div class="flex justify-center items-center mt-52">
                <div class="reg">
                    <button class="text-4xl font-bold">НАЧАТЬ ИГРУ</button>
                </div>
            </div>
        </router-link>


        <div class="mr-8 flex flex-col gap-2 ">

            <h1 class="text-center font-bold text-xl">Выберите персонажа</h1>

            <div class="flex flex-col gap-4">

                <div class="bg-sky-300 p-24">
                    <h1>LOL</h1>
                </div>
                <div class="bg-sky-300 p-24">
                    <h1>LOL</h1>
                </div>

            </div>

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