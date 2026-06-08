console.log("Welcome to my portfolio website");
function calculate(op) {
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
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

    document.getElementById("result").innerText = "Result: " + result;
}
