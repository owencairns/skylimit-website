<template>
    <div class="grid-item" @click="playVideo">
        <img loading="lazy" class="grid-image" :src="item.thumbnail" />
        <vue-plyr v-if="isActive" :options="plyrOptions">
            <div :poster="item.thumbnail" data-plyr-provider="youtube" :data-plyr-embed-id="item.path"></div>
        </vue-plyr>
        <div class="image-description">{{ item.title }}</div>
    </div>
</template>
  
<script>
import { ref, computed } from 'vue';

export default {
    props: {
        item: Object, // Video item data
        activeVideo: Number, // Currently active video ID
    },
    setup(props) {
        const isActive = computed(() => props.activeVideo === props.item.id);

        const plyrOptions = {
            playsinline: true,
            controls: ['play', 'progress', 'current-time', 'mute', 'fullscreen'],
        };

        const playVideo = () => {
            // Emit an event to the parent component to set the active video
            if (!isActive.value) {
                emit('setActiveVideo', props.item.id);
            }
        };

        return {
            isActive,
            plyrOptions,
            playVideo,
        };
    },
};
</script>
  