var elements = ["Rock", "Paper", "Scissors"];

function choice() {
    var x = document.getElementById("dropdown").value;
    document.getElementById("option").innerHTML = "You selected: "
    + x;
}

var computerPick = elements[Math.floor(Math.random() * elements.length)];
console.log(computerPick)


var compare = function (userPick, computerPick) {  

    if (userPick === computerPick) {
        return("The result is a tie!");
    }

    if (userPick === "rock") {
        if (computerPick=== "scissors");
    } else {
        return ("rock wins");
    }

    if (userPick === "paper") {
        if (computerPick === "rock");
    } else {
        return ("paper wins");
    }

    if (userPick === "paper") {
        if (computerPick === "scissors");
    } else {
        return ("scissors wins");
    }

};















/*var paper = function(userPick, computerPick)
if (userInput === "Paper") {
   if (computerPick === "Rock") 
    console.log "Paper covers rock. You win!";
}
  else {
   if (computerPick === "Scissors") 
    console.log "Scissors cut paper. You lost!";
    
}   
     



/* function game(pick1, pick2)
  console.log(pick1 + pick2);
  switch(pick1, pick2) {
    case 'pick1 === "Scissors" && pick2 === "Paper"':
    console.log 'You push select again';
    break;
    case 'pick1 === "Paper" && pick2 === "Rock"':
    console.log 'Paper wraps rock. Paper wins!';
    break;
    case 'pick1 === pick2':
    console.log = 'You push, select again';
}

/* rock = rock
paper = paper
scissors = scissors
    push then select again

paper === rock || rock === paper
    paper wraps rock - paper wins
    
scissors === paper || paper ===scissors
    scissors cuts paper - scissors win
    
rock === scissors || scissors === rock
    rock crushes scissors - rock wins
    */
