let option = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];

function rock() {
    let result = option[Math.floor(Math.random() * option.length)];
    document.getElementById("result1").textContent = result;

    if(result == option[1]) {
        document.getElementById("outcome").innerHTML = ("You have been smothered!(Lose)");
    }

    if(result == option[0]) {
        document.getElementById("outcome").innerHTML = ("Draw!");
    }

    if(result == option[2]) {
        document.getElementById("outcome").innerHTML = ("You smashed the scissors into pieces!(Win)");
    }

    if(result == option[3]) {
        document.getElementById("outcome").innerHTML = ("You crushed the lizard!(Win)");
    }

    if(result == option[4]) {
        document.getElementById("outcome").innerHTML = ("You have been vaporized by Spock!(Lose)");
    }


    return result;
}

function paper() {
    let result = option[Math.floor(Math.random() * option.length)];
    document.getElementById("result1").textContent = result;

    if(result == option[2]) {
        document.getElementById("outcome").innerHTML = ("You have been cut to pieces!(Lose)");
    }

    if(result == option[1]) {
        document.getElementById("outcome").innerHTML = ("Draw!");
    }

    if(result == option[0]) {
        document.getElementById("outcome").innerHTML = ("You smothered the rock!(Win)");
    }

    if(result == option[3]) {
        document.getElementById("outcome").innerHTML = ("You have been eaten by the lizard!(Lose)");
    }

    if(result == option[4]) {
        document.getElementById("outcome").innerHTML = ("You have disproved Spock!(Win)");
    }

    return result;
}

function scissors() {
    let result = option[Math.floor(Math.random() * option.length)];
    document.getElementById("result1").textContent = result;

    if(result == option[0]) {
        document.getElementById("outcome").innerHTML = ("You have been crushed to pieces!(Lose)");
    }

    if(result == option[2]) {
        document.getElementById("outcome").innerHTML = ("Draw");
    }

    if(result == option[1]) {
        document.getElementById("outcome").innerHTML = ("You cut the paper into pieces!(Win)");
    }

    if(result == option[3]) {
        document.getElementById("outcome").innerHTML = ("You have decapitated the lizard!(Win)");
    }

    if(result == option[4]) {
        document.getElementById("outcome").innerHTML = ("You have been smashed by Spock(Lose)");
    }

    return result;
}
function lizard() {
    let result = option[Math.floor(Math.random() * option.length)];
    document.getElementById("result1").textContent = result;

    if(result == option[0]) {
        document.getElementById("outcome").innerHTML = ("You have been crushed!(Lose)");
    }

    if(result == option[2]) {
        document.getElementById("outcome").innerHTML = ("You have been decapitated!(Lose)");
    }

    if(result == option[1]) {
        document.getElementById("outcome").innerHTML = ("You have a good lunch. Yum Yum!(Win)");
    }

    if(result == option[3]) {
        document.getElementById("outcome").innerHTML = ("Draw!");
    }

    if(result == option[4]) {
        document.getElementById("outcome").innerHTML = ("You have poisoned Spock(Win)");
    }

    return result;
}
function spock() {
    let result = option[Math.floor(Math.random() * option.length)];
    document.getElementById("result1").textContent = result;

    if(result == option[0]) {
        document.getElementById("outcome").innerHTML = ("You have vaporized the rock!(Win)");
    }

    if(result == option[2]) {
        document.getElementById("outcome").innerHTML = ("You have smashed the scissors to pieces!(Win)");
    }

    if(result == option[1]) {
        document.getElementById("outcome").innerHTML = ("You have been disproved!(Lose)");
    }

    if(result == option[3]) {
        document.getElementById("outcome").innerHTML = ("You have been poisoned by the lizard!(Lose)");
    }

    if(result == option[4]) {
        document.getElementById("outcome").innerHTML = ("Draw!");
    }

    return result;
}

// function diceRoller1() {
//     let rollOfDice = Math.floor((Math.random() * 6) +1);
//     document.getElementById("total1").innerHTML = rollOfDice;
//     return rollOfDice;
// }


// function diceRoller2() {
//     let rollOfDice = Math.floor((Math.random() * 6) +1);
//     document.getElementById("total2").innerHTML = rollOfDice;
//     return rollOfDice;
// }

// let roll3 = 0
// for (let i = 0; i < 1000; i++) {
//     roll3 = diceRoller1() + diceRoller2();
//     count[roll3] = count[roll3] + 1;
//     document.getElementById("total3").innerHTML = count;
// }

// for (let i = 0; i < 13; i++) {
//     let graph = document.getElementById('graph');
//     let block = document.createElement("div");
//     document.createElement("div");
//     block.style.backgroundColor = "gray";
//     block.style.width = count[i] + "px";
//     block.style.height = "20px";
//     block.style.marginTop = "2px";
//     graph.appendChild(block);
// }