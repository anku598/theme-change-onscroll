<template>
  <div class="header">
    <div class="header-img-wrap">
      <nuxt-img src="/header.jpg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  margin-bottom: 16rem;
}
.header-img-wrap {
  width: 80%;
  margin: 0 auto;
  height: calc(100vh - 180px);
  margin-top: 70px;
}

.header-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 100%;
}
</style>
