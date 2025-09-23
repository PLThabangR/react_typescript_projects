//integer reverse
const reverseInteger = (num) => {
   const reversed  = parseInt(num.toString().split("").reverse().join(""));
   return reversed
}
   


console.log(reverseInteger(456))