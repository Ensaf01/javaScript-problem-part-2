const products=[

    {name:'shampo',price: 1000},
    {name:'pant',price: 5000},
    {name:'shirt',price: 600},
    {name:'chiruni',price: 400},
    {name:'panjabi',price: 3000}
]

function getShoppingCost(cost){
    let sum=0;
    for(const product of cost){
        sum=sum+product.price;
    }
    return sum;
}
const total=getShoppingCost(products);
console.log(total);