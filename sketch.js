var princeBody;
var princeHead;
var ichigoBody;
var ichigoHead;
var juneBody;
var juneHead;
var song;
var h; //head
var b; //body

function preload()
{
  princeBody = loadImage("assets/body2.png");
  princeHead = loadImage("assets/head2.png");
  ichigoBody = loadImage("assets/body1.png");
  ichigoHead = loadImage("assets/head1.png");
  juneBody = loadImage("assets/body3.png");
  juneHead = loadImage("assets/head3.png");

  song = loadSound("assets/lonelyrollingstar.mp3");
}

function setup()
{
  createCanvas(1000, 700);
  background(242, 233, 247);
  imageMode(CENTER);

  song.setVolume(0.1);
  song.loop();
}

function draw()
{

}

function mouseReleased()
{
  background(242, 233, 247);

  h = random(0,3);
  b = random(0,3);

  //head
  if(h > 0 && h < 1)
  {
    image(princeBody, 500, 450);
  }
  if(h > 1 && h < 2)
  {
    image(ichigoBody, 500, 450);
  }
  if(h > 2 && h < 3)
  {
    image(juneBody, 500, 450);
  }

  //body
  if(b > 0 && b < 1)
  {
    image(princeHead, 500, 80);
  }
  if(b > 1 && b < 2)
  {
    image(ichigoHead, 500, 80);
  }
  if(b > 2 && b < 3)
  {
    image(juneHead, 500, 80);
  }
}
