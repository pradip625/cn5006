const dateofbirth="11/06/2001"
const getStudentName =()=>
{
    return " pradip kumar kushwaha"
}
const getCampusName = ()=>
{
    return "  University of East London "
}
exports.getName= getStudentName
exports.location =getCampusName
exports.dob =dateofbirth
exports.studentgrade=(marks)=>
{
    if ( marks > 60 && marks<80)
        return( "grade B")
}