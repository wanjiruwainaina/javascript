{function sumNumbersGreaterThanEqualToN(n) {
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
      sum = i+1;
    }
    console.log("sum") ;}
  
  n = 5;
   sum = sumNumbersGreaterThanEqualToN(n);
  console.log("Sum of numbers greater than or equal to", n, "is:", sum);
}

{function getsum(n){
  return(n*(n+1))/2
}
let ans= getsum(5)
console.log(ans)
}
{
  function getsum(n){
    if( n==0) {
      return 0
    }
    return getsum(n-1) + n;
  }
  console.log(getsum(5))
}
{
  function getarea(a,b,h){
    let ans=((a+b)*h/2)
    return ans
}
console.log(getarea(4,5,12))
}

  