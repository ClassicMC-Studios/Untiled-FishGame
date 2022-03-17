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
    ellipse(x,y,rad,color,opacity =1){
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
        else{
            return false;
        }
    }   
    line(x,y,xx,yy,w,color,opacity=1){
        c.globalAlpha = opacity;
        c.strokeStyle = color;
        c.lineWidth = w;
        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(xx,yy);
        c.stroke();
        c.globalAlpha = 1;
    }
    getMousePos(canvas, event) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }
    chooseRandom(x,y,z,d){
        let choosed = this.random(5);
        if(choosed == 0){choosed++;}
        if(choosed == 1){return x;}
        if(choosed == 2){return y;}
        if(choosed == 3){return z;}
        if(choosed == 4){return d;}
    }
}