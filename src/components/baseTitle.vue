<template>
  <div class="base-title">
    <p class="base-title-text">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    title: String
  }
}
</script>

<style scoped>
.base-title {
  width: 400px;
  /* height: 64px; */
  background-image: url(../assets/images/titlebg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: -16px;
}

.base-title-text {
  /* width: 100px; */
  color: #fff;
  text-indent: 34px;
  line-height: 50px;
}
</style>