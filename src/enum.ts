// enum ErrorCodes
// {
//     Ok = 200,
//     Success,
//     NotFound = 404
//     InternalError
// }
// console.log(`Status Code for Success : ${ErrorCodes.Success}`)

enum ErrorCodes
{
    // Ok,
    // NotFound = "Page Not Found",
    // ServerError = 503
    // A = 20,
    // B = 10,
    // C = A + B

    NotFound = 404
}

console.log(`${ErrorCodes.NotFound}: ${ErrorCodes[404]}`)