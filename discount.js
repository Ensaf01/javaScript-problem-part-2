/**
 * blow 100-----> 100 tk per products 
 * more than 100 --->90 tk per product
 */

function discountPrice(quantity){
    if(quantity <= 100){
        const total=quantity*100;
        return total;
    }
    else if(quantity <= 200){
        const total=quantity*90;
        return total;
    }
    else{
        const total=quantity*70;
        return total;
    }
}

const total=discountPrice(101);
console.log(total);