
const username = "John Doe";

const usernameToArray = username.split(""); 

const reverseArray= (str)=> str.split("").reverse().join("") == str;


console.log(reverseArray("abba"));

const palindrome = (str) => {

    const reverse    = str.split("").reverse().join("");
   
    if(reverse == str){
        return true
    }

    return false    
}


console.log(palindrome("abbae"));