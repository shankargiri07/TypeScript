// let tv:{Name:string, Price:number, Stock?:boolean} = {
//     Name : "Samsung TV",
//     Price :4500.22,
// }
// console.log(`Name:${tv.Name}\nPrice:${tv.Price}`);

let tv:{Name:string, Price:number, Qty:number, Cities:string[], Rating:{Rate:number, Count:number}, Total:any, Print?:any} = {
    Name: "Samsung TV",
    Price: 45000.22,
    Qty: 2,
    Cities: ["Delhi", "Odisha"],
    Rating: {Rate:4.3, Count:345},
    Total: function() {
        return this.Price * this.Qty;
    },
    Print: function() {
        console.log(`
            Name:${this.Name}\n
            Price: ${this.Price}\n
            Qty: ${this.Qty}\n
            Total: ${this.Total()}\n
            Cities: ${this.Cities.toString()}\n
            Rating: ${this.Rating.Rate} [${this.Rating.Count}]
        `)
    }
}
tv.Print();