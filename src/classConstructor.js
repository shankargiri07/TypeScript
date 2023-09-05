var Database = /** @class */ (function () {
    function Database(dbname) {
        console.log("Connected with ".concat(dbname, " Database"));
    }
    Database.prototype.Insert = function () {
        console.log("Record Insert");
    };
    Database.prototype.Delete = function () {
        console.log("Reacod Deleted");
    };
    return Database;
}());
var ins = new Database("oracle");
ins.Insert();
