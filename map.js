const numbers =[1,2,3,4,5];
// const doubled = [];
// for(const number of numbers){
//   doubled.push(number * 2);
// }
const doubleIt = num => num*2;
const doubled = numbers.map(doubleIt);
const square = numbers.map(num => num*num);
console.log(doubled);
console.log(square);

const names=['mishu','sapa','mishi','nur','nesa'];
const firstLetter= names.map(frnd=>frnd[0]);
console.log(firstLetter);

const products=[
    {name:'laptop',price:450000},
    {name:'pc',price:40000},
    {name:'tv',price:50000},
];
const prices=products.map(prd=>prd.price*2);
console.log(prices);

const names2 = products.map(pd=>{
    const upperCaseName=pd.name.toUpperCase();
    console.log("uppercase of keys",upperCaseName);
    return upperCaseName;
})

