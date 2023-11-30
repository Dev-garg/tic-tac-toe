var boxes = document.querySelectorAll(".box");
var boxText = document.querySelectorAll(".boxText");

var choice = "X";
for (let i = 0; i < boxes.length; i++) {
  boxes[i].setAttribute("onclick", `play(${i})`);
}

function play(i) {
  if (choice === "X" && boxText[i].innerHTML == '') {
    boxText[i].innerHTML = choice;
    win();
    choice = "O";
    document.querySelector("#player").innerHTML = choice;
  }
  else if (choice === "O" && boxText[i].innerHTML == '') {
    boxText[i].innerHTML = choice;
    win();
    choice = "X";
    document.querySelector("#player").innerHTML = choice;
  }
  else {
    alert("invalid Move");
  }
}

function win() {
  if (boxText[0].innerHTML == boxText[1].innerHTML && boxText[1].innerHTML == boxText[2].innerHTML && boxText[0] != "" && boxText[1] != "" && boxText[2].innerHTML != "") {
    document.getElementById("turn").innerHTML = `Player ${choice} wins`;
    off();
  }
  else if (boxText[3].innerHTML == boxText[4].innerHTML && boxText[4].innerHTML == boxText[5].innerHTML && boxText[3] != "" && boxText[4] != "" && boxText[5].innerHTML != "") {
    document.getElementById("turn").innerHTML = `Player ${choice} wins`;
    off();
  }
  else if (boxText[6].innerHTML == boxText[7].innerHTML && boxText[7].innerHTML == boxText[8].innerHTML && boxText[6] != "" && boxText[7] != "" && boxText[8].innerHTML != "") {
    document.getElementById("turn").innerHTML = `Player ${choice} wins`;
    off();
  }
  else if (boxText[0].innerHTML == boxText[3].innerHTML && boxText[3].innerHTML == boxText[6].innerHTML && boxText[0] != "" && boxText[3] != "" && boxText[6].innerHTML != "") {
    document.getElementById("turn").innerHTML = `Player ${choice} wins`;
    off();
  }
  else if (boxText[1].innerHTML == boxText[4].innerHTML && boxText[4].innerHTML == boxText[7].innerHTML && boxText[1] != "" && boxText[4] != "" && boxText[7].innerHTML != "") {
    document.getElementById("turn").innerHTML = `Player ${choice} wins`;
    off();
  }
  else if (boxText[2].innerHTML == boxText[5].innerHTML && boxText[5].innerHTML == boxText[8].innerHTML && boxText[2] != "" && boxText[5] != "" && boxText[8].innerHTML != "") {
    document.getElementById("turn").innerHTML = `Player ${choice} wins`;
    off();
  }
  else if (boxText[0].innerHTML == boxText[4].innerHTML && boxText[4].innerHTML == boxText[8].innerHTML && boxText[0] != "" && boxText[4] != "" && boxText[8].innerHTML != "") {
    document.getElementById("turn").innerHTML = `Player ${choice} wins`;
    off();
  }
  else if (boxText[2].innerHTML == boxText[4].innerHTML && boxText[4].innerHTML == boxText[6].innerHTML && boxText[2] != "" && boxText[4] != "" && boxText[6].innerHTML != "") {
    document.getElementById("turn").innerHTML = `Player ${choice} wins`;
    off();
  }
  else if (boxText[0].innerHTML != "" && boxText[1].innerHTML != "" && boxText[2].innerHTML != "" && boxText[3].innerHTML != "" && boxText[4].innerHTML != "" && boxText[5].innerHTML != "" && boxText[6].innerHTML != "" && boxText[7].innerHTML != "" && boxText[8].innerHTML != "") {
    document.getElementById("turn").innerHTML = `Game Draw`;
    off();
  }
}

document.querySelector("#reset").addEventListener("click", reset);
function reset() {
  document.getElementById("turn").innerHTML = `Turn   >>>   <span id="player">X</span>`;
  document.querySelector("#player").innerHTML = "X";
  choice = "X";
  for (let i = 0; i < boxes.length; i++) {
    boxText[i].innerHTML = "";
    boxes[i].setAttribute("onclick", `play(${i})`);
  }
}


function off() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].removeAttribute("onclick");
  }
}