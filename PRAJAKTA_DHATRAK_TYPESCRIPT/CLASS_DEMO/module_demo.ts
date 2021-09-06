export let color:string="Blue"
export class Car
{
    color:string;
    brand:string;
    constructor(color:string,brand:string)
    {
        this.color=color
        this.brand=brand
        
    }
    displayCardata():void
    {
        console.log(`Card brand :${this.brand}/Color is:${this.color}`)
    }
}
let carDetails:string='Suzuki';
