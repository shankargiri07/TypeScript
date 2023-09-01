var product = {
    Name: "TV",
    Price: 45000.22,
    Qty: 2,
    Total: function () {
        return this.Price * this.Qty;
    },
    Print: function () {
        console.log("\n            Name:".concat(this.Name, "\n            Price:").concat(this.Price, "\n            Qty:").concat(this.Qty, "\n            Total:").concat(this.Total(), "\n        "));
    }
};
product.Print();
