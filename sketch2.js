/* RAUDAT ADAB SCOREBOARD PROJECT


*/


var arabic;
var score_right;
var score_left;
var seconds;
var original_seconds;
var counting;
var clicktime;
var elapsed;




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
    clicktime=0
    elapsed=0;


}
function draw(){
    background(245,222,179);
    textSize(70)
    fill(255,0,0)
    text(arabic[0],width*5.5/8, height*1.5/8)//Yameen

    fill(0,255,0)
    text(arabic[1],width*1/8, height*1.5/8)//Yasaar




    textSize(300)
    fill("blue")
    text(score_right, width*5.5/8, height*3.5/5); //Yameen Score
    text(score_left, width*1/8, height*3.5/5);  //Yasaar Score
    
    
    textSize(15)
    text("Kawakib Creations", width*6.5/8, height*7.5/8)












    textSize(50)
    fill(128,0,128)
    text(misra, width/2, height*7/8)
    
    if (counting==true){elapsed=(Math.round(millis()/1000))-clicktime}
    
    
    if (counting==true&&elapsed==original_seconds){
        console.log("TIME UP!")
        counting=false;
    }
    
    text(original_seconds-elapsed, width* 3/7, 200)
//    arc(50, 50, 80, 80, 0, 1.6);
//    






}


function mousePressed(){


    if(dist(mouseX, mouseY, width/2, height/2)<1000&& counting==false){
			clicktime=Math.round(millis()/1000)
			console.log(clicktime)
            counting=true;
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
