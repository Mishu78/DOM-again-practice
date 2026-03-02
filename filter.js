const numbers=[1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter(num=>num%2 === 0);
const oddNumbers=numbers.filter(num=>num%2 !== 0);
console.log(evenNumbers);
console.log(oddNumbers);
const friends =['mishu','naved','khaled','sajed','nahid','nasib'];
const nFriends=friends.filter(name=>name[0]==='n');

const students=[
    {name:'mishu',age:25},
    {name:'sapa',age:24},
    {name:'naved',age:20},
    {name:'javed',age:35},
    {name:'khaled',age:45},
    {name:'sajed',age:15},
];
console.log(nFriends);
const olderStudents=students.filter(std=>std.age>30);
console.log(olderStudents);
;