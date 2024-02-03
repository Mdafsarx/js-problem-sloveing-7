// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


const make_avg=(number) => {

    const Length=number.length;
let sum=0;
for(let i=0;i<number.length;i++){
const singleNumber=parseInt(number[i]);
sum=sum+singleNumber;
}
const average=sum / Length;
return average;
}
const array=[10,20];
const output=make_avg(array);
console.log(output)