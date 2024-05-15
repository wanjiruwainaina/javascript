{
    let x = 9
    switch(x){
    case 4:
        console.log("x is 4")
        break;
    case 9:
        console.log( "x is 9")   
        break;
    default:
        console.log("value not found")      

}
}
{
    let a =21
     x = (a % 3)
    switch (x){
    case 0:
            console.log(" a is divisible by 3")
            break;
    case 1:
        console.log("a is not divisible by 3") 
        break;       

    }
}
{
    let maths ="pass";
    let english= "pass";
    let chemistry= "pass";
    let physics= "pass";
    let kiswahili= "pass";
      // computer science: maths or pass one of the languages
    // journlism: pass maths, english and kiswahili
    // engineer: maths, one of the languages and pass physics\
    // medicine: pass maths, pass one of the languages and pass chemistry
    //what happens if someone passes all subjects -> output of: you can chooose a course of your choice.
    // you are not able to do any course

    if((maths=="pass") && (english=="pass") && (kiswahili=="pass") && (chemistry =="pass") && (physics=="pass")){
        console.log("you can choose the course of you choice") 
    }else if((maths== "pass") && (english=="pass") && ( kiswahili=="pass")){
        console.log("jornalism")
    }else if( (maths=="pass") && ((kiswahili=="pass")|| (english=="pass")) && (physics=="pass")){
        console.log("engineering")
    }else if((maths=="pass") && ((english=="pass") || (kiswahili=="pass")) && (chemistry=="pass")){
        console.log("medicine")
    }else if ( (maths=="pass") && ( english == "pass") || ( kiswahili== "pass")){
        console.log("computer science")
    }else{ console.log("you are not able to do any coures")}
}
