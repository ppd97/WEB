/// <reference path="StringUtility.ts"/>
class Emp{
    empcode:number;
    empname:string;
    constructor(empcode:number,empname:string)
    {
        this.empcode=empcode
        this.empname=StringUtility.toCaps(empname)
    }
    displayEmp()
    {
        console.log(`${this.empcode} ${this.empname}`)
    }
}

let v=new Emp(1,'Praju');
v.displayEmp()


