// Create a function that takes an array of arrays e.g [[8,9,4,56,78,], [67, 89, 98], [56,45,32,45], [45,67,80]] and returns a single array that has the sum of all the elements in each inner array. It should also print the sum of all the elements in the array.
//        From the above array example it should return: [155, 254, 178, 192] and prints 779 as the total sum.
//        Use  forEach loops
// {

    function sunofarrays(arrays){ 
    let arrays = [[8,9,4,56,78], [67, 89, 98], [56,45,32,45], [45,67,80]];
    let sum = 0;
    let overole=[]
    arr.forEach(Array => {
         let sum = sum + arrays.index
        totalsum=sum+1
            overole.push(sum)
    });
    console.log("sum");
    
    }
console.log(totalsum);

// function sumOfInnerArrays(arrays) {
//     let result = [];
//     let totalSum = 0;

//     arrays.forEach(innerArray => {
//         let sum = innerArray.reduce((acc, val) => acc + val, 0);
//         result.push(sum);
//         totalSum += sum;
//     });

//     console.log("Total sum:", totalSum);
//     return result;
// }

// Test the function
let arrays = [[8,9,4,56,78], [67, 89, 98], [56,45,32,45], [45,67,80]];
console.log(sumOfInnerArrays(arrays)); // Output: [155, 254, 178, 192]







