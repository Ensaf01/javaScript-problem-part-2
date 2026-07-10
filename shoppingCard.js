const products=[

    {name:'shampo',price: 1000 ,quantity: 2},
    {name:'pant',price: 5000 ,quantity: 2},
    {name:'shirt',price: 600 ,quantity: 1},
    {name:'chiruni',price: 400 ,quantity: 1},
    {name:'panjabi',price: 3000 ,quantity: 1},
]

function getTotalCost(products){
    let sum=0;
    for(const product of products){
        sum=sum+(product.price*product.quantity);
    }
    return sum;
}

const totalCost=getTotalCost(products);
console.log(totalCost);