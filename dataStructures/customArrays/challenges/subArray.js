

const subArray = (array,num) =>{

    results = Number.MAX_SAFE_INTEGER
   left = 0
   sum=0

    for(let i=0 ;array.length;i++){
        
        sum+=array[i]
        while(sum>=num){
            sum-=array[left]
            left++
        }
        if(sum==num){
            results = Math.min(results,i-left+1)
        }
    
    }
    r


}


const arr=[1,1,1,1,3,3,5]

subArray(arr,3 )