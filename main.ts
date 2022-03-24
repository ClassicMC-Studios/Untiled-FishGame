const es = new Es();
var images = {fish:document.getElementById("fish"),ocn:document.getElementById("ocn"),fr:document.getElementById("fr"),
              kelp:document.getElementById("kelp"),fishy:document.getElementById("fishy"),t:document.getElementById("t"),
              can:document.getElementById("can"),bag:document.getElementById("bag"),lc:document.getElementById("lc")};
var p = {x:250,y:100};
var pt = {x:250,y:150};
let kelpPOS = [es.random(720),es.random(720)];
let canzPOS = [es.random(400)];
let canzPOST = [es.random(400)];
let trashTYPE = es.random(3);
//To let trash type be a 2 or a 1 only
if(trashTYPE == 0){
    trashTYPE++;
}
if(trashTYPE >= 3){
    trashTYPE =2;
}
let cpx = 700
let cpxl = -100;
let leftKeyPresed = false;
let rightKeyPressed = false;
let upKeyPressed = false;
let downKeyPressed = false;
let darkMode = false;
let hitboxQ = false;
var project = {titleY:80,time:0,scene:0,triggered:true};    
//Player 2
let aKeyPressed = false;
let dKeyPressed = false;
let wKeyPressed = false;
let sKeyPressed = false;
//To correctly start the game
let spaceKeyPressed = false;
//Intervals
let nC = setInterval(inter,1);
function inter(){
    //Updated
    if(project.scene == 1){
        //New Canz
        cpx--;
        cpxl ++;
    }
    if(cpx <= -10){
        cpx = 700;
        canzPOS[0] = es.random(400);
        trashTYPE = es.random(3);
        if(trashTYPE == 0){
            trashTYPE++;
        }
        if(trashTYPE >= 3){
            trashTYPE =2;
        }
    }
    if(cpxl >= 710){
        cpxl = 0;
        canzPOST[0] = es.random(400);
        trashTYPE = es.random(3);
        if(trashTYPE == 0){
            trashTYPE++;
        }
        if(trashTYPE >= 3){
            trashTYPE =2;
        }
    }
}
//for mouse click detection
var square = {
	x:250,
	y:350,
	width:200,
	heigth:100
};
class Kelp{
    constructor(x,y,w,h){
        es.image(images.kelp,x,y,w,h);
    }
}
class Canz{
    constructor(x,y){
        if(trashTYPE == 1){
            es.image(images.can,x,y,100,100);
        }
        if(trashTYPE == 2){
            es.image(images.bag,x,y,100,100);
        }
    }
}
class Canzl{
    constructor(x,y){
        if(trashTYPE == 1){
            es.image(images.can,x,y,100,100);
        }
        if(trashTYPE == 2){
            es.image(images.bag,x,y,100,100);
        }
    }
}          
es.background("indigo");       
function drawPlayer(x,y,type=1){ 
    if(type == 1){      
        es.image(images.fish,x,y,150,150);     
    }
    else{
        es.image(images.fishy,x,y,150,150);   
    }
}      
function drawPlayerTwo(x,y){       
    es.image(images.fishy,x,y,150,150);     
}      
function drawOcean(){
    es.image(images.ocn,0,project.titleY,720,480,0.4);
    es.rect(0,0,720,480,"#000000",0.5);
    if(project.scene == 0){
        es.image(images.t,190,50,300,150,1);
    }
}   
function dark(){
    if(!darkMode){
        es.rect(0,0,720,480,"#000000",0.5);
        document.body.style.background = "black";
    }
    else{
        document.body.style.background = "white";
    }
}
function drawHBS(){
    if(hitboxQ){
        es.drawHitbox(cpx+25,canzPOS[0]+10,50,80);
        es.drawHitbox(cpxl+25,canzPOST[0]+10,50,80);
        es.drawHitbox(p.x+20,p.y+30,110,70);  
        es.drawHitbox(pt.x+20,pt.y+30,110,70);
    }
}
function drawPL(x,y,w,h,opc){
    c.globalAlpha = opc;
    c.drawImage(images.lc,x,y,w,h);
    c.globalAlpha = 1;
}
function redraw(){
    if(project.scene == 0){
        es.background("indigo");  
        new Kelp(80,330,150,150);
        new Kelp(10,310,170,170);
        new Canz(650,400);
        drawPL(100,0,500,300,1);
        es.text("A game by,ClassicMC alt for light mode",230,460,"skyblue",0.3);
        es.text("Space to beign",270,430,"skyblue");
        drawOcean();
        dark();
    }
    if(project.scene == 1){
        es.background("indigo"); 
        drawPlayer(p.x,p.y);
        drawPlayerTwo(pt.x,pt.y);
        drawHBS();
        new Kelp(kelpPOS[0],310,170,170);
        new Kelp(kelpPOS[1],330,150,150);
        new Canz(cpx,canzPOS[0]);
        new Canz(cpxl,canzPOST[0]);
        drawOcean();
        dark();
    }
}
//Just a whole buch of garbage to get the movement working correctly
function keyPressed(evt){
    if(evt.keyCode == 32){
        spaceKeyPressed = true;
    }
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
    if(evt.keyCode == 32){
        spaceKeyPressed = false;
    }
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
    if(spaceKeyPressed){
        project.scene = 1;
        redraw();
    }
    if(leftKeyPressed == true&&p.x >= -77){
        p.x -= 3;
    }
    if(rightKeyPressed == true&&p.x <= 631){
        p.x += 3;
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
    if(aKeyPressed&&pt.x >= -77){
        pt.x -= 3
    }
    if(dKeyPressed&&pt.x <= 631){
        pt.x += 3;
    }
}
document.addEventListener('keydown',function (evt){
    //Triggered with forward slash
    if(event.keyCode == 191){
        //es.print(trashTYPE)
        //es.print(p.x+"p1  2p"+pt.x)
        if(!hitboxQ){
            hitboxQ = true;
        }
        else{
            hitboxQ = false;
        }
    }
    if(event.keyCode == 18){
        if(!darkMode){
            darkMode = true;
        }
        else{
            darkMode = false;
        }
    }
});
redraw();
//Main game loop
window.main = function (){
    window.requestAnimationFrame(main);
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
        p.x = 100;
        p.y = 100;
        pt.x = 100;
        pt.y = 150;
        project.scene == -1;
        redraw();
        //Prevent Held Keys
        leftKeyPresed = false;
        rightKeyPressed = false;
        upKeyPressed = false;
        downKeyPressed = false;
        wKeyPresed = false;
        aKeyPressed = false;
        sPressed = false;
        dPressed = false;
    }
    if(es.checkCollisions(cpx+25,canzPOS[0]+10,50,80,p.x+20,p.y+30,110,70)||es.checkCollisions(cpx+25,canzPOS[0]+10,50,80,pt.x+20,pt.y+30,110,70)){
        p.x = 250;
        p.y = 100;
        pt.x = 250;
        pt.y = 150;
        cpx = 700;
        cpxl = 700;
        canzPOS[0] = es.random(400);
        canzPOST[0] = es.random(400);
        project.scene == -1;
        redraw();
        //Prevent Held Keys
        leftKeyPresed = false;
        rightKeyPressed = false;
        upKeyPressed = false;
        downKeyPressed = false;
        wKeyPresed = false;
        aKeyPressed = false;
        sPressed = false;
        dPressed = false;
    }
    if(es.checkCollisions(cpxl+25,canzPOST[0]+10,50,80,p.x+20,p.y+30,110,70)||es.checkCollisions(cpxl+25,canzPOST[0]+10,50,80,pt.x+20,pt.y+30,110,70)){
        p.x = 250;
        p.y = 100;
        pt.x = 250;
        pt.y = 150;
        cpx = 700;
        cpxl = 700;
        canzPOS[0] = es.random(400);
        canzPOST[0] = es.random(400);
        project.scene == -1;
        redraw();
        //Prevent Held Keys
        leftKeyPresed = false;
        rightKeyPressed = false;
        upKeyPressed = false;
        downKeyPressed = false;
        wKeyPresed = false;
        aKeyPressed = false;
        sPressed = false;
        dPressed = false;
    }
    redraw();
    document.addEventListener('keydown',keyPressed);
    document.addEventListener('keyup',keyReleased);
    playerMove();
}
main();