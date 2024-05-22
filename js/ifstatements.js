//0 - 3 child  should be at home
    // 3 - 6 should be kindergarten
    //6-10 lower primary
    //10 - 14 upper primary
    //15 - 18 high school
    //18 - 24 campus
    //24 - 60 - employed
    // 60 120 retired
    {
        let age = 20
        if(age<=3){
            console.log("should be home")
        }else if(age<=6){
            console.log("kindergarten")
        }else if(age<=14){
            console.log("upper primary")
        }else if(age<=18){
            console.log("highscholl")
        }else if(age<=24){
            console.log("campus")
        }else if(age<=60){
            console.log("employed")
        }else{
            console.log("retired")
        }
    }