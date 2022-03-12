const es = new Es();
var images = {fish:document.getElementById("fish"),ocn:document.getElementById("ocn"),fr:document.getElementById("fr"),
              kelp:document.getElementById("kelp"),fishy:document.getElementById("fishy"),t:document.getElementById("t")};
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
//for mouse click detection
var square = {
	x:250,
	y:350,
	width:200,
	heigth:100
};
class Kelp{
    constructor(x,y,w,h){
        es.image(kelp,x,y,w,h);
    }
}
var project = {titleY:80,time:0,scene:0,triggered:true};              
es.background("indigo");       
function drawPlayer(x,y,type=1){ 
    if(type == 1){      
        es.image(fish,x,y,150,150);     
    }
    else{
        s.image(fishy,x,y,150,150);   
    }
}      
function drawPlayerTwo(x,y){       
    es.image(fishy,x,y,150,150);     
}      
function drawOcean(){
    es.image(images.ocn,0,project.titleY,720,480,0.4);
    es.rect(0,0,720,480,"#000000",0.5);
    if(project.scene == 0){
        es.image(t,190,50,300,150,1);
    }
}   
function redraw(){
    if(project.scene == 0){
        es.background("indigo");  
        new Kelp(80,330,150,150);
        new Kelp(10,310,170,170)
        es.text("A game by, ClassicMC",450,460,"skyblue");
        drawOcean();
        es.rect(0,0,720,480,"#000000",0.5);
    }
    if(project.scene == 1){
        es.background("indigo"); 
        drawPlayer(p.x,p.y);
        drawPlayerTwo(pt.x,pt.y);
        drawOcean();
        es.rect(0,0,720,480,"#000000",0.5);
    }
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
//For scene changes
document.addEventListener('keydown',function (evt){
    if(event.keyCode == 32){
        if(project.scene == 0){
            project.scene ++;
            redraw();
        }
    }
    if(event.keyCode == 191){
        es.print(p.y+"p1  2p"+pt.y)
    }
});
//Trying to add mouse stuff
/*
function isInside(pos, rect){
	return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.heigth && pos.y > rect.y
}
canvas.addEventListener('click', function(evt) {
    var mousePos = es.getMousePos(canvas, evt);
    if (isInside(mousePos,square)) {
		project.triggered = true;
    }
},false);
*/
redraw();
//Main game loop.
window.main = function (){
    window.requestAnimationFrame(main);
    if(project.scene ==1){
        document.addEventListener('keydown',keyPressed);
        document.addEventListener('keyup',keyReleased);
        playerMove();
    }
    project.titleY += Math.sin(0+(project.time*-0.5)*0.5);
    project.time += 0.5;
    if(project.scene == 1){
        p.y ++;
        pt.y ++;
    }
    redraw();
    if(!project.triggered){
        es.rect(square.x,square.y,square.width,square.heigth,"#00cc00",0.1);
    }
    if(p.y>=437||pt.y>=439){
        alert("ded");
        p.x = 100;
        p.y = 100;
        pt.x = 100;
        pt.y = 150;
        project.scene == -1;
        redraw();
    }
}
main();