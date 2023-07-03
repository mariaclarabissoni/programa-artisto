function setup() {
  createCanvas(600, 600);
  background("rgba(0,0,0.95)");
} 
function draw() {
  fill("pink");
  if(mouseIsPressed)
 rect(mouseX,mouseY,20,35);  
stroke("black");
}