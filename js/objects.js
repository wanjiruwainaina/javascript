{
    const person1={
        gender:"male",
        height:"short",
        race:"black"
    }
    const person2={
        gender:"female",
        height:"tall",
        race: "white"
    }
    console.log(person1.race)
    console.log(person2.height)
}
{
    const person3={
        fname:"jack",
        lname:"joe",
        yob:2016,
        age:function(currentyear){
            return currentyear-  this.yob
    },
    name:function(){
        console.log(this.fname+""+this.lname)
    }

}
    console.log(this.fname+""+this.lname) 
    console.log(person3.age(2024))
}