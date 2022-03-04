const es = new Es();
var images = {fish:document.getElementById("fish"),ocn:document.getElementById("ocn"),fr:document.getElementById("fr"),
              kelp:document.getElementById("kelp")};
var p = {x:100,y:100};
var pt = {x:100,y:150};
let leftKeyPresed = false;
let rightKeyPressed = false;
let upKeyPressed = false;
let downKeyPressed = false;
//Player 2
let aKeyPressed = false;
let dKeyPressed = false;
let wKeyPressed = false;
let sKeyPressed = false;

var project = {titleY:80,time:0};              
es.background("indigo");       
function drawPlayer(x,y){       
    es.image(fish,x,y,150,150);     
}      
function drawPlayerTwo(x,y){       
    es.image(fish,x,y,150,150);     
}      
function drawOcean(){
    es.image(images.ocn,0,project.titleY,720,480,0.4);
    es.rect(0,0,720,480,"#000000",0.5);
}   
function redraw(){
    es.background("indigo"); 
    drawPlayer(p.x,p.y);
    drawPlayerTwo(pt.x,pt.y);
    drawOcean();
}
//Just a whole buch of garbage to get the movement working correctly
function keyPressed(evt){
    if(evt.keyCode == 37){
        leftKeyPressed = true;
    }
    if(evt.keyCode == 39){
        rightKeyPressed = true;
    }
    if(evt.keyCode == 38){
        upKeyPressed = true;
    }
    if(evt.keyCode == 40){
        downKeyPressed = true;
    }
    //Player 2
    if(evt.keyCode == 87){
        wKeyPressed = true;
    }
    if(evt.keyCode == 83){
        sKeyPressed = true;
    }
    if(evt.keyCode == 65){
        aKeyPressed = true;
    }
    if(evt.keyCode == 68){
        dKeyPressed = true;
    }

}
function keyReleased(evt){
    if(evt.keyCode == 37){
        leftKeyPressed = false;
    }
    if(evt.keyCode == 39){
        rightKeyPressed = false;
    }
    if(evt.keyCode == 38){
        upKeyPressed = false;
    }
    if(evt.keyCode == 40){
        downKeyPressed = false;
    }
    if(evt.keyCode == 87){
        wKeyPressed = false;
    }
    if(evt.keyCode == 83){
        sKeyPressed = false;
    }
    if(evt.keyCode == 65){
        aKeyPressed = false;
    }
    if(evt.keyCode == 68){
        dKeyPressed = false;
    }

}
function playerMove(){
    if(leftKeyPressed == true){
        p.x -= 3;
        //project.key = "left";
    }
    if(rightKeyPressed == true){
        p.x += 3;
        //project.key = "right";
    }
    if(upKeyPressed == true){
        if(p.y >= 73){
            p.y -= 3;
        }
    }
    if(downKeyPressed == true){
        p.y += 3;
    }
    //Player 2
    if(wKeyPressed){
        if(pt.y >= 73){
            pt.y -= 3;
        }
    }
    if(sKeyPressed){
        pt.y += 3;
    }
    if(aKeyPressed){
        pt.x -= 3
    }
    if(dKeyPressed){
        pt.x += 3;
    }
}
redraw();
window.main = function (){
    window.requestAnimationFrame(main);
    document.addEventListener('keydown',keyPressed);
    document.addEventListener('keyup',keyReleased);
    playerMove();
    project.titleY += Math.sin(0+(project.time*-0.5)*0.5);
    project.time += 0.5;
    p.y ++;
    pt.y ++;
    redraw();
}
main();