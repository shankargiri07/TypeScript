var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.GetData = function (data) {
        for (var property in data) {
            console.log("".concat(property, " : ").concat(data[property]));
        }
    };
    return Service;
}());
var object = new Service();
console.log("Empoyee Details");
object.GetData({ FirstName: "John", Designation: "Manager", Salary: 50000 });
console.log("Product Details");
object.GetData({ Name: "Samsung TV", Price: 35000 });
//object.GetData<IProducts[]>([{Name:"Samsung TV", Price:35000}, {Name:"Phone", Price:15000}])
