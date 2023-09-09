<template>
    <div>
        <label for="" class="block uppercase tracking-wide text-xs font-bold mb-2" > {{ label }}</label>
        <img :src="image" class="rounded w-full border-black border-4 border-green-500" alt="">

    </div>
</template>

<script setup>

import {defineProps, toRefs,} from 'vue'

const props = defineProps({
    label: String,
    image: String,

})
const {label, image} = toRefs(props);


</script>