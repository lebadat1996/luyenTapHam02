function integer() {
        let a = parseInt(document.getElementById("number").value);
        let b = parseInt(document.getElementById("number1").value);
        let c = parseInt(document.getElementById("number2").value);
        if(a<b && a<c){
                document.write("min=" + a);
                if(b<a && b<c){
                        document.write("min=" +b );
                        if(c<b && c<a){
                                document.write("min=" +c);
                        }
                }
        }
}

