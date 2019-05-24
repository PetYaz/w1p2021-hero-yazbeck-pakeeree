<template>
  <div class="big-header">
    <div>
      <h1>{{ gameChar.content }}</h1>
      <ul>
        <li  :key="character.class" v-for="character in gameChar.characters">
          <div>
            <svg v-on:click="doEffects(character)"  aria-hidden="true"><use v-bind:href="`${character.svg}`"></use></svg>
          </div>
          <div  v-on:click="doEffects(character)">
            {{ character.label }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import game from "../data.json";
import gameService from '../services/gameService'
export default {
  data() {
    return {
      gameService: gameService,
      gameChar: game.charactersPage
    };
  },
    mounted() {
    console.log('Mounted')
    // gameService.characterChoice = 
    // this.character = gameService.characterChoice;
  },
  methods: {
    doEffects(character) {
      this.$router.push({path: '/game/1'})
      gameService.characterChoice = character.svg;
      localStorage.setItem('character', character.svg);
      console.log(gameService.characterChoice);
      // CHARACTERS IN LOCALSTORAGE
      if (character.svg === '#soupe') {
        localStorage.setItem('asset', 'spill')
      } else if (character.svg === '#burger') {
        localStorage.setItem('asset', '')
      }
      console.log(localStorage)
    }
  },
};
</script>