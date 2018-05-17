let Canvas_Width = 1200;
let Canvas_Height = 800;
let FPS = 60;

let g = new Game();

//final variables
let bullets = [];
//end final

let p = new Flock();
let obstacles = [];

let m =  [ {location:new Vector(0,0), radius: 10} ];
//To avoid bullets, you need to use the avoidForce method and give it avoidForce(unit that's avoiding something, the thing that it will avoid)
let t = new Tower(Canvas_Width, Canvas_Height);

function setup() {
    createCanvas(Canvas_Width, Canvas_Height);
}


function draw() {
    background(100, 100, 125);
    if(mouseX){
        m = [{location:new Vector(mouseX, mouseY), radius:10}];
    }
    t.run(m[0].location);
    p.run(m, obstacles);
    
    //handle_bullets
    if(bullets.length != 0){
        for(let i = 0; i < bullets.length; i++){
            bullets[i].run();
        }
    }
    bullets_removal(bullets);
    g.run(t.weapons);
    frameRate(FPS);
    
}

function bullets_removal(bullet_list){
    //Removes if offscreen and if crashed
    for(let i = bullet_list.length - 1; i >= 0; i--){
        if(bullet_list[i].location.x >= Canvas_Width || bullet_list[i].location.x <= 0
          || bullet_list[i].location.y <= 0 || bullet_list[i].location.y >= Canvas_Height || bullet_list[i].crashed){
            bullet_list.splice(i, 1);
        }
    }
}


// User input
function keyPressed(){
    if (keyCode === LEFT_ARROW){

    } else if (keyCode === RIGHT_ARROW){

    } else if (keyCode === DOWN_ARROW){

    } else if (keyCode === UP_ARROW){
        
    } else if (keyCode == 32){ //the spacebar
        t.change_weapon();

    } else if (keyCode == 80){ //the 'p' key

    }
}

function keyReleased(){
    if (keyCode === LEFT_ARROW){

    } else if (keyCode === RIGHT_ARROW){

    } else if (keyCode === UP_ARROW || keyCode === DOWN_ARROW){

    } else if (keyCode == 32){

    }
}

//function mouseDragged(){
//    console.log(mouseX, mouseY);
//}

function mousePressed(){
    t.fire(new Vector(mouseX, mouseY),bullets);
}

function mouseReleased(){
    
}