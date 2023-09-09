<template>
    <div id="deleteSong" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
        <div class="text-gray-900 text-xl">Delete Song</div>
        <div class="bg-red-500 w-full h-1 mb-4"></div>

        <div class="bg-white rounded px-8 pt-6 pb-8">
            <div class="flex flex-wrap">
                <div class="w-3/4 mr-auto mt-2 text-lg p-1 text-gray-900">
                    1. this is a song
                </div>
                    <div class="w-1/4 ml-auto p-1">
                        <button class="flow-right bg-transparent hover:bg-red-500 text-gray-900 font-semibold hover:text-white py-2 px-2 border border-red-500 rounded">Delete</button>
                    </div>
            </div>

        </div>

    </div>
</template>

<script setup>
import TextInput from '../../components/global/TextInput.vue';
import SubmitFormButton from '../../components/global/SubmitFormButton.vue';
import { ref } from 'vue';


let input = ref(null);

</script>