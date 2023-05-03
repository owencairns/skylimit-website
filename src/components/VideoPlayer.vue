<template>
  <div class="video-player">
    <button class="close-button" @click="$emit('close')">
      <i class="fas fa-times"></i>
    </button>
    <video ref="videoPlayer" class="video-js" controls>
      <source :src="videoSrc" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    videoSrc: {
      type: String,
      required: true,
    },
  },
  mounted() {
    const videoPlayer = this.$refs.videoPlayer;
    videoPlayer.addEventListener("loadedmetadata", () => {
      this.$emit("duration", videoPlayer.duration);
    });
  },
};
</script>

<style>
.video-player {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.video-js {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.close-button:hover {
  background-color: rgba(255, 255, 255, 1);
}

.close-button svg {
  width: 20px;
  height: 20px;
  fill: #1d3051;
}

.video-js .vjs-control-bar {
  background-color: #F6D7B6;
}

.video-js .vjs-slider-bar {
  background-color: #F6D7B6;
}

.video-js .vjs-play-progress:before {
  background-color: #1d3051;
}

.video-js .vjs-play-progress {
  background-color: #1d3051;
}
</style>