function ran(digit) {
    var result="";
    for(i=0;i<digit;i++){
        result=result+(Math.floor(Math.random()*10));
    }
    alert(result);
}
