// interface KeyPair{
//    readonly key:number,
//     value?:string
// }

// let k:KeyPair={key:1};
//interface cannot be used with primitives or union
//type p=number|string
interface MathFun{
    (x:number,y:number)
}
var add :MathFun=(x:number,y:number):number=>x+y

console.log(add)