interface ProductContract
{
    Name:string;
    Price:number;
    Qty:number;
    Total():number;
    Print():void;
}

abstract class ProductTemplate implements ProductContract
{
    public Name:string = "";
    public Price: number = 0;
    public Qty: number = 0;
    public abstract Total(): number;
    public abstract Print(): void;
}

class ProductComponent extends ProductTemplate
{
    Name = "Samsung TV";
    Price = 350000;
    Qty = 2;

    Total(){
        return this.Qty * this.Price
    }
    Print(){
        console.log(`Name=${this.Name}\nPrice=${this.Price}\nQty=${this.Qty}\nTotal=${this.Total()}`)
    }
}

let tv = new ProductComponent();
tv.Print();