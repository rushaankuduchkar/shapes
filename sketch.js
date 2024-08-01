function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
}

function draw() {
  background(200);
  
  // Draw rectangle
  fill(255, 3, 3);
  rect(50, 50, 150, 100);

  // Draw ellipse
  fill(255, 217, 3);
  ellipse(300, 150, 100, 100);

  // Draw line
  stroke(0, 0, 0); 
  strokeWeight(4);
  line(50, 250, 250, 250);

  fill(20, 3, 255);
  stroke(0); 
  strokeWeight(2); 
  triangle(400, 300, 500, 200, 600, 300); 
}

// Resize canvas when the window size changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}