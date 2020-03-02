function show() {
    let addString = document.getElementById("number").value;
    let addString1 = document.getElementById("number1").value;
    let array = addString.split(" ");
    console.log(array);
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (addString1 === array[i]) {
            count++;
        }
    }
    document.getElementById("result").innerHTML = count;
}
