<template>
    <div>
        <div class="mx-auto py-4">
            <div class="flex flex-wrap font-bold text-gray-100">
                <div class="text-gray-900 text-xl"> Youtube Videos</div>
                <div class="text-green-500 w-full h1"></div>
                <div class="w-full mt-4">
                    <RouterLinkButton class="ml-2" btnText="Delete Youtube Video" color="red" url="/account/delete-youtube-video"/>
                    <RouterLinkButton btnText="Add Youtube Video" color="green" url="/account/add-youtube-video"/>
                </div>
            </div>
        </div>
        <div class="flex flex-wrap mb-4">
            <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2"></div>
            <iframe class="w-full h-60" src="https://www.youtube.com/embed/Cv5-COUapQ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script setup>
import RouterLinkButton from '../global/RouterLinkButton.vue';

</script>