//Every function returns a value. 
//If one isn't specified, it returns undefined
//return for functions is like else if after a true if statement.
//Nothing under it works
//Rather than make the function print the thing,
//have it return that thing and print it outside
function someFunc(){
return 8;
}

const result = someFunc();

console.log(result);

function addTwoNums(num1, num2){
   return num1 + num2;
}

const add = addTwoNums(20,2020);
console.log(add);