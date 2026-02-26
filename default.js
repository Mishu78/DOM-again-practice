function add2(num1,num2=0){
const name = num1+num2;
console.log(name);
}
add2(10);

//default parameter
/*string ==> 
    number ==> 0
number ==> 1
array ==>[]
    object ==>{}
        boolean ==> false */
const firstName="kamruzzaman";
const lastName="shuvo";
const aboutMe =`My name is ${firstName} ${lastName}`;
console.log(aboutMe);

function getCardHTML(name,description){
 const div = `
 <div class="card">
 <h2>${name}</h2>
 <p>${description}</p>
 </div>
 `;
console.log(div);
}
getCardHTML('mishu','good girl');
