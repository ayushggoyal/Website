var btn= ["red", "yellow", "greeen", "yellow"];

var randomColor;
var clickedPattern= [];
var memory= [];

var started= false;
var level =0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("level "+ level);
        sequence();
        started= true;
    }
});

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    clickedPattern.push(userChosenColor); 
    Sound(userChosenColor);
    animation(userChosenColor);

    ansCheck(clickedPattern.length-1);
});

function ansCheck(curlev){
    if(memory[curlev]==clickedPattern[curlev]){
        if(memory.length==clickedPattern.length){
            setTimeout(function(){
                nextSequence;
            }, 1000);
        }
    }else{
        Sound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, press any key to restart");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function sequence(){
    
    clickedPattern= [];
    level++;
    $("#level-title").text("level "+ level);

    var x = Math.random()*4;
    x= Math.floor(x);
    randomColor = btn[x];
    memory.push(randomColor);

    Sound(randomColor);
}

function animation(chosenColor)
{
    $("#"+ chosenColor).addClass("pressed");
    setTimeout(function(){
        $("#"+ chosenColor).removeClass("pressed");
    })
}

function Sound(chosenColor){
    var audio = new Audio("sounds/"+chosenColor+".mp3");
    audio.play();
}

function startOver(){
    level=0;
    memory= [];
    clickedPattern= [];
    started= false;
}