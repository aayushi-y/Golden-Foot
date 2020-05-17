class Form {

    constructor() {
      this.button = createButton('Enter the game');
    }
      
    hide(){
      
      this.button.hide();
    }
  
    display(){
  
      this.button.position(900,600);
      this.button.mousePressed(()=>{
  
        this.button.hide();
        player = new Player();
        gameState = 1;
      });
  
    }

    
  }
  