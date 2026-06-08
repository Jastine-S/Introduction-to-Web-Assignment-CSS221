console.log("Welcome to my portfolio website");
console.log("JS is connected");

let lastResult = 0;

function calculate(op) {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let result;

    if (op === '+') {
        result = n1 + n2;
    } 
    else if (op === '-') {
        result = n1 - n2;
    } 
    else if (op === '*') {
        result = n1 * n2;
    } 
    else if (op === '/') {
        result = n1 / n2;
    } 
    else if (op === '=') {
        result = lastResult;
    }

    lastResult = result;

    document.getElementById("result").textContent = "Result: " + result;
}
