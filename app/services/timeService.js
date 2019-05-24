
class GameService {
    constructor() {
      this.actualTime = 0;
      this.maxTime = 20;
      this.time = 0; 
      this.endContent = `GAME OVER, tu t'es pissé dessus`;
      this.characterChoice = localStorage.getItem('character') || '#parisian';
    }
  
    counter() {
      this.actualTime++;
      this.time = this.actualTime / this.maxTime;
  
      if (this.actualTime >= this.maxTime) {
        
      } else {
        setTimeout(() => 
        this.counter(), 1000)
      }
    }
  
    // endLose() {
    //   this.endContent === 
    // }
  }
  
  export default new GameService();