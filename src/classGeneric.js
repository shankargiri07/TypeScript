var Database = /** @class */ (function () {
    function Database() {
        this.ConnectionString = null;
    }
    Database.prototype.Connect = function () {
        for (var property in this.ConnectionString) {
            console.log("".concat(property, " : ").concat(this.ConnectionString[property]));
        }
    };
    return Database;
}());
var oracle = new Database();
console.log("---- Oracle Connection ----");
oracle.ConnectionString = {
    UserName: "scott",
    Password: "scott123",
    Database: "studentdb"
};
oracle.Connect();
console.log("---- MySql Connection ----");
var mysql = new Database();
mysql.ConnectionString = {
    Host: "localhost",
    User: "root",
    Pwd: "john123",
    Db: "Empdb"
};
mysql.Connect();
console.log("---- Mongo Connection ----");
var mongo = new Database();
mongo.ConnectionString = {
    Url: "mongodb://127.0.0.1:27017"
};
mongo.Connect();
