var canvas;
var music;
var box1

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    surface1 = createSprite(100,580,180,30);
    surface1.shapeColor = "blue"

    surface2 = createSprite(300,580,180,30);
    surface2.shapeColor = "yellow"

    surface3 = createSprite(500,580,180,30);
    surface3.shapeColor = "red"

    surface4 = createSprite(700,580,180,30);
    surface4.shapeColor = "green"

    //create box sprite and give velocity

    box = createSprite (400,300,30,30);
    box.velocityX=-4
    box.velocityY=4
    
   



}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
   if (box.isTouching(surface1)){
       box.shapeColor("blue")
   }


    drawSprites ();
;
    //add condition to check if box touching surface and make it box
}
