function convert() {
    let a = parseInt(document.getElementById("number1").value);
    let b = parseInt(document.getElementById("number2").value);
    let temp =a ;
    a=b;
    b=temp;
    document.getElementById("number1").value= a;
    document.getElementById("number2").value= b;
}