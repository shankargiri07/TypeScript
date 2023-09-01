interface IProduct
{
    Name:string;
    readonly Price:number;
    Stock:boolean,
    Rating?:number
}

let products : IProduct = {
    Name:" Samsung TV",
    Price:34999.22,
    Stock:true,
    Rating:4.5
}

console.log(`
    Name:${products.Name}
    Price:${products.Price}
    Stock:${products.Stock}
    Rating:${products.Rating}
`)