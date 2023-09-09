<template>
    <div class="bg-green-500 rounded">
        <div id="aplayer">

        </div>
    </div>
</template>

<script setup>
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';

import {onMounted} from 'vue';

onMounted(() => {
    thePlayer();
});

const thePlayer = () => {
    new APlayer({
        container: document.getElementById('aplayer'),
        audio: [
            {
                name: 'First Song',
                artist: 'artist',
                url: '../../../public/music/cinematic-time-lapse-115672.mp3',
                cover: 'https://picsum.photos/500'
            },
            {
                name: 'Sceond Song',
                artist: 'artist',
                url: '../../../public/music/inspiring-emotional-uplifting-piano-112623.mp3',
                cover: 'https://picsum.photos/500'
            },
        ]
    });
}
</script>