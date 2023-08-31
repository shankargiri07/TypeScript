// function Hello(username:string):string
// {
//     return `Hello ! ${username}`
// }
// console.log(Hello("John"));
// function Welcome():void
// {
//     console.log("Welcome To TypeScript")
// }
// Welcome();
function Details(Name, Price) {
    if (Price) {
        console.log("Name=".concat(Name, "\nPrice=").concat(Price));
    }
    else {
        console.log("Name=".concat(Name));
    }
}
Details("Samsung TV", 35999.22);
