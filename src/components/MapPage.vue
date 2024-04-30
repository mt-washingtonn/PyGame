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
            <div class="flex">
                <router-link to="/mycab">
                    <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\User.png" alt=""
                        class="size-14">
                </router-link>
                <p class="ml-12 rounded-full p-4 bg-white text-center items-center flex font-bold">ru</p>
            </div>

        </div>

    </header>



    <div class="flex flex-col items-center">

        <img src="C:\Users\nzolo\OneDrive\Desktop\Оbama\Obama\src\components\img\map.png" alt="" class="size-1/2">

        <div class="reg">
            <router-link to="/gamepage">
                <button class="text-4xl font-bold">НАЧАТЬ ИГРУ</button>
            </router-link>
        </div>

    </div>


</template>


<style scoped>
.reg {
    margin-top: 32%;
    position: absolute;
    padding: 32px;
    align-items: center;
    text-align: center;
    width: 24rem;
    height: 7rem;
    background: url('/src/components/img/Vector.svg');
    background-repeat: no-repeat;
    background-size: 24rem;
}
</style>