// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.


function count_zero(number){
    let sum=0;
    let oneAns;
    for(const num of number){

const parse=parseInt(num);
        
if((parse===0)||(parse===1)){

    if(parse==0){
        sum+=1
    }
    else if( parse==1){
         oneAns=number;
    }
}


else{
console.log('please type the valid number it will only accept ony 0 and 1')
}
        

    }
    console.log(oneAns)
    return sum;


}




const binary='00000000000000000111111111111';
const output=count_zero(binary)
console.log(output)