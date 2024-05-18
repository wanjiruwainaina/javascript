// {
//     let n = 5
//     let sum=0
//     for (let i=0; i<=n; i++){
//         sum=sum+i
//         console.log(sum)
//     }
// }
// {
//     const arr = [ 34,64,98,76,69]
    
//     for(let i=0;i<arr.length; i++){
//         arr[i] = arr[i]+2;
//     }
//     console.log(arr)
// }
// {
//     for(i=0; i<10; i++){
//         console.log("hello world")
//     }

// }
// {function get sum(n){
//     let sum = 0
//     for ( let i=0; i<=n; i++){
//         sum=sum+i
//     }
//     return sum;
// }
// }
// {
//     function getnumbers(n){
//         for( let i=0;i<=n; n++){
//             console.log(i)
//         }
//         }
// console.log(getnumbers(10))
// }


// {
//     function power(a,e){
//         let prod = 1
//         for( i=0; i <= e; i++){
//             prod= prod * a
            

//         }
//         return prod    
//     }
//     console.log(power(5,3))
// }
{
    const numbers = [45, 78, 90, 56, 43, 56, 78, 64]
    for (let i = numbers.length - 1; i >=0; i--){
        console.log(numbers[i]);
    }
    
}
{
    const numbers = [45, 78, 90, 56, 43, 56, 78, 64]
    function getsum(){
    let sum = 0
    for(let i = 0; i< number.length;i++){
        if(numbers[i] % 2 ==0)
        sum=sum + numbers[i]
    }
    return sum; 

}
console.log(getsum(numbers))
}
