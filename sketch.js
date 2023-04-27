
var trex;
var trex_corriendo;

var suelo;


function preload(){
  
  //-----cargamos todas las animaciones
  trex_corriendo = loadAnimation("trex1.png", "trex3.png", "trex4.png")

  //----cargamos el suelo
  suelo_del_juego= loadAnimation("suelo2.png") 
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite del t-rex.
  trex = createSprite(50,160, 40, 40)
  trex.addAnimation("trex_corriendo", trex_corriendo)

  //escala el dinosaurio a un tamaño adecuado
  trex.scale = 0.7;
  trex.x = 50;

  //----creas el borde del juego para que el trex no caiga
  bordes = createEdgeSprites();
  

  //------agregamos el suelo y lo animamos
  suelo =createSprite(0,180, 600,20)
  suelo.addAnimation("suelo_del_juego", suelo_del_juego)
 
}

function draw(){
  background("lightblue")
  drawSprites();

  //velocidad al saltar con la tecla espacio
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
    //para hacer que baje nuevamente
    trex.velocityY = trex.velocityY + 1;

    //-----lograr que trex no caiga
    trex.collide(bordes[3])

    //opcion final----trex choca contra el suelo
    trex.collide(suelo)
    

    //opcion para el suelo
    if(suelo.x > 0){
      suelo.x = suelo.width / 2
    }
}
