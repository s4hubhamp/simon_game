var vars = (function (){
    return {
        gamePattern : [],
        buttonColours : ['red','blue','green','yellow'],
        randomChosenColour : null,
        level : 1,
        i : 0
    }
})();

function play(vars){
    document.getElementById("level-title").textContent="Level "+vars.level;
    vars.randomChosenColour = vars.buttonColours[nextSequence()];
    vars.gamePattern.push(vars.randomChosenColour);
    var audio = new Audio("sounds/"+vars.randomChosenColour+".mp3");
    audio.play();
    blinker(vars.randomChosenColour);
    
}
function lost(vars){
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    document.getElementById('level-title').textContent="Game Over, Press Any Key to Restart";
    vars.gamePattern = [];
    vars.randomChosenColour = null;
    vars.level = 1;
    vars.i = 0 ;

}

function nextSequence(){
    return Math.floor(Math.random()*4);
}

function blinker(randomChosenColour){
    document.getElementById(randomChosenColour).style.opacity=0;
    setTimeout(function(){
        document.getElementById(randomChosenColour).style.opacity=1;
    },50);
}

document.addEventListener("keypress",function(){
    if(document.getElementById('level-title').textContent=="Game Over, Press Any Key to Restart"|| 
    document.getElementById('level-title').textContent=="Press A Key to Start"){
        play(vars);
    }
});

document.querySelector('.container').addEventListener('click',function(e){

    if(document.getElementById('level-title').textContent!=="Game Over, Press Any Key to Restart"|| 
    document.getElementById('level-title').textContent!=="Press A Key to Start"){

            e.target.style.opacity=0;
            setTimeout(function(){
                e.target.style.opacity=1;
            },30);
            if(e.target.id===vars.gamePattern[vars.i]){
                vars.i++;
                if(vars.i===vars.gamePattern.length){
                    vars.level++;
                    vars.i=0;
                    setTimeout(function(){
                        play(vars);
                    },500);
                    
                
                }
                
            }else{
                lost(vars);
            }
        
    }
      

});






// function handleClick(vars){
    
    

//     document.addEventListener('click',function(e){
//         var i=0;
//            if(e.target.id===vars.gamePattern[i]){

//            }
//            i++; 
//     });
    
    

//     if(areEqual(vars.gamePattern,vars.clicks)){
//         vars.level++;
        
//         vars.randomChosenColour = vars.buttonColours[nextSequence()];
//         vars.gamePattern.push(vars.randomChosenColour);
//         var audio = new Audio("sounds/"+vars.randomChosenColour+".mp3");
//         audio.play();
//         blinker(vars.randomChosenColour);
//         document.getElementById("level-title").textContent="Level "+vars.level;
//         vars.clicks = [];

//     }


// }

// function areEqual(a,b){
//     if (a.length !== b.length) return false;

//     for (var i = 0; i < a.length; ++i) {
//         if (a[i] !== b[i]) return false;
//       }
//       return true;
// }

// function restart(){
//     document.getElementById('level-title').textContent="Game Over, Press Any Key to Restart";
        
//     vars.gamePattern= [];
//     vars.buttonColours = ['red','blue','green','yellow'];
//     vars.randomChosenColour = null;
//     vars.level = 1;
//     vars.clicks = [];

// }