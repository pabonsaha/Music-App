<template>

<div id="centerCallToAction">
    <div class="px-4 md:w-3/4 lg:w-2/3 mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl md:text-5xl leading-light text-center text-gray-100 mb-3">
            <b>Music Social Network</b>
        </h1>
        <p class="pt-2 text-xl text-center text-gray-300">
            Login or Registration now and join other like midded people
        </p>
        <p class="py-4 text-xl text-center text-gray-300">
            let the music be your guide..
        </p>
    </div>
    <div class="mt-6"></div>
    <div class="flex justify-between">
        <router-link to="/login"
        class="w-full mr-1 py-2 px-4 bg-green-600 text-white font-semibold text-2xl rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-500 courser-pointer" >
            Login
        </router-link>
        <router-link to="/register" class="w-full mr-1 py-2 px-4 bg-green-600 text-white font-semibold text-2xl rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-500 courser-pointer" >
            Register
        </router-link>
    </div>
    
</div>

</template>

<script setup>
</script>

<style lang="scss"></style>