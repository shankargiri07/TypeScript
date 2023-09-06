class Employee
{
    public FirstName:string = "";
    public LastName:string = "";
    public Designation:string = "";
    public Print():void {
        document.write(`${this.FirstName} ${this.LastName} ${this.Designation}`)
    }
}

class Developer extends Employee 
{
    FirstName = "Raj";
    LastName = "Kumar";
    Designation = "Developer";
    Role = "Developer Role : Build, Debug, Test, Deploy";
    Print() {
        super.Print()
        document.write(this.Role);
    }
}

class Admin extends Employee 
{
    FirstName = "Deepak";
    LastName = "Kumar";
    Designation = "Admin";
    Role = "Admin Role : Authorization and Authentication";
    Print() {
        super.Print()
        document.write(this.Role);
    }
}

class Manager extends Employee 
{
    FirstName = "Tom";
    LastName = "Hanks";
    Designation = "Manager";
    Role = "Manager Role : Approval";
    Print() {
        super.Print()
        document.write(this.Role);
    }
}

let employees :Employee[] = [new Developer(), new Admin(), new Manager()]