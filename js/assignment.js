// Compute Science: Pass maths, one of the languages and either Physics or Chemistry
// Journalism: Pass maths, english, kiswahili and one of the humanities
// Engineering: Pass maths, one of the languages, one humanity and either physics or Chemistry
// Medicine: Pass maths, one of the languages, chemistry and one of the humanities
// If someone passes all the subjects, the output should be, "You can choose a course of your choice"
// Should tell a student when he or she has not qualified for any of the courses

    let maths ="fail";
    let english= "pass";
    let chemistry= "pass";
    let physics= "pass";
    let kiswahili= "pass";
    let geograpy="pass"
    let history = "pass"





{if((maths=="pass") && (english=="pass") && (kiswahili=="pass") && (chemistry =="pass") && (physics=="pass")){
    console.log("you can choose the course of you choice") 
}else if((maths== "pass") && (english=="pass") && ( kiswahili=="pass")&&((history=="pass") || (geograpy=="pass"))){
    console.log("jornalism")
}else if( (maths=="pass") && ((kiswahili=="pass")|| (english=="pass")) && ((physics=="pass")||(chemistry=="pass")) && ((geograpy=="pass")||(history=="pass"))){
    console.log("engineering")
}else if((maths=="pass") && ((english=="pass") || (kiswahili=="pass")) && (chemistry=="pass")&&((geograpy=="pass")||(history==pass))){
    console.log("medicine")
}else if ( (maths=="pass") && (( english == "pass") || ( kiswahili== "pass")) && ((physics=="pass") || (chemistry=="pass"))){
    console.log("computer science")

}else(console.log("not qialified"))
}
