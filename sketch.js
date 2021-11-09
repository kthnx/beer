var img1, img2, img3, img4;

var stage;

function preload() {
  img1 = loadImage('assets/dummy1.png');
  img2 = loadImage('assets/dummy2.png');
  img3 = loadImage('assets/dummy3.png');
  img4 = loadImage('assets/dummy4.png');
}

function setup() {
  createCanvas(375,812);
  stage=1;

}

function draw() {
  print("hello");

  background(200);

  if (stage ==1) {
    image(img1,0,0);
  } else if (stage ==2) {
    image(img2,0,0);
  } else if (stage ==3) {
    image(img3,0,0);
  } else if (stage ==4) {
    image(img4,0,0);
  }

}


function mousePressed() {
  if (stage==1){
    if (mouseX >18 && mouseX <180 && mouseY >400 && mouseY <648){
      stage = 2;
    } else if (mouseX >195 && mouseX <357 && mouseY >400 && mouseY <648){
      stage = 4;
    }

  } else if (stage ==2) {
    if (mouseX >28 && mouseX <121 && mouseY >404 && mouseY <497){
      stage = 3;
    } else if (mouseX >16 && mouseX <40 && mouseY >54 && mouseY <78){
      stage = 1;
    }

  } else if (stage ==3) {
    if (mouseX >16 && mouseX <40 && mouseY >54 && mouseY <78){
      stage = 2;
    }

  } else if (stage ==4) {
    if (mouseX >16 && mouseX <40 && mouseY >54 && mouseY <78){
      stage = 1;
    }

  }
}
