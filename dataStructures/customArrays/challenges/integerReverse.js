//integer reverse
const reverseInteger = (num) => {
   const reversed  = parseInt(num.toString().split("").reverse().join(""));
   return reversed
}
   
const reverseIntForLoop=(num) =>{
   //conver to arraty 
   let arr = num.toString().split("")
   //reverse
   let reversed = ''

  for(let i of  arr){
   reversed = i+reversed 
  }
return reversed
}


console.log(reverseInteger(456))
console.log(reverseIntForLoop(456))