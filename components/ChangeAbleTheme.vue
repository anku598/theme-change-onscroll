<template>
  <div class="change-theme-wrap change-theme">
    <b-container class="bv-example-row" fluid>
      <b-row>
        <b-col>
          <div class="content">
            <h2>Innovating in experiential & product.</h2>
            <p>
              Six years of partnership. Dozens of launches. Hundreds of
              thousands of hours. A late night or two. In 2018, we took on more
              work outside traditional marketing. We partnered with the Real
              Estate and Workplace Services team to reimagine the office space
              for a building set to open in 2021. The task? Create experiences
              that bring the building’s story to life for every employee. We
              designed and built a handful of permanent touchpoints in the
              building, from inspiring sculptural interventions to an
              interactive live-data light installation. At the same time, we
              began working with a few strategic teams within Google on product
              work, imagining and reimagining products from the ground up. And,
              hey, just because we can’t tell you more about it, doesn’t mean it
              didn’t happen.
            </p>
          </div>
        </b-col>
        <b-col>
          <div class="right-section">
            <nuxt-img src="/right_img.jpg" />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.change-theme-wrap {
  margin-bottom: 80px;
  /* padding-top: 4rem;
  padding-bottom: 4rem; */
  width: 80%;
  margin: 0 auto;
  min-height: 80vh;
  margin-bottom: 20rem;
}

.content {
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.content h2 {
  font-size: calc(34 / 1440 * 100vw);
  margin-bottom: 50px;
}

.content p {
  letter-spacing: 0.01rem;
  line-height: 1.8;
  font-size: calc(14 / 1440 * 100vw);
  max-width: 90%;
}

.right-section {
  height: 80vh;
}

.right-section img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
