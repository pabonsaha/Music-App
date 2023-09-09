
<template>
    <TopNavigation/>
    <div id="AccountView" class="max-w-4xl mx-auto">
        <RouterView />
    </div>
    <FooterSection/>
</template>


<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterSection from '../components/structure/FooterSection.vue';
import TopNavigation from '../components/structure/TopNavigation.vue';

</script>