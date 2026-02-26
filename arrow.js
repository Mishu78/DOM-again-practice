let total=0;
function add(num1,num2){
  total=num1+num2;
    return total;
}

console.log(add(2,3));
add(2,3);

//arrow function

const add2=(num1,num2) => num1 + num2;
console.log(add2(50,30));

const tenTimes = x => x*10;

const doMath = (x,y) => {
const sum=x+y;
    return x+y;
}

const divide =(x,y) => {
  let  ans =x/y;
    return ans;
}

 console.log(divide(10,2));
