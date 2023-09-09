<template>
    <div class="container max-w-4xl mx-auto flex">
        <div class="w-1/3">
            <img src="https://picsum.photos/500" alt="" class="w-full rounded-lg h-auto shadow-lg">
        </div>
        <div class="w-full pl-4">
            <div class="flex">
                <div class="w-1/2">
                    <h1 class="text-2xl md:text-4xl test-left text-gray-900">
                        John Doe
                    </h1>
                    <span class="text-md text-gray-700">
                        <i><b>London,Uk</b></i>
                    </span>
                    
                </div>
                <div class="w-1/2 mt-2" >
                    <RouterLinkButton btnText="Edit Button" color="green" url="/account/edit-profile"/>
                </div>
            </div>
            <ProfileInfoSection />
            <ProfileAboutSection />
        </div>
    </div>

    <SongSection/>
    <YoutubeVideoSection/>
    <PostSection/>


</template>

<script setup>
import ProfileInfoSection from '../../components/partials/ProfileInfoSection.vue';
import ProfileAboutSection from '../../components/partials/ProfileAboutSection.vue'
import RouterLinkButton from '../../components/global/RouterLinkButton.vue';
import SongSection from '../../components/partials/SongSection.vue'
import YoutubeVideoSection from '../../components/partials/YoutubeVideoSection.vue';
import PostSection from '../../components/partials/PostsSection.vue';

</script>