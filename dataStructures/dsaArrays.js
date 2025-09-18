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
          return this.length
    }
      get(index){
          return this.data[index];
      }

      

     
    pop(){
        //get the final item
        const lastItem = this.data[this.length-1];
        //delete the last item
        delete this.data[this.length-1];
        //decrement the length
        this.length--;
        //return the last item
        return lastItem
      
    }
   

}


const myArray = new MyArray();

console.log("Initial Length : ",myArray.length);
myArray.push("A");
myArray.push("B");
myArray.push("C");
console.log("After push : ",myArray.length);

console.log("Index 1 : ",myArray.get(1));


myArray.pop();
console.log("After pop : ",myArray);



