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

    shift(){
        //get the first item
        const firstItem = this.data[0];
   
            //shift array to the left
        for(let i=0;i<this.length;i++){
            this.data[i] = this.data[i+1];
        }
            //get the last item
        // const lastItem = this.data[this.length-1];
        //delete the last item they as is undefined
        delete this.data[this.length-1];

        //decrement the length
        this.length--;
        //return the first item
        return firstItem
    }

    delete(index){
        //get the item by index
        const item = this.data[index];
        //shift array to the left from index 
        for(let i=index;i<this.length-1;i++){
            //delete the item here by shifting the array to the left starting from the index value
            this.data[i] = this.data[i+1];
        }
        //delete the last item which is undefined
        delete this.data[this.length-1];

        //decrement the length
        this.length--;
        //return the item deleted
        return item;
    }
   

}


const myArray = new MyArray();

console.log("Initial Length : ",myArray.length);
myArray.push("A");
myArray.push("B");
myArray.push("C");
myArray.push("D");
myArray.push("E");
console.log("After push : ",myArray.length);

console.log(myArray)



console.log("Index 1 : ",myArray.get(1));


myArray.pop();
console.log("After pop : ",myArray);


myArray.shift();
console.log("After shift : ",myArray);


myArray.delete(1);
console.log("After delete : ",myArray);


