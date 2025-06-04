var timer = 10;
var score = 0;
var hitrn = 0;


// jun maa event listner cha hamle click garda tyo chalxa natra parent maa jancha

function increaseScore(){
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random() *10);
    document.querySelector("#hitvalue").textContent = hitrn;
}


function makebubble(){
    var clutter = "";
for(var i = 1; i<225; i++ ){
    var rn = Math.floor(Math.random()*10)    // math.floor le point maa auney lai hataucha. math.random chai point maa matra aucha
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtn").innerHTML = clutter;

}

function runtimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timervalue").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtn").innerHTML = `<h1>Game Over ! Kasto Cha Ta Game Sathi? <h1>`;
        }
        
        
    }, 1000);

}

document.querySelector("#pbtn")
.addEventListener("click", function(details){
    var clickednumber = Number(details.target.textContent);  //kun maa click vairacha vanera target le tha huncha
    // alert("chaliracha");    //textContent le text matra dincha....
    if(clickednumber === hitrn){
        increaseScore();
        makebubble();
        getNewHit();
    }

});


runtimer();
makebubble();
getNewHit();
