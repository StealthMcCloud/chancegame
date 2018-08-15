const option = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
let scoreCounterHuman = 0;
let scoreCounterComputer = 0;

function rock() {
    let result = option[Math.floor(Math.random() * option.length)];
    document.getElementById("result1").textContent = ("Computer chooses " + result + "!");
    document.getElementById("humanScore").textContent = ("Human: " + scoreCounterHuman);
    document.getElementById("computerScore").textContent = ("Computer: " + scoreCounterComputer);

    if(result == option[1]) {
        document.getElementById("outcome").innerHTML = ("You have been smothered!(Lose)");
        scoreCounterComputer += 1;
    }

    if(result == option[0]) {
        document.getElementById("outcome").innerHTML = ("Draw!");
    }

    if(result == option[2]) {
        document.getElementById("outcome").innerHTML = ("You smashed the scissors into pieces!(Win)");
        scoreCounterHuman += 1;
    }

    if(result == option[3]) {
        document.getElementById("outcome").innerHTML = ("You crushed the lizard!(Win)");
        scoreCounterHuman += 1;
    }

    if(result == option[4]) {
        document.getElementById("outcome").innerHTML = ("You have been vaporized by Spock!(Lose)");
        scoreCounterComputer += 1;
    }

    return scoreCounterComputer;
    return scoreCounterHuman;
    return result;
}

function paper() {
    let result = option[Math.floor(Math.random() * option.length)];
    document.getElementById("result1").textContent = ("Computer chooses " + result + "!");
    document.getElementById("humanScore").textContent = ("Human: " + scoreCounterHuman);
    document.getElementById("computerScore").textContent = ("Computer: " + scoreCounterComputer);

    if(result == option[2]) {
        document.getElementById("outcome").innerHTML = ("You have been cut to pieces!(Lose)");
        scoreCounterComputer += 1;
    }

    if(result == option[1]) {
        document.getElementById("outcome").innerHTML = ("Draw!");
    }

    if(result == option[0]) {
        document.getElementById("outcome").innerHTML = ("You smothered the rock!(Win)");
        scoreCounterHuman += 1;
    }

    if(result == option[3]) {
        document.getElementById("outcome").innerHTML = ("You have been eaten by the lizard!(Lose)");
        scoreCounterComputer += 1;
    }

    if(result == option[4]) {
        document.getElementById("outcome").innerHTML = ("You have disproved Spock!(Win)");
        scoreCounterHuman += 1;
    }

    return scoreCounterComputer;
    return scoreCounterHuman;
    return result;
}

function scissors() {
    let result = option[Math.floor(Math.random() * option.length)];
    document.getElementById("result1").textContent = ("Computer chooses " + result + "!");
    document.getElementById("humanScore").textContent = ("Human: " + scoreCounterHuman);
    document.getElementById("computerScore").textContent = ("Computer: " + scoreCounterComputer);

    if(result == option[0]) {
        document.getElementById("outcome").innerHTML = ("You have been crushed to pieces!(Lose)");
        scoreCounterComputer += 1;
    }

    if(result == option[2]) {
        document.getElementById("outcome").innerHTML = ("Draw");
    }

    if(result == option[1]) {
        document.getElementById("outcome").innerHTML = ("You cut the paper into pieces!(Win)");
        scoreCounterHuman += 1;
    }

    if(result == option[3]) {
        document.getElementById("outcome").innerHTML = ("You have decapitated the lizard!(Win)");
        scoreCounterHuman += 1;
    }

    if(result == option[4]) {
        document.getElementById("outcome").innerHTML = ("You have been smashed by Spock(Lose)");
        scoreCounterComputer += 1;
    }

    return scoreCounterComputer;
    return scoreCounterHuman;
    return result;
}
function lizard() {
    let result = option[Math.floor(Math.random() * option.length)];
    document.getElementById("result1").textContent = ("Computer chooses " + result + "!");
    document.getElementById("humanScore").textContent = ("Human: " + scoreCounterHuman);
    document.getElementById("computerScore").textContent = ("Computer: " + scoreCounterComputer);

    if(result == option[0]) {
        document.getElementById("outcome").innerHTML = ("You have been crushed!(Lose)");
        scoreCounterComputer += 1;
    }

    if(result == option[2]) {
        document.getElementById("outcome").innerHTML = ("You have been decapitated!(Lose)");
        scoreCounterComputer += 1;
    }

    if(result == option[1]) {
        document.getElementById("outcome").innerHTML = ("You have a good lunch. Yum Yum!(Win)");
        scoreCounterHuman += 1;
    }

    if(result == option[3]) {
        document.getElementById("outcome").innerHTML = ("Draw!");
    }

    if(result == option[4]) {
        document.getElementById("outcome").innerHTML = ("You have poisoned Spock(Win)");
        scoreCounterHuman += 1;
    }

    return scoreCounterComputer;
    return scoreCounterHuman;
    return result;
}
function spock() {
    let result = option[Math.floor(Math.random() * option.length)];
    document.getElementById("result1").textContent = ("Computer chooses " + result) + "!";
    document.getElementById("humanScore").textContent = ("Human: " + scoreCounterHuman);
    document.getElementById("computerScore").textContent = ("Computer: " + scoreCounterComputer);

    if(result == option[0]) {
        document.getElementById("outcome").innerHTML = ("You have vaporized the rock!(Win)");
        scoreCounterHuman += 1;
    }

    if(result == option[2]) {
        document.getElementById("outcome").innerHTML = ("You have smashed the scissors to pieces!(Win)");
        scoreCounterHuman += 1;
    }

    if(result == option[1]) {
        document.getElementById("outcome").innerHTML = ("You have been disproved!(Lose)");
        scoreCounterComputer += 1;
    }

    if(result == option[3]) {
        document.getElementById("outcome").innerHTML = ("You have been poisoned by the lizard!(Lose)");
        scoreCounterComputer += 1;
    }

    if(result == option[4]) {
        document.getElementById("outcome").innerHTML = ("Draw!");
    }

    return scoreCounterComputer;
    return scoreCounterHuman;
    return result;
}