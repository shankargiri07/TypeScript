var Product = /** @class */ (function () {
    function Product() {
        this.Name = "Samsung TV";
        this.Rating = {
            CustomerRating: { Rate: 3.4, Count: 342 },
            VendorRating: { Rate: 4.5, Count: 300 }
        };
    }
    Object.defineProperty(Product.prototype, "VendorRating", {
        get: function () {
            return this.Rating.VendorRating.Rate;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var tv = new Product();
console.log("Vendor Rating ".concat(tv.VendorRating));
