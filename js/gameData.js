class Game{
    constructor(){
        this.level = 0;
        this.score = 0;
        this.end_text = "Your Tower Was Destroyed!";
        this.instruction1 = "Press 'P' to play or pause at anytime";
        this.instruction2 = "Press 'SpaceBar' to change tower weapon";
        this.instruction3 = "Left-Click to fire or place a structure";
        this.instruction4 = "Aim with the mouse cursor";
    }
    
    show_gun_cool_downs(){
        
    }
    
    
    show(){
        //display level
        //display score
    }
    
    addPoint(){
        this.score++;
    }
    
    nextLevel(){
        this.level++;
    }
    
    gameOver(){
        
    }
    
    
    
}