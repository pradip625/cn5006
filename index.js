function employeeinfo(name, salary){
    console.log( "employee name  "+name)
    console.log(" employee slalary  "+salary)
}
console.log("this is my first js programme");
var esalary = 4000
var ename = "hari"
employeeinfo( ename, esalary)
// section 2 creating arrow function
const Employeeskill= ( skills)=>{
 console.log( "expert in  "+skills)
}
Employeeskill(" java ")//

 //section 3
const student = require('./studentinfo')
const person = require('./person')

 console.log("student name is  ",student.getName())
 console.log("student location is  ",student.location())
 console.log(student.studentgrade(70))
console.log( "date of birth is  ",student.dob)

person1 = new person( " ram ", " USA", "ram@uel.ac.uk")
console.log("using person module  ", person1.getpersoninfo() )
//section 4
const exercise = require('./exercise4')


