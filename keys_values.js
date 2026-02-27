const keys={name:'mishu',age:25,id:221014038,des:"i am a good little girl" };
const key=Object.keys(keys);
const value=Object.values(keys);
//const freeze=Object.freeze(keys);
delete keys.des;
console.log(key);
console.log(value);
console.log(keys);
//console.log(freeze);