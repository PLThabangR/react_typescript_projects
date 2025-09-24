
const capitalize = (str) =>{
    const strToLower = str.toLowerCase();
   //const sentence =  str.charAt(0).toUpperCase() + str.slice(1);
   //capitailze each word
   const sentence = strToLower.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
   return sentence
}



console.log(capitalize("hello worsSld this is my paragraph to uppere"));