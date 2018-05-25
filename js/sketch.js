function setup() {
    createCanvas(Canvas_Width, Canvas_Height);
}

let Canvas_Width = 1200;
let Canvas_Height = 650;
let FPS = 60;

//final variables
let g = new Game(); //Handles level up, score, game data, allow pausing, ect.
let bullets = [];
let t = new Tower(Canvas_Width, Canvas_Height);
let m =  [ {location:new Vector(Canvas_Width / 2, Canvas_Height / 2), radius: 10} ]; //Just incase the mouse ins't on screen yet, weapons will have a default rotation
let Spawn_Radius = Canvas_Height / 2;
let initial_spwn = true;
//end final


//Testing variables
let f_enemies = []
let p = new Flock();
let obstacles = [];

function draw() {
    background(100, 100, 125);
    if (initial_spwn){
        for(let i = 0; i < 25; i++){
            f_enemies.push(new SimpleEnemy(t));
        }
        initial_spwn = false;
    }
    
    //Have the mouse location always being recorded so all guns can rotate properly
    if(mouseX){
        m = [{location:new Vector(mouseX, mouseY), radius:10}];
    }
    
    //Run the Tower
    t.run(m[0].location);
    
    //Draw the bullets to screen
    if(bullets.length != 0){
        for(let i = 0; i < bullets.length; i++){
            bullets[i].run();
        }
    }
    //Remove offscreen or crashed bullets
    bullets_removal(bullets);
    
    //Remove enemies that hit the tower
    simple_enemy_crash_tower(f_enemies);
    
    //Show Cooldowns + game score
    g.run(t.weapons);
    
    frameRate(FPS);
    //Testing code
    p.run(m, obstacles);
    
    for(let i = 0; i < f_enemies.length; i++){
        f_enemies[i].run();
    }

    
    //Allow for initial instruction screen / pausing the game
    if(g.paused){
        g.pause();
    }
    
}


// HELPER FUNCTIONS ---
function bullets_removal(bullet_list){
    //Removes if offscreen and if crashed
    for(let i = bullet_list.length - 1; i >= 0; i--){
        if(bullet_list[i].location.x >= Canvas_Width || bullet_list[i].location.x <= 0
          || bullet_list[i].location.y <= 0 || bullet_list[i].location.y >= Canvas_Height || bullet_list[i].crashed){
            bullet_list.splice(i, 1);
        }
    }
}

function simple_enemy_crash_tower(s_enemy_list){
    for(let i = s_enemy_list.length - 1; i >= 0; i--){
        if(s_enemy_list[i].crashed){
            t.health -= s_enemy_list[i].dmg;
            s_enemy_list.splice(i, 1);
        }
    }
}


// USER INPUT FUNCTIONS ---
function keyPressed(){
    if (keyCode === LEFT_ARROW){

    } else if (keyCode === RIGHT_ARROW){

    } else if (keyCode === DOWN_ARROW){

    } else if (keyCode === UP_ARROW){
        
    } else if (keyCode == 32){ //the spacebar
        t.change_weapon();

    } else if (keyCode == 80){ //the 'p' key
        if(g.paused){
            g.paused = false;
        } else {
            g.paused = true;
        }
        g.pause();
    }
}

function keyReleased(){
    if (keyCode === LEFT_ARROW){

    } else if (keyCode === RIGHT_ARROW){

    } else if (keyCode === UP_ARROW || keyCode === DOWN_ARROW){

    } else if (keyCode == 32){

    }
}

function mousePressed(){
    t.fire(new Vector(mouseX, mouseY), bullets);
}

function mouseReleased(){
    t.fire(new Vector(mouseX, mouseY), bullets);
    
}


/*function mouseDragged(){
    console.log(mouseX, mouseY);
    t.fire(new Vector(mouseX, mouseY), bullets);
}*/
