<template>
  <div class="fondCharacters">
    <div>
 
      <ul class="charactersList">
        <li class="charactersItem" :key="character.class" v-for="character in gameChar.characters">
          <div>
            <svg v-on:click="doEffects(character)"  aria-hidden="true"><use v-bind:href="`${character.svg}`"></use></svg>
          </div>
          <div class="characterLabel"  v-on:click="doEffects(character)">
            {{ character.label }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
 .fondCharacters {
    min-width: 100vw;
    min-height: 100vh;
    background-image: url('../assets/pagechoix/fondChoix.png');
    background-size: cover;
 }
.charactersList {
  display: flex;
  justify-content: center;
  position: relative;
  width: 1000px;
  margin: 0 auto;
  padding: 0;
}

.characterLabel {
  position: absolute;
  top: 300%;
  font-size: 2.2rem;
  justify-content: center;
  padding-left: 60px;
  cursor: pointer;
}
.charctersItem {
    margin-right: 100px;
    margin-left: 100px;


}


 
</style>

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