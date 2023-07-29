dogs.sort(() => Math.random() - 0.5);

ptr = 0;

score = 0;

tot = -1;

// start the program
function handleClickNewDog(){   
    // adding the button back
    document.getElementById("what-dog-div").innerHTML = `<button id="what-dog" class="text-3xl text-sky-500 bg-slate-100 rounded-lg hover:bg-sky-500 hover:text-slate-100 p-5" onclick="defineDog()">What's that Dog?</button>";`
    document.getElementById("guess-box").innerHTML = '<input placeholder="Which dog breed am I?" oninput="handleChange()" id="inp" type="text" class="border-8 border-black">';

    var the_info = document.getElementById("dog-info");
    the_info.innerHTML = '';
    // special case, initial click
    if (tot == -1){
        document.getElementById("guess-box").innerHTML = '<input placeholder="Which dog breed am I?" oninput="handleChange()" id="inp" type="text" class="border-8 border-black">';
        document.getElementById("score-box").innerHTML = '<p id="score">Your score is: 0</p>';
    }
    var the_div = document.getElementById("dog-image");

    ptr++;

    if (ptr == 283){
        ptr = 0;
        dogs.sort(() => Math.random() - 0.5);
    }

    the_div.innerHTML = `<img class="w-5 h-5" src=${dogs[ptr][0]}>`;

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

function defineDog(){
    // declaring variables
    var the_info = document.getElementById("dog-info");
    var the_button = document.getElementById("what-dog");
    var the_breed = dogs[ptr][1];

    document.getElementById("guess-box").innerHTML = '';

    console.log(the_breed);

    the_info.innerHTML = `<p>This dog's breed is: <strong>${" " + the_breed}!<strong><p>`;

    document.getElementById("what-dog-div").innerHTML = '';
}