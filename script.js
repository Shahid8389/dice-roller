let images = ["dice-1.svg", "dice-2.svg", "dice-3.svg", "dice-4.svg", "dice-5.svg", "dice-6.svg"];

let button = document.querySelector("#button");
let dice = document.querySelectorAll("img");

button.addEventListener('click', () => {
    
    dice.forEach( (die) => {
        die.classList.add("shake");
    });

    setTimeout( () => {
        dice.forEach( (die) => {
            die.classList.remove("shake");
        });
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);
    
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);

        document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue+1) + (dieTwoValue+1) );

    }, 1000);

});