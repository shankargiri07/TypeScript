var username:string|null = prompt("Enter Name");
var role:string|null = prompt("Enter Your Role", "admin|manager|customer");
var productname:string|null = prompt("Enter Product Name");

class Products
{
    public _productName:string|null = null;
    get ProductName(){
        return this._productName;
    }

    set ProductName(newName:string|null){
        if(role=="admin") {
            this._productName = newName
        } else {
            document.write(`Hello ! ${username} your role ${role} is not authorized to set product name`)
        }
    }
}

let tvs = new Products();
tvs.ProductName = productname;
if(tvs.ProductName) {
    document.write("Product Name: " + tvs.ProductName);
}
