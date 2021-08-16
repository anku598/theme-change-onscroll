<template>
  <section class="section-wrapper gallery-wrap">
    <div class="gallery" ref="width">
      <div class="gallery-counter">
        <span></span>
        <span class="divider" />
        <!-- <span>{{ images.length }}</span> -->
      </div>
      <div v-for="(image, idx) in images" :key="'imgss' + idx">
        <GalleryItem :image="image" />
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      index: 0,
      activeSection: null,
      images: [
        {
          src:
            "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
          title: "Dracaena Trifasciata",
          subtitle: "Live the Beauty",
          category: "Shooting / Adv.Campaing",
          color: "#d53f41"
        },
        {
          src:
            "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
          title: "Cereus Penuvianus",
          subtitle: "Live the Beauty",
          category: "Shooting / Adv.Campaing",
          color: "#d53f51"
        },
        {
          src:
            "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
          title: "Calliope",
          subtitle: "Live the Beauty",
          category: "Shooting / Adv.Campaing",
          color: "#d65f41"
        },
        {
          src:
            "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
          title: "Golden Pothos",
          subtitle: "Living Room",
          category: "Shooting / Adv.Campaing",
          color: "#hf53f41"
        }
      ]
    };
  },

  methods: {
    horizontalScroll() {
      setTimeout(() => {
        let sections = gsap.utils.toArray(".gallery-item-wrapper");
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            start: "top top",
            trigger: this.$refs.width,
            scroller: "#main-container",
            pin: true,
            scrub: 0.8,
            snap: 1 / (sections.length - 1),
            end: () => `+=${this.$refs.width.offsetWidth}`,
            onUpdate: () => {
              console.log(sections);
            }
          }
        });

        ScrollTrigger.refresh();
      }, []);
    }
  },

  mounted() {
    let sections = gsap.utils.toArray(".gallery-item-wrapper");
    this.horizontalScroll();
  }
};
</script>

<style lang="scss" scoped>
section {
  padding: 100px 0;
}
.gallery-wrap {
  background-color: #d53f41;
  // margin-left: -5vw;
  // margin-right: -5vw;
}

.gallery-counter {
  position: absolute;
  top: 10%;
  left: 100px;
  z-index: 1;
  mix-blend-mode: difference;
  line-height: 16px;
  color: #dbd8d6;

  font-family: "Bai Jamjuree";
  font-weight: 600;

  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  display: inline-block;

  .divider {
    content: "";
    background-color: white;
    width: 6.25vw;
    margin: 7px 10px;
    height: 1px;
    display: inline-block;
  }
}

.gallery {
  height: 80vh;
  padding: 10vh 0;
  width: 400%;
  display: flex;
  flex-wrap: nowrap;
}
</style>
