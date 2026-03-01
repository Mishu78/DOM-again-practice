function settleLife(name,isBCS,marriage,patri){
if(isBCS){
    console.log("she is bcs");}
else{
    console.log("she is not bcs");
    marriage(patri);
}
}
function borolok(patri){
    console.log('kobul',patri);
}
borolok('pori');
settleLife("mishu",false,borolok,'nari');