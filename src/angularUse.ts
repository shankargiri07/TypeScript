class Product
{
    public Name:string = "Samsung TV";
    public Rating:any = {
        CustomerRating: {Rate:3.4, Count:342},
        VendorRating: {Rate: 4.5, Count:300}
    }

    get VendorRating() {
        return this.Rating.VendorRating.Rate
    }
}

let tv = new Product();

console.log(`Vendor Rating ${tv.VendorRating}`)