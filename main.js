const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");
var images = {fish:document.getElementById("fish"),ocn:document.getElementById("ocn"),fr:document.getElementById("fr")};
var project = {titleY:0,time:100,key:"right"};
var p = {x:100,y:100};
var pt = {x:100,y:200};

let leftKeyPresed = false;
let rightKeyPressed = false;
let upKeyPressed = false;
let downKeyPressed = false;
//Player 2
let aKeyPressed = false;
let dKeyPressed = false;
let wKeyPressed = false;
let sKeyPressed = false;
class Fish{
    draw(x,y){
        if(project.key == "right"){
            c.drawImage(images.fish,x,y,150,150);
        }
        else{
            c.drawImage(images.fr,x,y,150,150);
        }
    }
}
function clear(){
    c.fillStyle = "indigo";
    c.fillRect(0,0,720,480);
}
function ocean(){
    c.globalAlpha = "0.3";
    //c.fillStyle = "#0000cc"; 
    //c.fillRect(0,project.titleY+100,720,480);
    c.drawImage(images.ocn,0,project.titleY+100,720,480);
    c.globalAlpha = "0.7";
    c.fillStyle = "black";
    c.fillRect(0,0,720,480);
    c.globalAlpha = "1";
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
const fish = new Fish();
const fishy = new Fish();
function redraw(){
    clear();
    fish.draw(p.x,p.y);
    fishy.draw(pt.x,pt.y);
    ocean();
}
redraw();
window.main = function (){
    window.requestAnimationFrame(main);
    redraw();
    p.y += 1;
    pt.y +=1;
    document.addEventListener('keydown',keyPressed);
    document.addEventListener('keyup',keyReleased);
    project.titleY += Math.sin(0+(project.time*-0.5)*0.5);
    project.time += 0.5;
    playerMove();
    redraw();
    if(p.y >= 433||pt.y >= 433){
        alert("U ded mate");
    }
}
main();