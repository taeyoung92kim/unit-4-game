$(document).ready(function () {
    var target = Math.floor(Math.random() * 100);
    var score = 0;
    var winScore = 0;
    var loseScore = 0;
    var slimeArray = ["#crystal", "#fire", "#rock", "#tangle"];
    // var slimeObject = {
    //     crystal: {
    //         image: "#crystal",
    //         value: 0
    //     },
    //     fire: {
    //         image: "#fire",
    //         value: 0
    //     },
    //     rock: {
    //         image: "#rock",
    //         value: 0
    //     },
    //     tangle: {
    //         image: "#tangle",
    //         value: 0
    //     }
    // }

    var goalText = document.getElementById("goal-text");
    var winText = document.getElementById("win-text");
    var loseText = document.getElementById("lose-text");
    var totalScoreText = document.getElementById("totalScore");
    //var slimeScore = document.getElementById("slime").getAttribute("value");

    for (var i = 0; i < 4; i++) {
        slimeArray[i] = Math.floor(Math.random() * 20);
        //var slimeScore = Math.floor(Math.random() * 20);
        //$("slimeArray[i]").attr("value", slimeScore);
        //document.getElementById(slimeArray[i]).value = Math.floor(Math.random() * 20);
        //$("slimeArray[i]").attr("value", Math.floor(Math.random() * 20));
        // $("slimeArray[i]").setAttribute("value", 10);
    };

    // slimeObject.crystal.value = Math.floor(Math.random() * 20);
    // slimeObject.fire.value = Math.floor(Math.random() * 20);
    // slimeObject.rock.value = Math.floor(Math.random() * 20);
    // slimeObject.tangle.value = Math.floor(Math.random() * 20);

    $(".slime").on("click", function () {

        var slimeValue = $(this).attr("value");
        var test = parseInt(slimeValue);
        score = score + test;
        totalScoreText.textContent = score;

        if (score === target) {
            alert("You win!");
            reset()
        } else if (score >= target) {
            alert("You lose!");
            reset();
        }

    });

    function reset() {
        target();
        score();
        slimeArray();
    }

    goalText.textContent = "Your target score is: " + target;
    winText.textContent = "Wins: " + winScore;
    loseText.textContent = "Losses: " + loseScore;
    totalScoreText.textContent = score;
});