dogs.sort(() => Math.random() - 0.5);

ptr = 0;

score = 0;

tot = 0;

function handleClickNewDog(){
    var the_div = document.getElementById("mario");

    ptr++;

    if (ptr == 283){
        ptr = 0;
        dogs.sort(() => Math.random() - 0.5);
    }

    the_div.innerHTML = `<img src=${dogs[ptr][0]}>`;

    tot++;

    var the_score = document.getElementById("score");
    var the_input = document.getElementById("inp");

    // updates score, next dog
    the_score.innerHTML = `Your score is ${score} / ${tot}`;

    the_input.value = "";
}

function handleChange(){
    // declaring variables
    var the_div = document.getElementById("mario");
    var the_input = document.getElementById("inp");
    var the_score = document.getElementById("score");

    console.log(the_input.value)

    if (the_input.value == dogs[ptr][1]){
        score++;

        // updates score, next dog
        the_score.innerHTML = `Your score is ${score} / ${tot}`;

        the_input.value = "";

        handleClickNewDog();
    } 
}