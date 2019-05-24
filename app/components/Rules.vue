<template>
  <div class="rules">

    <router-link class="buttonRules" to="/Characters"></router-link>
  </div>
</template>

<style>
.rules {
  min-width: 100vw;
  min-height: 100vh;
  background-image: url('../assets/pagenotice/fondNotice.jpg');
  background-size: cover;
}

.buttonRules {
  position: absolute;
  top: 75%;
  left: 50%;
  width: 176px;
  height: 74px;
  background-image: url('../assets/pagenotice/playbutton.svg');
  background-size: contain center no-repeat;
  background-repeat: no-repeat;
}

</style>


<script>
export default {
    
};
</script>
