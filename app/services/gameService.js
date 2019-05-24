class GameService {
    constructor() {
      this.actualTime = localStorage.getItem('time');
      this.maxTime = 20;
      this.time = 0; 
      this.endContent = `GAME OVER, tu t'es pissé dessus`;
      this.characterChoice = localStorage.getItem('character') || '#soupe';
    }
  
    counter() {
      this.actualTime++;
      this.time = this.actualTime / this.maxTime;
  

    }
  
    // endLose() {
    //   this.endContent === 
    // }
  }
  
  export default new GameService();