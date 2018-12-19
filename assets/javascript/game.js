var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var userTotal = 0;
var wins = 0;
var losses = 0;
var num1;
var num2;
var num3;
var num4;

reset();

function reset() {
    
    var random = Math.floor((Math.random() * 101) + 19);
    $('#matchValue').text(random);
    $('#totalScore').text(userTotal);
    $('#wins').text(wins);
    $('#losses').text(losses);

    num1 = Math.floor(Math.random() * 11 + 1)
    num2 = Math.floor(Math.random() * 11 + 1)
    num3 = Math.floor(Math.random() * 11 + 1)
    num4 = Math.floor(Math.random() * 11 + 1)
}

$("#crystal1").on("click", function () {
    userTotal += num1;
    $("#totalScore").text(userTotal);
    if (totalScore === userTotal) {
        wins++;
        $('#wins').text(wins);
        alert("You Won!!!");
        reset();
    }
});
$("#crystal2").on("click", function () {
    userTotal += num1;
    $("#totalScore").text(userTotal);
    if (totalScore === userTotal) {
        wins++;
        $('#wins').text(wins);
        alert("You Won!!!");
        reset();
    }
});

$("#crystal3").on("click", function () {
    userTotal += num1;
    $("#totalScore").text(userTotal);
    if (totalScore === userTotal) {
        wins++;
        $('#wins').text(wins);
        alert("You Won!!!");
        reset();
    }
});

$("#crystal4").on("click", function () {
    userTotal += num1;
    $("#totalScore").text(userTotal);
    if (totalScore === userTotal) {
        wins++;
        $('#wins').text(wins);
        alert("You Won!!!");
        reset();
    }
});

