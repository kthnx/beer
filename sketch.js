var img1, img2, img3, img4;
var data1;
var quickS;
var stage;

var img3a, img3b, img3c;

function preload() {
  img1 = loadImage('assets/1.png');
  img2 = loadImage('assets/2.png');
  img3 = loadImage('assets/3.png');
  img4 = loadImage('assets/4.png');
  data1 = loadJSON('assets/breweries.json');
  quickS = loadFont('assets/Quicksand.ttf');

  img3a = loadImage('assets/3a.png');
  img3b = loadImage('assets/3b.png');
  img3c = loadImage('assets/3c.png');
}

function setup() {
  createCanvas(375,812);
  stage=1;



}

function draw() {
  fill(0);
  textFont(quickS);
  textSize(11);
//  textStyle(BOLD);
//  text(data1[0].name, 100, 100);

  background(200);

  if (stage ==1) {
    image(img1,0,0);


    // for( var i =0; i< data1.length ; i++){
    //
    // if (data1[i].city = 'los_angeles'){
    //   text(data1[i].name, 100, (20*i) +100);
    //   text(data1[i].city, 100, (20*i) +120);
    //   text(data1[i].brewery_type, 100, (20*i) +140);
    //   }
    //
    // }

    // for( var i =0; i<6 ; i++){
    //   text(data1[i].name, 100, (100*i)-50);
    //   text(data1[i].city, 100, (100*i)-30));
    //   text(data1[i].brewery_type, 100, (100*i)-10));
    // }

  } else if (stage ==2) {
    image(img2,0,0);
    text(data1[99].name,28, 514);
    text(data1[111].name,153, 514);
    text(data1[212].name,278, 514);

  } else if (stage ==3) {
    image(img3a,0,0);
    textSize(18);
    text(data1[99].name,18, 280);
    text(data1[99].brewery_type,18, 300);
  } else if (stage ==4) {
    image(img4,0,0);
  } else if (stage ==5) {
    image(img3b,0,0);
    textSize(18);
    text(data1[111].name,18, 280);
    text(data1[111].brewery_type,18, 300);
  } else if (stage ==6) {
    image(img3c,0,0);
    textSize(18);
    text(data1[212].name,18, 280);
    text(data1[212].brewery_type,18, 300);
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
    } else if (mouseX >153 && mouseX <246 && mouseY >404 && mouseY <497){
      stage = 5;
    } else if (mouseX >278 && mouseX <378 && mouseY >404 && mouseY <497){
      stage = 6;
    }

  } else if (stage ==3) {
    if (mouseX >16 && mouseX <40 && mouseY >54 && mouseY <78){
      stage = 2;
    }

  } else if (stage ==4) {
    if (mouseX >16 && mouseX <40 && mouseY >54 && mouseY <78){
      stage = 1;
    }

  } else if (stage==5) {
    if (mouseX >16 && mouseX <40 && mouseY >54 && mouseY <78){
      stage = 2;
    }
  } else if (stage==6) {
    if (mouseX >16 && mouseX <40 && mouseY >54 && mouseY <78){
      stage = 2;
    }
  }
}
