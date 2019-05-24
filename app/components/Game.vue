<template>
  <div class="gameHeader">
    <h1 class="gameTitle">{{ step.content }}</h1>
    <br>

    <h2 class="gameTime">Temps de course :<br>{{gameService.time}} mins</h2>
    <ul class="choiceList">
      <li class="choiceItem" v-on:click="doActions(action)" v-for="action in step.actions" :key="action.path">
        <br>
        <div class="labelAction">
          {{ action.label }}
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

.gameHeader {
    min-width: 100vw;
    min-height: 100vh;
    background-image: url('../assets/pagejeux/gameBackground.jpg');
    background-size: cover;
    z-index: -1;
}

.gameTitle {
  padding-top: 200px;  
  font-size: 40px;
  color: white;
  width: 60vw;
  margin: 0 auto; 
  text-align: center;
}

.gameTime {
  position: absolute; 
  top: 5%;
  left: 2%;
  font-size: 35px;
  color: white;
}
.choiceList {
  display: flex;
  justify-content: center;
  position: relative;
  width: 1000px;
  margin: 0 auto;
  padding-left: 50px;
  padding-top: 100px;
}

.choiceLabel {
  position: absolute;
  margin-left: 50px;
  font-size: 2.2rem;
  justify-content: center;
  padding-left: 60px;
  cursor: pointer;
}

.choiceItem {
  margin-right: 100px;
  margin-left: 100px;
    color: #E028DC;
    background-color: black;
    width: 400px;
    height: 100px;
    border: 2px solid;
    border-color: #E028DC;
    justify-content: center;
    text-align: center;
    border-radius: 60px;
    cursor: pointer;
}

li {
  animation: fadeIn 0.5s linear;
  
}


.labelAction {
  margin-top: 20px;
  font-size: 22px;
  padding-left: 10px;
  padding-right: 10px;
  cursor:pointer;
}
</style>


<script>
import gameService from '../services/gameService';
import game from '../data.json';
export default {
  data() {
    return {
      actualTime: this.actualtime,
      gameService: gameService,
      step: this.getStep(), 
      character : '#parisian'
    };
  },
  mounted() {
    console.log('Mounted')
    this.character = gameService.characterChoice;
    console.log(this.character);
  },
  watch: {
    '$route.params.id' (to, from) {
      this.step = this.getStep()
    }
  },
  methods: {
    getStep() {
      return game.steps.find(step => step.id === parseInt(this.$route.params.id))
    },
    doActions(action) {
      if (action.path) {
        this.$router.push({params: {id: action.path}})
      }
      var char = document.querySelector('.character');
      
      if (action.test === 'test') {
        char.style.opacity = '1';
      }

      // LOCALSTORAGE
      if ((action.label === 'Pas écouteurs' || action.label === 'Gauche') && localStorage.getItem('asset') === 'newspaper') {
        this.$router.push({path: '/game/14'})
      }
      if ((action.label === 'Taxi' || action.label === 'Uber') && localStorage.getItem('asset') === 'newspaper') {
        this.$router.push({path: '/game/16'})
      }
      if (action.asset === "spill") {
        localStorage.setItem('asset', 'spill')
        console.log(localStorage)
      }
      // if (localStorage.getItem('character') === 'backpacker') {
      //   this.character = '#backpacker'
      // }
      console.log(this.character)
      // FIN déterminée par phone || newspaper 
      if (action.category === 'win/lose') {
        if (localStorage.getItem('asset') === 'spill') {
          this.$router.push({path: '/lose'})
        }
        if (localStorage.getItem('asset') === '') {
          this.$router.push({path: '/win'})
        }
      }
      // Écrans de fin Win || Lose
      if (action.category === 'win') {
        this.$router.push({path: '/win'})
      }
      if (action.category === 'lose') {
        this.$router.push({path: '/lose'});
        gameService.endContent = action.loseSentence;
      }
      // Qd on choisi Eau || Journal => item ds localStorage => direction la même frame
      if (action.category === 'sameGoal') {
        this.$router.push({path: '/game/14'})
      }
      // COUNTER
      if(action.category === 'wasteTime') {
        localStorage.setItem('time', 4)
        this.actualTime= localStorage.setItem('time', -5)
        gameService.time += 4;
        gameService.actualTime -= 5;
      }
      if(action.category === 'wasteMoreTime') {
        localStorage.setItem('time', 5)
        this.actualTime= localStorage.setItem('time', -5)
        gameService.time += 5;
        gameService.actualTime -= 5;
      }
      if(action.category === 'gainTime') {
        localStorage.setItem('time', -4)
        this.actualTime= localStorage.setItem('time', -5)
        gameService.time += -4;
        gameService.actualTime -= -4;
      }
      if(action.category === 'gainMoreTime') {
        localStorage.setItem('time', -5)
        this.actualTime= localStorage.setItem('time', -5)
        gameService.time += -5;
        gameService.actualTime -= -5;
      }
      if(action.category === 'wasteLotTime') {
        localStorage.setItem('time', 10)
        this.actualTime= localStorage.setItem('time', 10)
        gameService.time += 10;
        gameService.actualTime -= -10;
      }
      if(action.category === 'time') {
        localStorage.setItem('time', 2)
        this.actualTime= localStorage.setItem('time', 2)
        gameService.time += 2;
        gameService.actualTime -= -2;
      }
      if (gameService.actualTime >= gameService.maxTime) {
        this.$router.push({path: '/lose'})
      }
    }
  },
}
</script>