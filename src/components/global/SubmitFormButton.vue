<template>
    <button :to="url" class="mt-2 inline-block bg-green-500 font-bold text-white px-4 py-3" @click="$emit('submit',true)">{{ btnText }}
    </button>
</template>
 
<script setup>

import { defineProps, toRefs } from 'vue'

const emit = defineEmits(['update:input']);
const props = defineProps({
    btnText: String
})
const { btnText } = toRefs(props);

</script>