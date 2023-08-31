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

function Details(Name:string, Price?:number):void {
    if(Price)
    {
        console.log(`Name=${Name}\nPrice=${Price}`)
    } else {
        console.log(`Name=${Name}`)
    }
}
Details("Samsung TV", 35999.22);