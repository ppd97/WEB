let str = "Please locate where 'locate' occurs!";
console.log(str.lastIndexOf("John"))   
console.log(str.lastIndexOf("John") )
console.log(str.indexOf("locate", 15) )
console.log(str.lastIndexOf("locate", 15))  
console.log(str.search("locate")  )
text = "The rain in SPAIN stays mainly in the plain";
console.log(   text.match(/ain/gi))
let text1 = "Hello world, welcome to the universe.";
console.log(text1.includes("world") )   
let text2 = "Hello world, welcome to the universe.";
console.log(text2.startsWith("world", 6)  ) 
var text3 = "John Doe";
console.log(text3.endsWith("Doe"))