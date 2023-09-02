var CategoryName = "Electronics";

var DemoClass = class {};

if(CategoryName == "Electronics") {
    DemoClass = class {
        ProductName = "TV";
        Price = 34999.22
    }
} else {
    DemoClass = class {
        EmpName = "John";
        Salary = 35000.11
    }
}