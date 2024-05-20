{   
    function  countvowels(userinput){
        let vowels = "aeiou";
        let count=0;
        for(i=0; i<userinput.length; i++){
            if(vowels.includes(userinput[i])){
                count=count + 1;
            }
        }
        return count;

    }

   console.log(countvowels("zindua"));
}