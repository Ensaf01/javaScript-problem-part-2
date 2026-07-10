/**
 * FirstPrice --> first 80 products no discount ,let 100 tk
 * SecondPrice --> 81 to 120(40) products have discount 10% --> 90 tk
 * thirdPrice --> above 121 products have discount 30% ---> 70 tk
 */

function getDiscount(quantity){
    const FirstPrice=100 ;
    const SeconfPrice=90;
    const ThirdPrice=70 ;
    if(quantity <= 80){
        const FirstTotalPrice=80*FirstPrice;
        return FirstTotalPrice;
    }
    else if(quantity<=120){
         const FirstTotalPrice=80*FirstPrice;
         const remainingProductPrice=SeconfPrice*(quantity-80);
         return FirstTotalPrice+remainingProductPrice;
    }
    else{
        const FirstTotalPrice=80*FirstPrice;
        const remainingProductPrice=SeconfPrice*40;
        const thirdRemainingProductsPrice=ThirdPrice*(quantity-120);
        return FirstTotalPrice+remainingProductPrice+thirdRemainingProductsPrice;
    }
}

const result=getDiscount(121);
console.log(result);