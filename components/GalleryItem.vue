<template>
  <div class="gallery-item-wrapper">
    <div></div>
    <div class="gallery-item">
      <div class="gallery-item-info">
        <h1 class="gallery-info-title" data-scroll-x data-scroll-speed="1">
          {{ image.title }}
        </h1>
        <h2 class="gallery-info-subtitle" data-scroll-x data-scroll-speed="2">
          {{ image.subtitle }}
        </h2>
        <p class="gallery-info-category">{{ image.category }}</p>
      </div>
      <div
        class="gallery-item-image"
        :style="{ backgroundImage: 'url(' + image.src + ')' }"
      ></div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  props: ["image"]
};
</script>

<style lang="scss" scoped>
.gallery-item-wrapper {
  aspect-ratio: 16/9;
  height: 100%;
  display: grid;
  grid-template-columns: 20vw 1fr 200px;
  width: 100vw;

  &.is-reveal {
    .gallery-item-image {
      transform: scale(1);
    }
  }
}

.gallery-item {
  width: 100%;
  height: 100%;
  position: relative;
  will-change: transform;
}
.gallery-item-info {
  position: absolute;
  bottom: 10%;
  z-index: 1;
  transform: translateX(-20%);
  color: #dbd8d6;
  color: white;
  .gallery-info-title {
    line-height: 6vw;
    font-family: "Bai Jamjuree";
    font-weight: 600;

    font-size: 6vw;
    -webkit-font-smoothing: antialiased;
  }

  .gallery-info-subtitle {
    position: relative;
    line-height: 6vw;
    color: transparent;
    font-family: "Bodoni Moda";
    font-weight: 400;
    font-size: 6vw;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke: 2px #dbd8d6;
  }

  .gallery-info-category {
    position: relative;
    line-height: 24px;
    font-family: "Bai Jamjuree";
    font-weight: 400;
    font-size: 24px;
    -webkit-font-smoothing: antialiased;
    margin-top: 2vh;
  }
}

.gallery-item-image {
  background-size: cover;
  background-position: center;
  transform-origin: center;
  width: 100%;
  height: 100%;
  will-change: transform;
  transform: scale(0.7);
  transition: all 1.5s cubic-bezier(0.77, 0, 0.175, 1);
  filter: grayscale(100%) sepia(20%) brightness(80%);
}
</style>
