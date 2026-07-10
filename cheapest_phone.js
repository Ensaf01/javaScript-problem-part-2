//object compare

mobiles=[
    {name:'samsung',price: 30000,camera:'12mp',color:'black'},
    {name:'apple',price: 300000,camera:'12mp',color:'black'},
    {name:'oppos',price: 1000,camera:'12mp',color:'black'},
    {name:'walton',price: 100,camera:'12mp',color:'black'},
    {name:'Htc',price: 50000,camera:'12mp',color:'black'},
    {name:'xoami',price: 24000,camera:'12mp',color:'black'},
]

function getCheapestPhone(phones){
    let min=phones[0]
    for(const phone of phones){
        if(phone.price<min.price){
            min=phone;
        }
    }
    return min;
}

const result=getCheapestPhone(mobiles);
console.log(result);