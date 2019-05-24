<template>
  <div class="big-header">
    <audio ref="audio" autoplay> 
      <source src="">
    </audio>
    <h1>{{ message }}</h1>
    <br />
    <router-link class="button" to="/Characters">Go to Characters</router-link>
    <router-link class="button" to="/Game/1">Go to Game</router-link>
  </div>
</template>

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
