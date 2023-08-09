
//Play sound
//Detecting Button Press
var numberOfbutton= document.querySelectorAll(".drum").length;

for (var i=0 ; i<numberOfbutton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttoninnerHTML= this.innerHTML;
        playSound(buttoninnerHTML);
        buttonAnimation(buttoninnerHTML)
    });
}

//Detekting Keyboard Press
addEventListener("keydown", function (event){
    playSound(event.key);
    buttonAnimation(event.key);
})

function playSound (key){

    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play()
            break;
    
            case "a":
                var audio = new Audio("sounds/tom-2.mp3")
                audio.play()
                break;  
                case "s":
                var audio = new Audio("sounds/snare.mp3")
                audio.play()
                break;  
                case "d":
                var audio = new Audio("sounds/tom-3.mp3")
                audio.play()
                break;  
                case "j":
                var audio = new Audio("sounds/tom-4.mp3")
                audio.play()
                break;  
                case "k":
                var audio = new Audio("sounds/crash.mp3")
                audio.play()
                break;  
                case "l":
                var audio = new Audio("sounds/kick-bass.mp3")
                audio.play()
                break;   
            default: console.log(buttoninnerHTML)
    }
}

//Add animation to buttons
function buttonAnimation(currentKey){
var activBtn = document.querySelector("." + currentKey);
activBtn.classList.add("pressed");
setTimeout(function(){
    activBtn.classList.remove("pressed");
}, 100);
}
