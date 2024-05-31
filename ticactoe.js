
var boxes = document.querySelectorAll(".box");
console.log(boxes);
var isFirstPerson = true;
var isGameFinished= false;
var gameArea=document.getElementById("gameArea");
var resultDiv=document.getElementById("resultDiv");
var restartBtn=document.getElementById("restartBtn");
restartBtn.style.display="none";


var horData = [
    [0, 1, 2], //00 01 02
    [3, 4, 5], //10 11 12
    [6, 7, 8] //20 21 22

];

function checkHorizontal() {
    for (i = 0; i < horData.length; i++) {

        let checkArray = [
            boxes[horData[i][0]].innerHTML,
            boxes[horData[i][1]].innerHTML,
            boxes[horData[i][2]].innerHTML,
        ];
        console.log(checkArray);
        let uniqueArray = [...new Set(checkArray)];
        console.log('uniqueArray', uniqueArray);
        let uniqueArrayLength = uniqueArray.length;
        console.log('uniqueArraylength', uniqueArrayLength);
        if (uniqueArrayLength == 1 && !uniqueArray.includes("")) {
            console.log("winner is", isFirstPerson ? "player 1" : "player2");
            isGameFinished =!isGameFinished;
        }
    }
}
var verData = [
    [0, 3, 6], //00 10 20
    [1, 4, 7], //01 11 21
    [2, 5, 8] //02 12 22
];

function checkVertical() {
    for (i = 0; i < verData.length; i++) {
        let checkArray2 = [
            boxes[verData[i][0]].innerHTML,
            boxes[verData[i][1]].innerHTML,
            boxes[verData[i][2]].innerHTML,
        ];
        console.log(checkArray2);
        let uniqueArray = [...new Set(checkArray2)];
        console.log('uniqueArray', uniqueArray);
        let uniqueArrayLength = uniqueArray.length;
        console.log('uniqueArraylength', uniqueArrayLength);
        if (uniqueArrayLength == 1 && !uniqueArray.includes("")) {
            console.log("winner is", isFirstPerson ? "player 1" : "player2");
            isGameFinished =!isGameFinished;

        }
    }
}

function checkDaigonal() {
    var diagonalA = [boxes[0].innerHTML, boxes[4].innerHTML, boxes[8].innerHTML];
    var diagonalB = [boxes[2].innerHTML, boxes[4].innerHTML, boxes[6].innerHTML];

    let uniqueDA = [...new Set(diagonalA)];
    let uniqueDAlength = uniqueDA.length;
    let uniqueDB = [... new Set(diagonalB)];
    let uniqueDBlength = uniqueDB.length;
    if (uniqueDAlength == 1 && !uniqueDA.includes("")) {
        console.log("winner is ", isFirstPerson ? "player1" : "player2");
        isGameFinished = !isGameFinished;
    }
    if (uniqueDBlength == 1 && !uniqueDB.includes("")) {
        console.log("winner is ", isFirstPerson ? "player1" : "player2");
        isGameFinished = !isGameFinished;
    }


}




boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("clicked");
        if (box.innerHTML == "" || box.innerHTML == null) {
            box.innerHTML = isFirstPerson ? "O" : " X";
            checkForWinner();
            if (isGameFinished) {
                gameArea.style.display = "none";
                resultDiv.innerHTML = "THE WINNER IS " + (isFirstPerson ? "PLAYER 1" : "PLAYER 2");
                resultDiv.style.display="";
                restartBtn.style.display = "block";
            }
            else {
                if (isGameTie()) {
                    gameArea.style.display = "none";
                    resultDiv.innerHTML = "THE  GAME IS TIE";
                    resultDiv.style.display="";
                    restartBtn.style.display = "block";

                } else {
                    isFirstPerson = !isFirstPerson;

                }
            }
        }
    });
});
function isGameTie() {
    let samleBoxData = [];
    boxes.forEach((box) => {
        samleBoxData.push(box.innerHTML);
    });
    if (samleBoxData.includes("")) {
        return false;

    } else {
        isGameFinished = true;
        return true;
    }
}
restartBtn.addEventListener("click", () => {
    gameArea.style.display = "grid";
    boxes.forEach((box) => {
        box.innerHTML = "";
    });
    resultDiv.style.display = "none";
    restartBtn.style.display = "none";
    isFirstPerson = true;
    isGameFinished = false;
});
function checkForWinner() {
    checkHorizontal();
    checkVertical();
    checkDaigonal();

}


