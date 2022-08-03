class student{
    constructor(name,age,mobileNumber)
    {
        this.name=name
        this.age=age
        this.mobileNumber=mobileNumber
    }
}
student1= new student("Roshini",20,9999999999)
student2=new student("Subiksha",21,9999999999)
console.log(student1.name)
console.log(student2.name) //Roshini  Subiksha 

//---------------------------------------------------------

class student{
    constructor(name,age,mobileNumber)
    {
    this.name=name
    this.age=age
    this.mobileNumber=mobileNumber
    }
}
class school extends student{
    constructor(schoolName,name,age,mobileNumber)
    {
        super(name,age,mobileNumber)
    this.schoolName=schoolName
    }
    print()
    {
       return "My name is " +this.name + " studies in " +this.schoolName
    }
}
let school1=new school("VMJ","Roshini",20,6382724457)
let school2=new school("Mahatma","Sruthi",20,9999999999)
console.log(school1.print())
console.log(school2.print())  //My name is Roshini studies in VMJ  My name is Sruthi studies in Mahatma


class Rectangle{
    areaOfRectange =""
   constructor(length,breadth)
   {
    this.length=length
    this.breadth=breadth
    this.areaOfRectange=length*breadth
   }
}

class Circle{
    areaOfCircle =""
constructor(radius)
{
    this.radius=radius
    this.areaOfCircle=(22/7)*(radius*radius)
}
}

class Triangle{
    areaOfTriangle=""
   constructor(base ,height)
   {
    this.base=base
    this.height=height
    this.areaOfTriangle=0.5*base*height
   }

}

rectangleArea = new Rectangle(10,10)
console.log("Area of the Rectangle is: ",rectangleArea.areaOfRectange)
circleArea = new Circle(2)
console.log("Area of the Circle is: ",circleArea.areaOfCircle)
triangleArea = new Triangle(2,2)
console.log("Area of the Triangle is: ",triangleArea.areaOfTriangle)  //Area of the Rectangle is:  100   Area of the Circle is:  12.571428571428571   Area of the Triangle is:  2


class VehicleContainer
{
    array=[]
    constructor(color,model,type)
    {
        this.color=color
        this.type=type
        this.model=model
    }
}

class Car extends VehicleContainer
{
      price =""
      constructor(price,color,model,type)
      {
        
        super(color,model,type)
        this.price=price
        this.array.push("TEST")
      }
    
  getCarInfo()
  {
    return this.color + "," + this.model + "," + this.type + "," + this.price
  }

  getArrayInfo()
  {
    return this.array
  }
}
  carInfo= new Car(1000000,"BLUE","BMW","PETROL")
console.log(carInfo.getCarInfo())
console.log(carInfo.getArrayInfo())  //BLUE,BMW,PETROL,1000000 [ 'TEST' ]