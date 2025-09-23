
const capitalize = (str) =>{
   const sentence =  str.charAt(0).toUpperCase() + str.slice(1);
   return sentence
}



console.log(capitalize("hello"));