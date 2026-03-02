const students=[
    {name:'mishu',age:25},
    {name:'sapa',age:24},
    {name:'naved',age:20},
    {name:'javed',age:35},
    {name:'khaled',age:45},
    {name:'sajed',age:15},
];

const studentName=students.find(std=>std.name==='naved');
console.log(studentName);