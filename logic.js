let number1= [];
const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll("button");;
const clear = document.querySelector("#clearbtn");
const deleteLast = document.querySelector("#deletebtn");
const rows1 = Array.from(document.querySelector(".row1").innerHTML.match(/[0-9]/g));
const rows2 = Array.from(document.querySelector(".row2").innerHTML.match(/[0-9]/g));
const rows3 = Array.from(document.querySelector(".row3").innerHTML.match(/[0-9]/g));
const rows4 = Array.from(document.querySelector(".row4").textContent.match(/[-+*/]/g));
const equal = Array.from(document.querySelector("#equal").innerHTML);
let digits = Array.from(Array.from(rows1 + rows2 + rows3 + rows4).sort().toString().replaceAll(",", ""));
screen.textContent = "";

function displayOnScreen(e){
    for (let j = 0; j < digits.length; j++) {
        if(digits[0] == e){
            screen.textContent += "*";
            number1.push(digits[0]);
            break;
        }
        if(digits[1] == e){
            screen.textContent += "+";
            number1.push(digits[1]);
            break;
        }
        if(digits[2] == e){
            screen.textContent += "-";
            number1.push(digits[2]);
            break;
        }
        if(digits[3] == e){
            screen.textContent += "/";
            number1.push(digits[3]);
            break;
        }
        if(digits[4] == e){
            screen.textContent += "0";
            number1.push(digits[4]);
            break;
        }
        if(digits[5] == e){
            screen.textContent += "1";
            number1.push(digits[5]);
            break;
        }
        if(digits[6] == e){
            screen.textContent += "2";
            number1.push(digits[6]);
            break;
        }
        if(digits[7] == e){
            screen.textContent += "3";
            number1.push(digits[7]);
            break;
        }
        if(digits[8] == e){
            screen.textContent += "4";
            number1.push(digits[8]);
            break;
        }
        if(digits[9] == e){
            screen.textContent += "5";
            number1.push(digits[9]);
            break;
        }
        if(digits[10] == e){
            screen.textContent += "6";
            number1.push(digits[10]);
            break;
        }
        if(digits[11] == e){
            screen.textContent += "7";
            number1.push(digits[11]);
            break;
        }
        if(digits[12] == e){
            screen.textContent += "8";
            number1.push(digits[12]);
            break;
        }
        if(digits[13] == e){
            screen.textContent += "9";
            number1.push(digits[13]);
            break;
        }  
    }
}

function calculate (){
    let a = parseInt(screen.textContent);
    let b = parseInt(screen.textContent);
    let operator = screen.textContent.slice(-1);
    operate(operator, a, b);
}

function clearScreen(){
    screen.textContent = "";
    number1 = [];
}

function deleteLastDigit(){
    screen.textContent = screen.textContent.slice(0, -1);
    number1.pop();
}

buttons.forEach((button) => {    
    button.addEventListener("click" , function(e){
        displayOnScreen(e.target.textContent);
    });
  });

clear.addEventListener("click", clearScreen);

deleteLast.addEventListener("click", deleteLastDigit);

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(operator, a, b){
    if (operator == "+") {
        add(a, b);
    }else if (operator == "-"){
        subtract(a, b);
    }else if (operator == "*"){
        multiply(a, b);
    }else if (operator == "/"){
        divide(a, b);
    }else{
        window.alert("Invalid operator");
    }
}