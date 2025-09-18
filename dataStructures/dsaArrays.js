// ************Part 1*************** */
// Custom array
class MyArray{
constructor(){
        this.length = 0;
        this.data = {};
    }

    push(value){
        //in the current length of the array[index] add the value
         this.data[this.length] = value;
          //increment the length
          this.length++;
    }
    pop(){
      
    }
   

}


const myArray = new MyArray();

myArray.push(1);
myArray.push(2);

console.log(myArray);

myArray.pop();
console.log(myArray);

