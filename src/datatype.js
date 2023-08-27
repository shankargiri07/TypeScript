// const bit:number = 0b1010;
// const exp:number = 2e3;
// console.log("Bit " + bit + "\n" + "Exponent " + exp)
// var usename:string = "John";
// var age:number = 23;
// var msg:string = "Hello ! " + usename + " you will be " + ( age + 1 ) + " netx year ";
// var msg2:string = `Hello ! ${usename} you will be ${age + 1} next year`;
// console.log(msg);
// console.log(msg2);
var mobile = "+91 987 6543 210";
if (mobile.match(/\+91\s\d{3}\s\d{4}\s\d{3}/)) {
    console.log("OTP Sent");
}
else {
    console.log("Invalid Mobile");
}
