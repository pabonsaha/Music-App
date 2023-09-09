<template>
    <label for="" class="block uppercase tracking-wide text-gray-900 text-xs font-bold text-white no-underlie px-4 py-3">{{
        label }}</label>
    <textarea class="block border border-gray-400 py-3 px-3 " v-model="descriptionComputed" :placeholder="placeHolder"
        cols="30" rows="10"></textarea>
    <span v-if="error" class="text-red-500">{{ error }}</span>
</template>
 
<script setup>

import { computed, defineProps, toRefs, defineEmits } from 'vue'

const emit = defineEmits(['update:input']);
const props = defineProps({
    label: String,
    description: String,
    placeHolder: { type: String, default: '' },
    error: String,
})
const { label, description, placeHolder, error } = toRefs(props);

const descriptionComputed = computed({
    get: () => description.value,
    set: () => emit('update:description', val),
})

</script>