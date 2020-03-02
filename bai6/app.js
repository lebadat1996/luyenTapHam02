function integer(inputNumber) {
    if (inputNumber > 0) {
        return true;
    }
    return false;
}

function result() {
    let a = document.getElementById("number").value;
    document.getElementById("result").innerHTML = integer(a);
}