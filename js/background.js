const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

var event = document.querySelector("p");

addEventListener("mousemove", (evento) => {
    let iteration = 0;
  
    clearInterval(interval);
  
    interval = setInterval(() => {
        event.innerText = event.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
              return event.dataset.value[index];
            }
      
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
    
        if(iteration >= event.dataset.value.length){ 
            clearInterval(interval);
        }
    
        iteration += 1 / 3;
    }, 10);
});

