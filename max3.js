const jim=56;
const tim=78;
const kim=45;
if(jim>tim && jim>kim){
    console.log("jim bigger than tim and kim");
}
else if(tim>jim && tim>kim){
    console.log("tim bigger than jim and kim");
}
else{
    console.log("kim bigger than jim and tim");
}

function getMax(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}

const maxValue= getMax(45, 78, 100);
console.log("The maximum value is: ", maxValue);


