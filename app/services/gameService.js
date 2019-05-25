class GameService {
    constructor() {
      this.actualTime = localStorage.getItem('time');
      this.maxTime = 20;
      this.time = 0; 
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