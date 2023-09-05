class Super
{
    constructor(){
        console.log("Super Class Constructor")
    }
}

class Derived extends Super
{
    constructor(){
        super();
        console.log("Derived Class Constructor");
    }
}
let obje = new Derived();
obje;
