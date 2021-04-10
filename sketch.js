var hynpoticball;
var database;
var position


function setup(){
    //create a database
    database = firebase.database();
    createCanvas(500,500);
    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";


   var hypnoticPosition=database.ref('ball/position');
   hypnoticPosition.on("value",readPosition,showError)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
         writePosition(0,+1);
    }
    drawSprites();
}


//update and show to all players
function writePosition(x,y){
    //set it to a new value
    database.ref('ball/position').set({
        'x': position.x + x ,
        'y': position.y + y
      })
}

//we are reading position of the ball
function readPosition(data){
    position = data.val();
    console.log(position.x);
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;
  }
  
  function showError(){
    console.log("Error in writing to the database");
  }