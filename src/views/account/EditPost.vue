<template>
    <div id="EditProfile" class="container max-w-4xl mx-auto pt-20 px-6">
        <div class="text-gray-900 text-xl">Edit Profile</div>
        <div class="bg-green-500 w-full h-1"></div>
        <CropperModal
        v-if="modalShow"
        :minAspectRatioProp="{width: 16, height: 9}" 
        :maxAspectRatioProp="{width: 16, height: 9}"
        @croppedImageData="setCroppedImageData"
        @showModal="modalShow=false" 
        />
        {{ image }}
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="full md:w-1/2 px-3">
                <TextInput label="Title" placeholder="Content" v-model:input="title" inputType="text"
                error="This is a text error"
                />
            </div>
            <div class="full md:w-1/2 px-3">
                <TextInput label="Location" placeholder="Dhaka, Bangladesh" v-model:input="location" inputType="text"
                error="This is a text error"
                />
            </div>
        </div>
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="full md:w-1/2 px-3">
                <DisplayCropperButton @showModal="modalShow=true" label="Update Post Image" btnText="Update Post Image"/>
            </div>
        </div>

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="full md:w-1/2 px-3">
                <CroppedImage labe="Cropped Image "
                :image="image"/>
            </div>
        </div>

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="full md:w-1/2 px-3">
                <TextArea label="Description" placeHolder="please Enter some information" btnText="Update Profile input" v-model="description" error="this is error" />
            </div>
        </div>
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="full md:w-1/2 px-3">
                <SubmitFormButton btnText="Update Post"  />
            </div>
        </div>
    </div>
</template>

<script setup>
import TextInput from '../../components/global/TextInput.vue'
import DisplayCropperButton from '../../components/global/DisplayCropperButton.vue';
import TextArea from '../../components/global/TextArea.vue';
import SubmitFormButton from '../../components/global/SubmitFormButton.vue';
import CropperModal from '../../components/global/CropperModal.vue';
import CroppedImage from '../../components/global/CroppedImage.vue';

import { ref } from 'vue';

let title = ref(null);
let location = ref(null);
let description = ref(null);
// let imageData = ref(null);
let image = ref(null);

let modalShow = ref(false);

const setCroppedImageData = (data) =>{
    // imageData = data;
    image.value = data.imageUrl;
}

</script>