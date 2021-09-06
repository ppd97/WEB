function getArr<T>(items:T[]):T[]
{
    return new Array<T>().concat(items);
}

let myNumArr=getArr<number>([100])