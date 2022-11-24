boxes = document.getElementsByClassName("box");
let player1 = true;
let player2 = false;
resetButton = document.getElementById("reset-button")

function winCondition (sign) {
    if ((
        //Raws
         boxes[0].innerText === sign && boxes[1].innerText === sign && boxes[2].innerText === sign) ||
        (boxes[3].innerText === sign && boxes[4].innerText === sign && boxes[5].innerText === sign) ||
        (boxes[6].innerText === sign && boxes[7].innerText === sign && boxes[8].innerText === sign) ||
        //Columns
        (boxes[0].innerText === sign && boxes[3].innerText === sign && boxes[6].innerText === sign) ||
        (boxes[1].innerText === sign && boxes[4].innerText === sign && boxes[7].innerText === sign) ||
        (boxes[2].innerText === sign && boxes[5].innerText === sign && boxes[8].innerText === sign) ||
        //Diagonals
        (boxes[0].innerText === sign && boxes[4].innerText === sign && boxes[8].innerText === sign) ||
        (boxes[2].innerText === sign && boxes[4].innerText === sign && boxes[6].innerText === sign)
    ) {
        alert(sign + " won !");
        reset();
    }
}

function reset() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
        player1 = true;
        player2 = false;
    }
}

for (let i = 0; i < boxes.length; i++) {

    boxes[i].addEventListener("mouseup", function (event){
        switch (event.button) {

            case 0: {
                if (boxes[i].innerHTML === "" && player1 === true){
        boxes[i].innerHTML = "<span style='color: red'>X</span>";
        player1 = false;
        player2 = true;
        winCondition("X");
                }
        break;
            }

            case 2: {
                //Disable context Menu on right click
                document.addEventListener("contextmenu",function (event){
                    event.preventDefault();
                })
                if (boxes[i].innerHTML === "" && player2 === true) {
                    boxes[i].innerHTML = "<span style='color: blue'>O</span>";
                    player2 = false;
                    player1 = true;
                    winCondition("O");
                }
        break;
            }

            default: {
            }
        }

        //Reset in case of a draw
        if (boxes[0].innerHTML !== "" && boxes[1].innerHTML !== "" && boxes[2].innerHTML !== "" && boxes[3].innerHTML !== ""
            && boxes[4].innerHTML !== "" && boxes[5].innerHTML !== "" && boxes[6].innerHTML !== "" && boxes[7].innerHTML !== ""
            && boxes[8].innerHTML !== "") {
            alert("Draw");
            reset();
        }
    })

    //Reset Button
    resetButton.addEventListener("click", function (event) {
        event.preventDefault();
        reset();
    })
}


