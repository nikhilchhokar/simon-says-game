var userclickedpattern = [];

var gamepattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var started = false;

var level = 0;

$(document).keydown(function(){
    if (!started) {
        $("level-title").text("level " + level);
        nextsequence();
        started = true;
    }
})

$( ".btn" ).on( "click", function() {
    var userchosencolor = $(this).attr("id");

    userclickedpattern.push(userchosencolor);

    checkAnswer(userclickedpattern.length-1);
} );

function checkAnswer(currentlevel){
    if(gamepattern[currentlevel] === userclickedpattern[currentlevel]){
        console.log("success");
        if(gamepattern.length === userclickedpattern.length){
            setTimeout(function(){
                nextsequence();
            },1000);
        }
    }

    else{
        console.log("wrong");

        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
    

       

        $("#level-title").text("Game over, Press any key to restart");

        startover();
    }
    
}

function startover(){
    level = 0;
    gamepattern = [];
    started = false;
}

function nextsequence(){

    userclickedpattern= [];

    level++;

    $("#level-title").text("Level " + level);

    var randomnumber = Math.floor(Math.random() * 4);

    var randomchosencolor = buttonColors[randomnumber];

    gamepattern.push(randomchosencolor);

    $("#" + randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomchosencolor);

    
    
}

function playSound(name){
    var audio = new Audio( name + ".mp3");
    audio.play();
}

function animatepress(currentcolor){
    
    $( "#" + currentcolor ).addClass( "pressed" );

    setTimeout(function() {
        $("#" + currentcolor).removeclass("pressed");
      }, 100);
}



