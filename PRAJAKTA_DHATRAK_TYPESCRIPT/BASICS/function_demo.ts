// function fun()
// {
//     console.log("Hello Praju");
// }
// function add(a:number,b:number)
// {
//     // console.log(`Addition is:${a+b}`)
//     return a+b;
// }
// fun();
// function greet(msg:string="Hello",name:string):string
// {
//    return(` ${msg} ${name}`)
// }
//console.log(greet(undefined,'Praju'));
// let greeting=(msg:string,y:string):string=>{
//      return `${msg}  ${y}`
// }
// let display:string=greeting("Hello","Devesh")
// console.log(display);

// class Stud{
//     id:number
//     name:string
//     constructor(code:number,name:string)
//     {
//         this.id=code
//         this.name=name
//     }

//     display=()=>console.log(`id is ${this.id} name is ${this.name}`)

// }
// let s=new Stud(1,'Praju') 
// s.display()

//Overloading is myth in typescript

// function add(a:string,b:string):string
// function add(a:number,b:number):number
// function add(a:any,b:any):any{
//    return a+b; 
// }
// add('Hello','Praju')
// add(10,20)


//REst parameters
let o=(...num:number[])=>{
   console.log(`${o}+" "+${num.join(",")}`)
}
o(1,2,41,558,888,888,8);
