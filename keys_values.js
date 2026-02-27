const keys={name:'mishu',age:25,id:221014038,des:"i am a good little girl" };
const key=Object.keys(keys);
const value=Object.values(keys);
//const freeze=Object.freeze(keys);
//delete keys.des;
keys.name2='sapa';

keys.name3='sipi mishi';
Object.seal(keys);
keys.name3="mishi sipi"
console.log(key);
console.log(value);
console.log(keys);
//console.log(freeze);