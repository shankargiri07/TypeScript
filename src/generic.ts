interface IProducts
{
    Name:string;
    Price:number;
}

interface IEmployee
{
    FirstName:string;
    Designation:string;
    Salary:number
}

class Service
{
    public GetData<T>(data:T){
        for(var property in data){
            console.log(`${property} : ${data[property]}`)
        }
    }
}
let object = new Service()
console.log("Empoyee Details")
object.GetData<IEmployee>({FirstName:"John", Designation:"Manager", Salary:50000});
console.log("Product Details")
object.GetData<IProducts>({Name:"Samsung TV", Price:35000});
//object.GetData<IProducts[]>([{Name:"Samsung TV", Price:35000}, {Name:"Phone", Price:15000}])