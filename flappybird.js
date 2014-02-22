var rectY1 = 0;
var rectX1 = 1500;
//Obstacle 2 Variables 
var rectY2 = 199;
var rectX2 = 1500;
//Obstacle 3 Variables
var rectY3 = 0;
var rectX3 = 1700;
//Obstacle 4 Variables 
var rectY4 = 279;
var rectX4 = 1700;
//Dude Variables 
var dudeX = 75;
var dudeY = 75;
var dudeSize = 30;
var dudeYSpeed = 5;
var dudeXSpeed = 0;
var dudeJumping = false;
//Menu Variables 
var menu = true;
var play = false;
//Enviornment Variables 
var ground = 415;
var jumpSpeed = -10;
var gravity = 1.8;
//Other Variables
var score = 0;
var mouseDown = 0; 
var dead = false;
var localStorage = (function(){return this;})().localStorage;
if(!localStorage.bestScore){
    localStorage.bestScore = 0;
}

textAlign(CENTER, CENTER);

var mousePressed = function(){
mouseDown = true;
};

var keyPressed = function(){
if (dead === true){
Program.restart();
}    
};

var die = function(){
textSize(50);
noStroke();
fill(255, 255, 255);
rect(61,65,44,40);
rect(105,68,70,37);
rect(163,65,46,40);
rect(220,65,44,40);
rect(263,68,79,37);
rect(286,65,44,40);
fill(255, 120, 0);//Orange
text("Game Over", 200,85);
strokeWeight(3);
stroke(0, 0, 0);
fill(175, 165, 85);//Tan
rect(50,125,300,150);
strokeWeight(3);
stroke(155, 135, 65);//Tan
rect(60,135,280,130);
fill(175, 125, 25);//Tan
textSize(25);
text("Score", 125,175);
text("Best", 275,175);
fill(255, 255, 255);//White
text(score, 125,225);
text("Click any Key to Play Again",200,325);
if(score>localStorage.bestScore){
localStorage.bestScore = score;
}
text(localStorage.bestScore, 275,225);
text("Click any Key to Play Again",200,325);
};

var mouseReleased = function(){
mouseDown = false;
};

var mouseEvents = function(){

if(mouseDown && dudeJumping === false){
dudeJumping = true;
dudeYSpeed = jumpSpeed;
} 
else{
dudeY += dudeYSpeed;
dudeYSpeed += gravity;
dudeJumping=false;
} 

dudeX += dudeXSpeed;
};

var draw = function() {

/**Start Game**/
if(frameCount>100){
mouseEvents();
}

/**Background**/
background(55, 160, 200);
noStroke();
fill(175, 165, 85);//Tan
rect(0,365,400,35);
fill(9, 125, 9);//Green
rect(0,350,400,12);
fill(145, 135, 50);//Tan
rect(0,362,400,4);
fill(50, 150, 20);//Green

for (var x = 10; x < 400; x += 25){
rect(x,350,12,4);
rect(x-5,354,12,4);
rect(x-10,358,12,4);
}

stroke(0, 0, 0);//Black
strokeWeight(2);
line(0,349,400,349);

/**Ready, Set, Go!**/
textSize(25);
fill(255, 255, 255);

if(frameCount>0&&frameCount<50){
text("Ready",200,150);
}

if(frameCount>50&&frameCount<100){
text("Set",200,150);   
}

if(frameCount>100&&frameCount<125){
text("Go!", 200,150);   
}

/**Obstacles**/
fill(0, 125, 0);//Green
stroke(0, 0, 0);//Black
strokeWeight(2);
//Obstacle 1
rect(rectX1,rectY1,50,70);//Obstacle Bottom 1
rect(rectX1-2,rectY1+50,54,20);//Obstacle Top 1
//Obstacle 2
rect(rectX2,rectY2,50,150);//Obstacle Bottom 2
rect(rectX2-2,rectY2,54,20);//Obstacle Top 2
//Obstacle 3 
rect(rectX3,rectY3,50,150);//Obstacle Bottom 3
rect(rectX3-2,rectY3+130,54,20);//Obstacle Top 3
//Obstacle 4
rect(rectX4,rectY4,50,70);//Obstacle Bottom 4
rect(rectX4-2,rectY4,54,20);//Obstacle Top 4

/**Speed**/
rectX1-=6.5;
rectX2-=6.5;
rectX3-=6.5;
rectX4-=6.5;

/**Neverending Background**/
//If it hits the left of the screen...
if(rectX1<-20)
{rectX1=400;
score++;
}

if(rectX2<-20)
{rectX2=400;
}

if(rectX3<-20)
{rectX3=400;
score++;
}

if(rectX4<-20)
{rectX4=400;
}

/**Dude**/
stroke(0, 0, 0);//Balck
strokeWeight(1);
fill(255, 0, 0);//Red
ellipse(dudeX,dudeY,dudeSize,dudeSize);//Body
noStroke();
fill(255, 255, 255);//White
ellipse(dudeX+6,dudeY-2,12,12);//Eye 
fill(0, 0, 0);//Black
ellipse(dudeX+7,dudeY-2,8,8);//Pupil

/**Score**/
fill(255, 255, 255);//White
textSize(25);
text("Score: " + score, 200,25);

/**Collision**/
if(
//First Obstacle
dudeX+dudeSize/2>rectX1&&dudeX-dudeSize/2<rectX1+50&&
dudeY-dudeSize/2<70||
//Second Obstacle
dudeX+dudeSize/2>rectX2&&dudeX-dudeSize/2<rectX2+50&&
dudeY+dudeSize/2>200||
//Third Obstacle
dudeX+dudeSize/2>rectX3&&dudeX-dudeSize/2<rectX3+50&&
dudeY-dudeSize/2<150||
//Fourth Obstacle
dudeX+dudeSize/2>rectX4&&dudeX-dudeSize/2<rectX4+50&&
dudeY+dudeSize/2>280
){

dudeY+=35;    
jumpSpeed=35;
}
   
if(dudeY+dudeSize/2>341){
dead = true;
noLoop();
die();
}
};