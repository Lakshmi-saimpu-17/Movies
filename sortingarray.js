function sumDigPow(a, b) {
    // Your code here
    result =[];
    for(let i=a;i<=b;i++){
        digits = String(i).split(" ");
        if( i == digits.reduce((accum,currval) =>  accum+ currval ** (i + 1))){  
            result.push(i);
        }
        return result;
    }
}
  console.log(sumDigPow(1,10));
  console.log(sumDigPow(10,100));
