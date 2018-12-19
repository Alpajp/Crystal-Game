var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var userTotal = 0;
var random;
var wins = 0;
var losses = 0;
var num1;
var num2;
var num3;
var num4;

reset();

function reset() {

    random = Math.floor((Math.random() * 101) + 19);
    $('#matchValue').text(random);
    userTotal = 0;
    $('#userTotal').text(userTotal);
    $('#wins').text(wins);
    $('#losses').text(losses);

    num1 = Math.floor(Math.random() * 11 + 1)
    num2 = Math.floor(Math.random() * 11 + 1)
    num3 = Math.floor(Math.random() * 11 + 1)
    num4 = Math.floor(Math.random() * 11 + 1)
}

$("#crystal1").on("click", function () {
    userTotal += num1;
    ifWinOrLosse()
});

$("#crystal2").on("click", function () {
    userTotal += num2;
    ifWinOrLosse()
});

$("#crystal3").on("click", function () {
    userTotal += num3;
    ifWinOrLosse()
});

$("#crystal4").on("click", function () {
    userTotal += num4;
    ifWinOrLosse()
});


function ifWinOrLosse() {
    $("#userTotal").text(userTotal);
    if (random === userTotal) {
        wins++;
        $('#wins').text(wins);
        reset();
    };
    if(userTotal > random) {
        losses++;
        $('#losses').text(losses);
        reset();
    };
}