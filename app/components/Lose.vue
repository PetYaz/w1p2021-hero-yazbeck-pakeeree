
<template>
  <div class="big-header">
      <div class="btnRestartContainer">
        <div class="btnRestart" v-on:click="switchToChar()" >Recommencer</div>
      </div>
  </div>
</template>

<script>
import gameService from '../services/gameService';
import game from '../data.json';
export default {
  data() {
    return {
      show: true,
      gameService: gameService,
      message: 'GAME OVER',
      endMessage: gameService.endContent
    }
  },
  methods: {
    switchToChar() {
      this.$router.push({path: '/characters'})
    }
  }
};
console.log(gameService.endContent);
</script>