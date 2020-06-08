window.onload = function() {
    this.init();
}

//Sets up game board
function init() {
    table = document.getElementById("gameBoard");

    size = 15;

    for(var i = 0; i < size + 1; i++) {
        table.insertRow();
    }

    for(var i = 0; i < size + 1; i++) {
        for(var j = 0; j < size + 1; j++) {
            table.rows[i].insertCell();
            if(i > 0 && j > 0) {
                table.rows[i].cells[j].addEventListener("click", function() {
                    this.classList.toggle("active");
                });
            }
        }
    }
    data = getData();
    populateHints(data);
}

//Resets board to initial setup
function reset() {
    for(var i = 0; i < size + 1; i++) {
        for(var j = 0; j < size + 1; j++) {
            table.rows[i].cells[j].className = "";
        }
    }
}

function showSol() {
    var cnt = 0;
    for(var i = 1; i <= size; i++) {
        for(var j = 1; j <= size; j++) {
            if(data.charAt(cnt) == "1")
                table.rows[i].cells[j].className = "active";
            else
                table.rows[i].cells[j].className = "";
            cnt++;
        }
    }
    checkWin();
}

//Returns puzzle data as a string
function getData() {
    return  "000001100111100" +
            "000011110101110" +
            "000011110100110" +
            "000001101010100" +
            "000000010111100" +
            "000110001000010" +
            "101110000111010" +
            "011100000100010" +
            "001111000100010" +
            "001110100111100" +
            "101110001111100" +
            "111100011111110" +
            "011000011101111" +
            "010000011100111" +
            "011000111000001";
}

//Fills numbered cells with puzzle data
function populateHints(data) {
    //Populates top cells with data
    for(var i = 1; i <= size; i++) {
        var str = "";
        var cnt = 0;
        for(var j = 0; j < size; j++) {
            var index = size*j + i - 1;
            if(data.charAt(index) == "1") {
                cnt+=1;
            }
            if(data.charAt(index) == "0" && cnt != 0) {
                str += (cnt + "<br>");
                cnt = 0;
            }
        }
        if(cnt != 0) {
            str += (cnt);
        }
        table.rows[0].cells[i].innerHTML = str;
    }
    //Populates left-side cells with data
    for(var i = 1; i <= size; i++) {
        var str = "";
        var cnt = 0;
        for(var j = 0; j < size; j++) {
            var index = size*(i - 1) + j;
            if(data.charAt(index) == "1") {
                cnt+=1;
            }
            if(data.charAt(index) == "0" && cnt != 0) {
                str += (cnt + "  ");
                cnt = 0;
            }
        }
        if(cnt != 0) {
            str += (cnt);
        }
        table.rows[i].cells[0].innerHTML = str;
    }
}

function checkWin() {
    var str = "";
    for(var i = 1; i <= size; i++) {
        for(var j = 1; j <= size; j++) {
            if(table.rows[i].cells[j].classList.contains("active")) {
                str += "1";
            }
            else {
                str += 0;
            }
        }
    }
    if(data === str) {
        alert("You win.");
    }
}