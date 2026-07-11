function multiply(num1,num2){
    if(typeof num1!=='number' || typeof num2 !=='number'){
        return 'only number input valid,give number';
    }
    const mult=num1*num2;
    return mult;
}
const rt=multiply(4,7);
console.log(rt);


// string error handle 

function FullName(first,second){
    if(typeof first!=='string' ){
        return 'First name should be string';
    }
    else if(typeof second!=='string'){
        return 'second name should be String';
    }

    else{
        const full= first +' '+ second;
        return full;
    }
    //without  Else we can write 
    // const full= first +' '+ second;
    //  return full;

}

const fullName=FullName('rony',6);
console.log(fullName);


// Array error handle 

function getSecondArrayElement(numbers){
    //js array is a object thats why we have to check here this is array or not,do not check object
    if(Array.isArray(numbers)!== true){
        return 'please give me array';
    }
    const seond=numbers[1];
    return seond;
}

const secondElement=getSecondArrayElement(33,53,5,3);
console.log(secondElement);