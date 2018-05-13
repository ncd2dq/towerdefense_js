let Canvas_Width = 1600;
let Canvas_Height = 800;

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
    
    if(bullets.length != 0){
        for(let i = 0; i < bullets.length; i++){
            bullets[i].run();
        }
    }
    //frameRate(15);
    
}


// User input
function keyPressed(){
    if (keyCode === LEFT_ARROW){

    } else if (keyCode === RIGHT_ARROW){

    } else if (keyCode === DOWN_ARROW){

    } else if (keyCode === UP_ARROW){
        
    } else if (keyCode == 32){ //the spacebar

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