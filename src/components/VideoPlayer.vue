<script>
import 'video.js/dist/video-js.css';
import videojs from 'video.js';

export default {
  props: ['video'],
  data() {
    return {
      playerOptions: {
        fluid: true,
        controlBar: {
          volumePanel: {
            inline: false
          }
        }
        // Additional Video.js options here
      },
    };
  },
  mounted() {
    // Create Video.js player instance
    this.player = videojs(this.$refs.videoPlayer, this.playerOptions);

    // Handle fullscreen for mobile users
    if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
      this.player.ready(() => {
        this.player.requestFullscreen();
      });
    }
  },
  beforeDestroy() {
    // Dispose of Video.js player instance
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>

<template>
  <div>
    <video
      ref="videoPlayer"
      class="video-js vjs-default-skin"
      controls
      preload="auto"
      :data-setup="JSON.stringify(playerOptions)"
    >
      <source :src="video.source" type="video/mp4" />
    </video>
  </div>
</template>
