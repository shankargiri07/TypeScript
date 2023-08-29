//object type Array
//VALUE TYPE ARRAY OF OBJECT
var students = [
    { "Name": "John", "Age": 23 },
    { "Name": "David", "Age": 24 }
];
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student = students_1[_i];
    console.log("".concat(student.Name, " - ").concat(student.Age));
}
