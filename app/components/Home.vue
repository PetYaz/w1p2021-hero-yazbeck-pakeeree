<template>
  <div class="big-header">
    <router-link class="buttonHome" to="/Rules">PLAY</router-link>
    <video class="homeVideo" autoplay loop>
    <source src="../assets/video/startScreen.mp4"
            type="video/mp4">
</video>
  </div>
</template>
<style>
.buttonHome {
  position: absolute;
  top: 50;
  left: 50;
  z-index: 1;
}
</style>

<script>
export default {
  // mounted() {
  //   setTimeout(() => {(this.$refs.audio), 200);
  // },
  data() {
    return {
      message: 'Hello Hetic'
    };
  }
};
</script>
