let pi =3.14;
function addition(x,y){
    const doMath=(x+y)*pi;
    
    function multiply(x,y){
        const doMulty=(x*y)+pi;
        return doMulty;
    }
    const add2=multiply(12,3);
console.log(add2);
    return doMath;
}
const add = addition(12,3);

console.log(add);