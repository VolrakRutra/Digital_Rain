function setup() {
  createCanvas(768, 768);
 frameRate(20);
}

function draw() {
  noStroke();

  for (let i = 0; i < 64; i++) {
    for (let j = 0; j < 64; j++) {
      fill(0, tan(millis())%255, (1/Math.sin(millis()))%255);
      rect(i*12, j*12, 12, 12);
    }
  }
}
