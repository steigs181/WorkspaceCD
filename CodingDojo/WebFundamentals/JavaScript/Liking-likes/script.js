var like1 = 0;
var like2 = 0;
var like3 = 0;
var boxcount1 = document.querySelector("#like-counter1");
var boxcount2 = document.querySelector("#like-counter2");
var boxcount3 = document.querySelector("#like-counter3");

function likeCount1() {
    like1++;
    boxcount1.innerText = like1 + " Like(s)";
}

function likeCount2() {
    like2++;
    boxcount2.innerText = like2 + " Like(s)";
}

function likeCount3() {
    like3++;
    boxcount3.innerText = like3 + " Like(s)";
}