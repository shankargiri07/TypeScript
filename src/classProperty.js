var username = prompt("Enter Name");
var role = prompt("Enter Your Role", "admin|manager|customer");
var productname = prompt("Enter Product Name");
var Products = /** @class */ (function () {
    function Products() {
        this._productName = null;
    }
    Object.defineProperty(Products.prototype, "ProductName", {
        get: function () {
            return this._productName;
        },
        set: function (newName) {
            if (role == "admin") {
                this._productName = newName;
            }
            else {
                document.write("Hello ! ".concat(username, " your role ").concat(role, " is not authorized to set product name"));
            }
        },
        enumerable: false,
        configurable: true
    });
    return Products;
}());
var tvs = new Products();
tvs.ProductName = productname;
if (tvs.ProductName) {
    document.write("Product Name: " + tvs.ProductName);
}
