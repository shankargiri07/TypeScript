// const ProductId = Symbol();

// let product:{Name:string, Price:number, ProductId:number} = {
//     ProductId : 1,
//     Name : "TV",
//     Price : 35999.22
// };

// for(var property in product)
// {
//     console.log(property)
// }
const ProductId = Symbol();

let product:any = {
    ProductId : 1,
    Name : "TV",
    Price : 35999.22
};

for(var property in product)
{
    console.log(property)
}

console.log("ProductId" + product[ProductId])