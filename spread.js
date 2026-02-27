const numbers=Math.max(23,45,50,12,34,47,58,10,52,63);
console.log(numbers);

const maximum = [29,48,28,58,204,48454,57985,302,4874,57,484,2948,575,58,57,5758];
const max2 = Math.max(...maximum);
console.log(max2);

const params=[34,67,59];
function sum(x,y,z){
    console.log(x,y,z);
    return x+y+z;
}
const sumation=sum(...params);
console.log(sumation);

const array=[23,5,8,59,67,390,57,6939,48,284];
const array2=[...array];
array2.push(48);
console.log(array2);
