<template>
    <div class="relative z-10">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto mt-6">
            <div class="flex min-h-full item-end justify-center p-4 items-center py-2">
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all my-8 mt-10 max-w-4xl">
                    <div class="bg-white px-4 pt-5 pb-4 p-6">
                        <div class="flex items-center">
                            <div class="mt-3 text-left">
                                <h3 class="text-2xl font-medium leading-6 text-gray-500">Crop Image</h3>
                                <label for="" class="block uppercase text-xs font-bold mb-2 text-gray-700"></label>
                                <div class="mb-3 w-full">
                                    <input
                                        class="form-control block w-full px-3 py-1.5 text-base text-gray-700 border-solid border-gray-400 rounded transition easy-in-out m-0 focus:text-gray-700 focus:bg-white"
                                        type="file" name="" id="image" ref="fileInput" @change="getUploadedImage">
                                </div>
                            </div>



                            <div class="pb-3 flex-row-reverse px-4">
                                <button v-if="uploadImage" @click="crop" type="button"
                                    class="inline-flex w-full justify-center rounded-md border bg-blue-600 font-medium text-white px-4 py-2">Crop
                                    Image</button>
                                <button type="button"
                                    class="inline-flex w-full justify-center rounded-md border bg-red-600 font-medium text-white px-4 py-2" @click="$emit('showModal',false);">Cancel</button>
                            </div>
                        </div>
                        <div class="flex justify-center max-w-2xl">
                            <cropper ref="cropperModule" :src="uploadImage"
                                :stencil-props="{
                                    minAspectRatio: 8/8,
                                    maxAspectRatio: 8/8,
                                }" ></cropper>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
 
<script setup>

import { ref, defineEmits, defineProps, toRef } from 'vue';
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

const emit = defineEmits(['croppedImageData','showModal']);

const props = defineProps({
    minAspectRatioProp : Object,
    maxAspectRatioProp : Object,
});


const {minAspectRatioProp, maxAspectRatioProp} = toRef(props);

let fileInput = ref(null);
let cropperModule = ref(null);
let uploadImage = ref(null);
let croppedImageData = {
    file : null,
    imageUrl : null,
    height : null,
    width : null,
    left : null,
    top : null,
}

const getUploadedImage = (e) => {
    const file = e.target.files[0];
    uploadImage.value = URL.createObjectURL(file);
}

const crop = () => {
    const {coordinates, canvas} = cropperModule.value.getResult();

    croppedImageData.file = fileInput.value.files[0];
    croppedImageData.imageUrl = canvas.toDataURL();
    croppedImageData.height = coordinates.height;
    croppedImageData.width = coordinates.width;
    croppedImageData.left = coordinates.left;
    croppedImageData.top = coordinates.top;
    
    emit('croppedImageData',croppedImageData);
    emit('showModal',false);
}


</script>