<template>
    <div>
        <div class="mx-auto py-4">
            <div class="flex flex-wrap font-bold text-gray-100">
                <div class="text-gray-900 text-xl">Posts</div>
                <div class="text-green-500 w-full h1"></div>
                <div class="w-full mt-4">
                    <RouterLinkButton btnText="Create Post" color="green" url="/account/create-post" />
                </div>
            </div>
        </div>
        <div class="flex flex-wrap mb-4">
            <div class="my-1 px-1 w-full md:w-1/2 lg:w-1/2"></div>

            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src="https://picsum.photos/500/300" alt="" />
                </a>
                <div class="p-2 md:p-4">
                    <div class="text-lg">
                        <router-link to="" class="underline text-blue-500
                    hover:text-blue-600">Test Title</router-link>
                    </div>
                    <p class="py-2">Location: Test Location</p>
                    <p class="text-gray-darker text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
                        nesciunt labore, ipsam natus alias dolore vero rem perferendis rerum impedit magnam libero omnis
                        quia tempora ipsa, est voluptatibus voluptatum harum. Porro molestiae, cupiditate necessitatibus
                        voluptatibus in assumenda magni? Esse dolorem ullam exercitationem deserunt quisquam aspernatur
                        natus in aperiam quo amet.</p>
                    div
                    <div class="mt-2 flex item-center justify-end">
                        <router-link :to="{name: 'EditPost'}" class="bg-blue-500
                    hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded-full">Edit Post</router-link>
                        <button class="bg-red-500
                    hover:bg-red-700 text-white text-sm font-bold py-1 px-2 rounded-full">Delete</button>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import RouterLinkButton from '../global/RouterLinkButton.vue';

</script>
