//object type Array
//VALUE TYPE ARRAY OF OBJECT
let students:{"Name":string, "Age":number}[]= [
    {"Name": "John", "Age": 23},
    {"Name": "David", "Age": 24}
]

for(var student of students)
{
    console.log(`${student.Name} - ${student.Age}`)
}