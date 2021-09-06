var x='Praju'
var y="Hello \"Praju\""
var z='Hello \\'
//console.log(x.length);
console.log(y);
console.log(z);
console.log("------------String Methods--------------");
console.log(x.length);//returns length of String
// Extracting parts of String
let string1="Apple, Banana, Kiwi"
let str2=string1.slice(0,7);
console.log(str2);
var str=string1.toUpperCase();
console.log(str);
var str=string1.toLowerCase();
console.log(str)
var txt='HEllo Praju PRAJU GAuri'
var txt1=txt.replace('Praju','Gau');
console.log(txt1);
var txt2=txt.replace(/Praju/g,'Prajakta');
console.log(txt2);