function add(num1,num2){
    return num1+num2;
}

function subs(num1,num2){
    return num1 - num2;
}
function multi(num1,num2){
    return num1*num2;
}
function div(num1,num2){
    return num1/num2;
}

function calculator(a,b,operation){
    if(operation==='add'){
        const result=add(a,b);
        return result;
    }
    else if(operation==='subs'){
        return subs(a,b);
    }
    else if(operation==='div'){
        return div(a,b);
    }
    else if(operation==='multi'){
        return multi(a,b);
    }
    else{
        return "Only 'add','subtract','multiply','divided' operation allowed"
    }
}
const results=calculator(2,4,'add');
console.log(results);