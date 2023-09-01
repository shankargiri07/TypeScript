interface IProducts
{
    Name:string;
    Price:number;
    Qty:number
    
    Total():number;
    Print?():void;
    //Details(Name:string, Price:number):void
}

let product:IProducts = {
    Name:"TV",
    Price:45000.22,
    Qty:2,

    Total: function() {
        return this.Price * this.Qty;
    },
    Print:function(){
        console.log(`
            Name:${this.Name}
            Price:${this.Price}
            Qty:${this.Qty}
            Total:${this.Total()}
        `)
    }
}
product.Print();