<template>
    <div id="addSong" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
        <div class="text-gray-900 text-xl">Add Song</div>
        <div class="bg-green-500 w-full h-1 mb-4"></div>

        <div class="full md:w-1/2 px-3">
            <TextInput label="Title" placeholder="New Song name" v-model:input="input" inputType="text"
                error="This is a text error" />

        </div>
        <div class="w-full">
            <label for="" class="block uppercase text-xs font-bold mb-2 text-gray-700"></label>
            <div class="mb-3 w-full">
                <input
                    class="form-control block w-full px-3 py-1.5 text-base text-gray-700 border-solid border-gray-400 rounded transition easy-in-out m-0 focus:text-gray-700 focus:bg-white"
                    type="file" name="" id="image" ref="fileInput" @change="getUploadedImage">
            </div>
        </div>
        <div class="full md:w-1/2 px-3">
            <SubmitFormButton btnText="Add Song" />
        </div>

    </div>
</template>

<script setup>
import TextInput from '../../components/global/TextInput.vue';
import SubmitFormButton from '../../components/global/SubmitFormButton.vue';
import { ref } from 'vue';


let input = ref(null);

</script>