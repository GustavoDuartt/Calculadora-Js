var isZeroDisplayed = false;
var maxDisplayLength = 10; 

function insert(num) {
    var display = document.getElementById('display');
    if (display.innerHTML === "0") {
        display.innerHTML = num;
        isZeroDisplayed = false;
    } else if (display.innerHTML.length < maxDisplayLength) {
        display.innerHTML += num;
    }
}

function clean() {
    document.getElementById('display').innerHTML = "0";
}

function back() {
    var display = document.getElementById('display');
    var currentDisplay = display.innerHTML;
    if (currentDisplay.length > 0) {
        display.innerHTML = currentDisplay.substring(0, currentDisplay.length - 1);
        if (display.innerHTML === "") {
            display.innerHTML = "0";
        }
    }
}


function calcular() {
    var display = document.getElementById('display').innerHTML;
    if (display) {
        var result = eval(display);
        var roundedResult = Math.round(result * 1e10) / 1e10; // Arredonda para 10 dígitos
        if (roundedResult.toString().length > maxDisplayLength) {
            display = roundedResult.toPrecision(maxDisplayLength);
        } else {
            display = roundedResult;
        }
        document.getElementById('display').innerHTML = display;
    } else {
        document.getElementById('display').innerHTML = "Inválido";
    }
}