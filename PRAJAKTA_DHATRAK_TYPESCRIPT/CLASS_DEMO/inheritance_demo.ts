class Rectangle
{
    length:number
    breadth:number
    constructor(length:number,breadth:number)
    {
        this.length=length
        this.breadth=breadth
    }
    areaRectangle():void
   {
       console.log(`Area of Rectangle ${this.length*this.breadth}`)
   }
}
class Triangle extends Rectangle
{
    constructor(length:number,breadth:number)
    {
        super(length,breadth)
    }
    areaTriangle():void{
        console.log(`Area of Triangle ${0.5*this.length*this.breadth}`)
    }
}

let r=new Triangle(10,20)
r.areaRectangle()
r.areaTriangle()