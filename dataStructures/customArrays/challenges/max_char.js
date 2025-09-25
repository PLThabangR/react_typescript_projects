


const maxChar=(str) =>{
 const arr = str.split("")
charObj={}

for(let i of arr){
    if(charObj[i]){
        //increment the value
        charObj[i]++
    }else{
        //create a key value pair
        charObj[i]=1
    }    
}
console.log(charObj)

let maxChar=""
let maxCount=0
for(let char in charObj){
    if(charObj[char]>maxCount){
        maxCount=charObj[char]
        maxChar=char
    }
}

return maxChar
   


}


console.log(maxChar("abbayteeee"))