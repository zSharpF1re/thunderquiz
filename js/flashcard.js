var cards = document.getElementsByClassName("card");
var quiz = document.getElementsByClassName("quiz");

var question = document.getElementById("domanda");
var options = {};
for(i=0; i<4; i++){
    var name = "option-" + (i+1);
    options[i] = document.getElementById(name);
}

cards[0].addEventListener("click", function(){
    load("Date storia");
})
cards[1].addEventListener("click", function(){
    load("Opere letteratura");
})
cards[2].addEventListener("click", function(){
    load(cards[2].innerHTML);
})
cards[3].addEventListener("click", function(){
    load(cards[3].innerHTML);
})

function load(section){
    switch(section){
        case "Date storia":
            cards[0].parentElement.style.display = "none";
            quiz[0].style.display = "block";
            generateQuestion(1);
            break;

        case "Opere letteratura":
            alert("Carico letteratura");
            break;

    }
}

function generateQuestion(id){
    
}
