const canvas = document.getElementById("myCanvas");
const c = canvas.getContext("2d");
class Es{
    random(max) {
        return Math.floor(Math.random() * max);
    }
    end(){
        let run = true;
        this.clear();
        while(running){
            //This will break the game.
        }
    }
    print(said){
        alert(said);
    }
    rect(x,y,w,h,color,opacity = 1){
        c.globalAlpha = opacity;
        c.fillStyle = color;
        c.fillRect(x,y,w,h);
        c.globalAlpha = 1;
    }
    eclipse(x,y,rad,color,opacity =1){
        c.globalAlpha = opacity;
        c.beginPath();
        c.arc(x,y,rad,0,Math.PI *2,);
        c.fillStyle = color;
        c.fill();
        c.globalAlpha = 1;
    }
    clear(){
        c.fillStyle = "white";
        c.fillRect(0,0,canvas.width,canvas.height);
    }
    background(color){
        c.fillStyle = color;
        c.fillRect(0,0,canvas.width,canvas.height);
    }
    image(img,x,y,w,h,opacity=1){
        c.globalAlpha = opacity;
        c.drawImage(img,x,y,w,h);
        c.globalAlpha = 1;
    }
    text(text,x,y,color,opacity=1){
            c.globalAlpha = opacity;
            c.fillStyle = color;
            c.font = 'bold 24px sans serif';
            c.fillText(text,x,y);
            c.globalAlpha = 1;
    }
    checkCollisions(x,y,width,height,xx,yy,ww,hh){
        if(x < xx + ww &&
        x + width > xx &&
        y < yy + hh &&
        y + height > yy){
            return true;
        }  
    }   
}