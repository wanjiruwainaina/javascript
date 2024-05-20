{
    const arr= [56,78,89,90]
    function checkGreater(arr){
    let maximum = arr[0]
        for (let i of arr){
            if(i> maximum ){
                maximum = i;
            }
        }
        return maximum
}
console.log(checkGreater(arr))
}
// 
{
    const arr= [56,78,89,90]
    function checkGreater(arr){
    let maximum = arr[0]
        for (let i in arr){
            if(arr[i]> maximum ){
                maximum = arr[i];
            }
        }
        return maximum
}
console.log(checkGreater(arr))
}
// while loops
{   
    let x =0
    while(x <= 0){
        console.log(x);
        x--;
    }
    console.log(x)
    
}
