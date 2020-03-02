function factorial(inputNumber) {
    if (inputNumber <= 0) {
        alert("xin moi ban nhap so lon hon 0")
    } else {
        let sum = 1;
        for (let i = 1; i <= inputNumber; i++) {
            sum *= i;
        }
        return sum;
    }
}

function result() {
    let result = parseInt(document.getElementById("number").value);
    document.getElementById("result").innerHTML = factorial(result);
}