const ridoy= 57;
const salam=96;

if(ridoy>salam){
    console.log("ridoy will get the strawbery");
} else {
    console.log("salam will get the strawbery");

}

function getMax(num1,num2){
    if(num1>num2){
        return num1;

    }
    else{
        return num2
    }
}

const maxValue= getMax(45, 78);
const maxValue2= getMax(100, 78);
const last_maxValue= getMax(maxValue, maxValue2);

console.log("The maximum value is: ", last_maxValue);