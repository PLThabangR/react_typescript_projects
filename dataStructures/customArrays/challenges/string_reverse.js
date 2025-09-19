
const username = "John Doe";

//String reverse

    function reverseString(str) {
        //convert string to array
        let arr = str.split("")

        let reversed = ""
        for(let i=arr.length-1;i>=0;i--)
    {
        reversed += username[i]
    }
 


    return reversed

      }

      console.log(reverseString(username));