// ***************************Part 1
// O(n) to the power of 1
//time complexity will increase as the input size increases
const fruits = ["apple", "banana", "cherry", "durian", "berry"];
function searchForItem(item) {
    for (let i = 0; i < fruits.length; i++) {
        // O(n) if fruits is an array
        if (fruits[i] == item) {
            console.log("found", item + " at index " + i);
            return true;
        }

     
        
    }
}
const friuitName= "banana";

const results= searchForItem(friuitName);

console.log(results);


//************Part 2*************** */
//O(1)
//this function is constant
//the rime to find an item will remain constant

const numbers = [1, 2, 3, 4]
//if you know the index of the item
const  findItem=(array,index) => array[index]; 


console.log(findItem(numbers,0));

// ************Part 3*************** */
//O(n^2)
//this function is logarithmic
//this dunction time complexity will increase coz is a double
function findPairs(){
    //O(n^2) this means nested loops
    for(let i=0;i<numbers.length;i++){
        for(let j=i+1;j<numbers.length;j++){
            console.log("Pair:",numbers[i],numbers[j]);
        }
    }

    //o(n)
    for (let i = 0; i < numbers.length; i++) {
        console.log("Number:", numbers[i]);
    }

    // this will result in a time complexity of O(n^2+n)
}


findPairs(numbers);


// O(log n)
/*
algorithim that grows  logarithmic with size input
*/ 