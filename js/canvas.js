function draw(){
    var canvas = document.getElementById('canvas');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    var wid=document.documentElement.clientWidth;
    var hei=document.documentElement.clientHeight;
    canvas.style.width=wid+"px";
    canvas.style.height=hei+"px";
    ctx.beginPath();
    ctx.lineJoin="round";
    ctx.setLineDash([20,10]);
    ctx.strokeStyle="#ff9292";
    ctx.lineWidth=6;
    ctx.stroke();
    ctx.beginPath();
    ctx.stroke();
    ctx.beginPath();
    ctx.setLineDash([0,0]);
    ctx.strokeStyle="#ef6464";
    ctx.stroke();
    ctx.beginPath();
    ctx.stroke();
    let countx1=1290;
    let countx2=1290;
    let county2=900;
    let k1=330.9756/(1451.7255-1290);
    let k2=(476.1224-900)/(1122.5849-1290);
    let b2=900-1290*k2;
    let b1=-1290*k1;
    const d=29.95371;
    const d2=33.902;
    let drawanimation1;
    let drawanimation2;
    let drawanimation3;
    let time=0;
    let num=0;
    function f1(x){
        return k1*x+b1;
    }
    function f2(x){
        return k2*x+b2;
    }
    function draw1(){
        function huatu1(countx1,speed){
            if(countx1>=1451){
                clearInterval(drawanimation1);
            }else if(f1(countx1)%d<=10){

            }else{
                ctx.beginPath();
                ctx.moveTo(countx1-speed, f1(countx1-speed));        
                ctx.lineTo(countx1, f1(countx1));
                ctx.stroke();
            }
        }
        if(countx1<=1330){
            countx1+=1;
            huatu1(countx1,1);
        }else if(countx1<=1410){
            countx1+=2;
            huatu1(countx1,2);
        }else{
            countx1+=1;
            huatu1(countx1,1);
        }
    }
    function draw2(){
        function huatu2(countx2,speed){
            if(countx2<=1122){
                clearInterval(drawanimation2);
            }else if(f2(countx2)%d2<=11){

            }else{
                ctx.beginPath();
                ctx.moveTo(countx2-speed, f2(countx2-speed));        
                ctx.lineTo(countx2, f2(countx2));
                ctx.stroke();
            }
        }
        if(countx2>=1260){
            countx2-=1;
            huatu2(countx2,1);
        }else if(countx2>=1150){
            countx2-=2;
            huatu2(countx2,2);
        }else{
            countx2-=1;
            huatu2(countx2,1);
        }
    }
    function draw3(){
        time+=0.008;
        num+=1;
        if(time<2.008){
            if(time<=1){
                if(time%(4/76)<=(1/76)){
                }else{
                    ctx.beginPath();
                    ctx.arc(1290,410,180,(time+0.82)*Math.PI,(time+0.83)*Math.PI);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(1290,410,180,(time+1.82)*Math.PI,(time+1.83)*Math.PI);
                    ctx.stroke();
                }
            }
            ctx.beginPath();
            ctx.arc(1290,410,60,0*Math.PI,time*Math.PI);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(1290,410,120,-(time+0.01)*Math.PI,-time*Math.PI);
            ctx.stroke();
        }else{
            clearInterval(drawanimation3);
            console.log(num);//251*5
        }        
    }
    setTimeout(function(){drawanimation3=setInterval(draw3,5); },1172); 
    setTimeout(function(){drawanimation2=setInterval(draw2,5); },500);  
    setTimeout(function(){drawanimation1=setInterval(draw1,5); },500);  
    ctx.closePath();
}
draw();
function p(a){
    return a*a;
}
