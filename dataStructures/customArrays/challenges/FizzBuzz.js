

const fizzBuzz = (n) => {

    if(n % 3 === 0 && n % 5 === 0) return "FizzBuzz"
    if(n % 3 === 0) return "Fizz"
    if(n % 5 === 0) return "Buzz"
    return n

}

console.log(fizzBuzz(15));
console.log(fizzBuzz(1));
console.log(fizzBuzz(2));
console.log(fizzBuzz(3));
console.log(fizzBuzz(4));
console.log(fizzBuzz(5));
console.log(fizzBuzz(6));
console.log(fizzBuzz(7));
console.log(fizzBuzz(8));
console.log(fizzBuzz(9));
console.log(fizzBuzz(10));