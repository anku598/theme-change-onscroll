<template>
  <div data-scroll-container id="main-container">
    <Header />
    <ChangeAbleTheme />
    <Gallery />
    <Footer />
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";
import gsap from "gsap";
export default {
  components: { Footer },

  methods: {
    isInViewport(el) {
      const changeTheme = this.$el.querySelector(".change-theme");
      const controller = new ScrollMagic.Controller();
      const scene = new ScrollMagic.Scene({
        triggerElement: changeTheme,
        reverse: true
      })

        .setClassToggle("body", "theme-change-active")
        .addTo(controller);
    }
  },

  mounted() {
    this.isInViewport();
  }
};
</script>

<style lang="scss">
$bg: green;

@function text($bg) {
  @if (lightness($bg) > 50) {
    @return #000;
  } @else {
    @return #fff;
  }
}

@mixin dc($color) {
  // dc is short for dynamic color
  color: text($color);
}
* {
  padding: 0;
  margin: 0;
}

#main-container {
  overflow-x: hidden;
}

body {
  width: 100%;
  height: 100%;
  overflow-x: hidden !important;
  position: relative;
  color: #000;
  text-rendering: optimizeSpeed;
  transition: color 0.8s, background 0.8s;
  background: #fff;
}

body::before {
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  width: 100vw;
  height: 100vh;
  position: fixed;
  transition: opacity 0.8s, background 0.8s;
  z-index: -1;
}

.theme-change-active {
  position: relative;
  @include dc($bg);
  text-rendering: optimizeSpeed;
  transition: color 0.8s, background 0.8s ease-in-out;
  background: $bg;
}

img {
  max-width: 100%;
}
</style>
