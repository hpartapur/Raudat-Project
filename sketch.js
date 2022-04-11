/* RAUDAT ADAB SCOREBOARD PROJECT


*/


var arabic;
var score_right;
var score_left;
var seconds;
var original_seconds;
var counting;
var clicktime;


function setup(){
    createCanvas(1024, 576);
    score_right=0;
    score_left=0;
    arabic=["يمين",
                "يسار",
                "روضة الادب الفاطمي",
    ]//Array of arabic words, easier to use variable than typing arabic inside code. 
    misra='';
    original_seconds=30;  //Total seconds in countdown timer, mutable.
    seconds=original_seconds //How many seconds left in the timer.
    counting=false;  //Has countdown started?
    
    kawakib=loadImage("kawakibcreations.png") //Logo
}
function draw(){
    background(245,222,179);
    textSize(70)
    fill(255,0,0)
    text(arabic[0],width*5.5/8, height*1.5/8)//Yameen
    
    fill(0,255,0)
    text(arabic[1],width*1/8, height*1.5/8)//Yasaar
    
    
    image(kawakib,width-100,height-100,90,90)//Logo
    
    textSize(300)
    fill("blue")
    text(score_right, width*5.5/8, height*3.5/5); //Yameen Score
    text(score_left, width*1/8, height*3.5/5);  //Yasaar Score
    
    
    

    
    mheight=height-(((height-100)/original_seconds)*(original_seconds-seconds))
    
    
    stroke(0)
    strokeWeight(21);
    line(width/2, 0, width/2, mheight);
    strokeWeight(1);
    

    
    
    textSize(50)
    fill(128,0,128)
    text(misra, width/2, height*7/8)

    

    fill(0)
    textSize(100)
    ellipse(width/2,
            mheight-40
            ,120,120)
    fill(255,
        255-8.5*(30-seconds),
        255-8.5*(30-seconds))
    text(seconds, width/2-50,mheight)
    
    
    
    

}
function decsec (){
    if (seconds>0 && counting==true){seconds--} 
    if (seconds==0){reset()}
    
}
function t(){
    counting=true;
    setInterval(decsec, 1000)
}

function mousePressed(){
    
    
    if(dist(mouseX, mouseY, width/2, mheight)<100){
        t()//Activate Countdown
        startCounting()
    }
    if(dist(mouseX, mouseY, 753,80)<70){
        score_right++
    }
    if(dist(mouseX, mouseY, 190,80)<70){
        score_left++
    }
    
}

function bait(team,misra1){
    misra=misra1
    if (team==1){
        score_right++
    }
    if (team==2){
        score_left++
    }
}
function reset(){
    seconds=original_seconds;
    counting=false;
}

function startCounting (){
    clicktime=millis()
    timeup=clicktime+(original_seconds*1000)
}


