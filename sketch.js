var canvas;
var music;
var G1,G2,G3,G4;
var box;





function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    //create 4 different surfaces
    G1=createSprite(200,200,20,70)
    G1.shapeColor("Blue");
    G2=createSprite(200,200,20,70)
    G2.shapeColor("Red");
    G3=createSprite(200,200,20,70)
    G3.shapeColor("Orange");
    G4=createSprite(200,200,20,70)
    G4.shapeColor("Cyan");



    //create box sprite and give velocity
    box=createSprite(random(20,750),30,30);
    box.velocityY=5;
    box.velocityX=5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
    createEdgeSprites();
    box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
      if(G1.isTouching(box) && box.bounceOff(G1)){

        box.shapeColor("Blue");

      }
      if(G2.isTouching(box) && box.bounceOff(G2)){

        box.shapeColor("Red");

      }
      if(G3.isTouching(box) && box.bounceOff(G3)){

        box.shapeColor("Orange");

      }
      if(G4.isTouching(box) && box.bounceOff(G4)){

        box.shapeColor("cyan");
        music.play();
        box.velocityX=0;
        box.velocityY=0;


      }




    drawSprites();
}
