var apple = {//apple object
  x: floor(random(0,windowWidth/10)*10),
  y: floor(random(0,windowHeight/10)*10)
}
var snake = {//snake object
  x: [0],
  y: [0],
  xV: [10],
  yV: [0]
};
var lastKey;
var keys = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 0, 0);
  rect(apple.x,apple.y,10,10);//apple
  for(var i = 0;i < snake.x.length;i ++){
    rect(snake.x[i],snake.y[i],10,10);
    snake.x[i] += snake.xV[i];
    snake.y[i] += snake.yV[i];
    if(i > 0){
      snake.xV[i] = snake.xV[i-1];
      snake.yV[i] = snake.yV[i-1];
    }else{
      if(snake.x[i] === apple.x && snake.y[i] === apple.y){
        snake.x.push(snake.x[i]);
        snake.y.push(snake.y[i]);
        snake.xV.push(0);
        snake.yV.push(0);
      }
      if(keys[39]){
        lastKey = 39;
      }
      if(keys[37]){
        lastKey = 37;
      }
      if(keys[38]){
        lastKey = 38;
      }
      if(keys[40]){
        lastKey = 40;
      }
      if(lastKey === 39){//right
        snake.xV[i] = 10;
        snake.yV[i] = 0;
      }
      if(lastKey === 37){//left
        snake.xV[i] = -10;
        snake.yV[i] = 0;
      }
      if(lastKey === 38){//up
        snake.xV[i] = 0;
        snake.yV[i] = -10;
      }
      if(lastKey === 40){//down
        snake.xV[i] = 0;
        snake.yV[i] = 10;
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  keys[keyCode] = true;
}

function keyReleased(){
  keys[keyCode] = false;
}
