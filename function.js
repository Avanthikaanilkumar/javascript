function greatest(a,b,c){
    if(a>b&&a>c){
        console.log(a,"is greater");
    }
    else if(a<b&&b>c){
        console.log(b,"is greater");
    }
    else{
        console.log(c,"is greater");
        }
}
greatest(6,4,5)