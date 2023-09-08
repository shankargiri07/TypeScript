// enum ErrorCodes
// {
//     Ok = 200,
//     Success,
//     NotFound = 404
//     InternalError
// }
// console.log(`Status Code for Success : ${ErrorCodes.Success}`)
var ErrorCodes;
(function (ErrorCodes) {
    // Ok,
    // NotFound = "Page Not Found",
    // ServerError = 503
    // A = 20,
    // B = 10,
    // C = A + B
    ErrorCodes[ErrorCodes["NotFound"] = 404] = "NotFound";
})(ErrorCodes || (ErrorCodes = {}));
console.log("".concat(ErrorCodes.NotFound, ": ").concat(ErrorCodes[404]));
