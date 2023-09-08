interface IOracle
{
    UserName:string;
    Password:string;
    Database:string;
}

interface IMySql
{
    Host:string,
    User:string,
    Pwd:string,
    Db:string
}

interface IMongo
{
    Url:string
}

class Database<T>
{
    public ConnectionString:T|null = null;
    public Connect():void {
        for(var property in this.ConnectionString) {
            console.log(`${property} : ${this.ConnectionString[property]}`)
        }
    }
}

let oracle = new Database<IOracle>();
console.log("---- Oracle Connection ----")
oracle.ConnectionString = {
    UserName:"scott",
    Password:"scott123",
    Database: "studentdb"
}
oracle.Connect();

console.log("---- MySql Connection ----")
let mysql = new Database<IMySql>();
mysql.ConnectionString = {
    Host:"localhost",
    User:"root",
    Pwd:"john123",
    Db: "Empdb"
}
mysql.Connect()

console.log("---- Mongo Connection ----")
let mongo = new Database<IMongo>();
mongo.ConnectionString = {
    Url:"mongodb://127.0.0.1:27017"
}
mongo.Connect()
