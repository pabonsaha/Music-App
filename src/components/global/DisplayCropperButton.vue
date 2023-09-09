<template>
    <label for="" class="block uppercase tracking-wide text-gray-900 text-xs font-bold text-white no-underlie px-4 py-3">{{
        label }}</label>
    <button class="mt-2 inline-block bg-green-500 hover:bg-green-700 font-bold text-white no-under-line px-4 py-3" @click="$emit('showModal', true)">{{ btnText }}
    </button>
</template>
 
<script setup>

import { defineProps, toRefs } from 'vue'

const emit = defineEmits(['showModal']);
const props = defineProps({
    btnText: String,
    label: String,
})
const { btnText, label } = toRefs(props);

</script>