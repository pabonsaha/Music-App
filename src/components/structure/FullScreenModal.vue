<template>
    <div>
        <button
        v-on:click="open = !open"
        class="bg-transparent
        hover:bg-green
        text-white
        font-semibold
        hover:text-white
        py-1
        px-2
        hover:border-transparent
        rounded">
        <i class="fa-solid fa-bars fa-xl"></i>
        </button>
        <div v-show="open" class="animated slideInDown fixed faster w-full h-full top-0 left-0 flex justify-center backdrop-blur-sm">
            <div class="bg-black absolute w-full h-full opacity-75"></div>
            <div class="my-auto fixed border-white w-80 pt-16 gap-1">
                <p class="text-2xl text-center text-white font-bold">Menu</p>
                <div class="pt-2">
                    <RouterLinkButton v-on:click="open = !open" class="w-full text-gray-100 text-center text-lg" btnText="Profile" color="green" url="/account/profile"/>
                </div>
                <div class="pt-2 mt-2">
                    <RouterLinkButton v-on:click="open = !open" class="w-full text-gray-100 text-center text-lg" btnText="Posts" color="green" url="/account/posts"/>
                </div>
                <div class="pt-10">
                    <RouterLinkButton v-on:click="open = !open" class="w-full text-gray-100 text-center text-lg mt-4" btnText="Close" color="red"/>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import RouterLinkButton from '../global/RouterLinkButton.vue'
import {ref} from 'vue'
 let open = ref(false)

</script>