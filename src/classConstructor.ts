class Database
{
    constructor(dbname:string){
        console.log(`Connected with ${dbname} Database`)
    }
    public Insert():void {
        console.log("Record Insert")
    }
    public Delete():void {
        console.log("Reacod Deleted")
    }
}

let ins = new Database("oracle");
ins.Insert();