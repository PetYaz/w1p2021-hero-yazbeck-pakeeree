<template>
  <div class="big-header">
    <router-link class="buttonHome" to="/Rules"></router-link>
    <video class="homeVideo" autoplay loop>
    <source src="../assets/video/startScreen.mp4"
            type="video/mp4">
</video>
  </div>
</template>
<style>
.buttonHome {
position: absolute;
  top: 75%;
  left: 45%;
  width: 176px;
  height: 74px;
  background-image: url('../assets/pagenotice/playbutton.svg');
  background-size: contain center no-repeat;
  background-repeat: no-repeat;
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
