<template>
    <div id="addSong" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
        <div class="text-gray-900 text-xl">Add Youtube Video</div>
        <div class="bg-green-500 w-full h-1 mb-4"></div>

        <div class="full md:w-1/2 px-3">
            <TextInput label="Title" placeholder="New Song name" v-model:input="input" inputType="text"
                error="This is a text error" />

        </div>

        <div class="full md:w-1/2 px-3">
            <TextInput label="Video Url" placeholder="Url" v-model:input="videoCode" inputType="text"
                error="This is a text error" />

        </div>
        <div class="full md:w-1/2 px-3">
            <SubmitFormButton btnText="Add Video" />
        </div>

    </div>
</template>

<script setup>
import TextInput from '../../components/global/TextInput.vue';
import SubmitFormButton from '../../components/global/SubmitFormButton.vue';
import { ref } from 'vue';


let input = ref(null);

</script>