const colors=["red","black","yellow"]
console.log(colors[0]) //red

//-----------------------------------------

const colors=["red","black","yellow"]
console.log(colors[-1]) //undefined 

//-----------------------------------------

const vegetables=["carrot","brinjal"]
vegetables[2]="tomato"
console.log(vegetables) //[ 'carrot', 'brinjal', 'tomato' ] 

//-----------------------------------------

const vegetables=["carrot","brinjal"]
vegetables[3]="tomato"
console.log(vegetables) // [ 'carrot', 'brinjal', <1 empty item>, 'tomato' ] 

//-----------------------------------------

const vegetables=["carrot","brinjal"]
console.log(typeof(vegetables)) //object 

//-----------------------------------------

const vegetables=["carrot","brinjal"]
vegetables[2]=45
console.log(vegetables) // [ 'carrot', 'brinjal', 45 ] 

//-----------------------------------------

//Objects

let person={FirstName:"Jeya",LastName:"Roshini", age:20, gender:"Female"}
console.log(person) // { FirstName: 'Jeya', LastName: 'Roshini', age: 20, gender: 'Female' } 

//-----------------------------------------

let person={FirstName:"Jeya",LastName:"Roshini", age:20, gender:"Female"}
console.log(person.FirstName) //Jeya 

//-----------------------------------------

let person={FirstName:"Jeya",LastName:"Roshini", age:20, gender:"Female"}
console.log(person.FirstName, person.LastName) //Jeya Roshini 

//-----------------------------------------

let person={FirstName:"Jeya",LastName:"Roshini", age:20, gender:"Female"}
person.age=24
console.log(person.age) //24 

//-----------------------------------------

let person={FirstName:"Jeya",LastName:"Roshini", age:20, gender:"Female"}
person.age=24
console.log(person) //{ FirstName: 'Jeya', LastName: 'Roshini', age: 24, gender: 'Female' } 

//-----------------------------------------

let person={FirstName:"Jeya",LastName:"Roshini", age:20, gender:"Female"}
console.log(person['age']) //20 

//-----------------------------------------

let person={FirstName:"Jeya",LastName:"Roshini", age:20, gender:"Female"}
person.age=24
console.log(person['age']) //20 

//-----------------------------------------

let person={FirstName:"Jeya",LastName:"Roshini", age:20, gender:"Female" ,siblings:{Brother:"Surya", Sister:"Subiksha"}}
console.log(person) // {FirstName: 'Jeya',LastName: 'Roshini', age: 20, gender: 'Female', siblings: { Brother: 'Surya', Sister: 'Subiksha' }} 

//-----------------------------------------

let person={FirstName:"Jeya",LastName:"Roshini", age:20, gender:"Female" ,siblings:{Brother:"Surya", Sister:"Subiksha"}}
console.log(person.siblings) //{ Brother: 'Surya', Sister: 'Subiksha' } 

//-----------------------------------------

let person={FirstName:"Jeya",LastName:"Roshini", age:20, gender:"Female" ,siblings:{Brother:"Surya", Sister:"Subiksha"}}
console.log(person.siblings.Brother) //Surya 

//-----------------------------------------

let person={FirstName:"Jeya",LastName:"Roshini", age:20, gender:"Female" ,siblings:{Brother:"Surya", Sister:"Subiksha"}}
console.log(person.siblings.Sister) //Subiksha 

//-----------------------------------------

let person={FirstName:"Jeya",LastName:"Roshini", age:20, gender:"Female" ,siblings:{Brother:"Surya", Sister:"Subiksha"}}
console.log(person.siblings.Sister, person.siblings.Brother) //Subiksha Surya 

//-----------------------------------------

const marks={ tamil:100 ,english : 100,maths : 100,science : 100, social : 100 }
// Calculating total number of marks
var total = marks.tamil + marks.english + marks.maths + marks.science + marks.social
console.log("English :",marks.english)
console.log("Tamil   :",marks.tamil)
console.log("Maths   :",marks.maths)
console.log("Science :",marks.science)
console.log("Social  :",marks.social)
console.log("-----------------")
// calculating average
var average =total/5
console.log("Total   :",total)
console.log("-----------------")
console.log("Average :",average)
console.log("Overall Performance is: ")
if(average>=90)
{
    console.log("Excellent")
}
else if(average<90 && average >=80)
{
    console.log("Very Good")
}
else if(average<80 && average>=70)
{
    console.log("Good")
}
else if(average <70 && average>=60)
{
    console.log("Better")
}
else
{
    console.log("Need to Improve")
} 

/* English : 100
   Tamil   : 100
   Maths   : 100
   Science : 100
   Social  : 100
-----------------
   Total   : 500
-----------------
   Average : 100
   Overall Performance is:
   Excellent */

   //-----------------------------------------

add(2,2)
sub(2,2)
multiply(2,2)
divide(2,2)
mod(2,2)
function add(num1,num2)
{
    var result=num1+num2
    console.log("Addition Result is: ",result)
    console.log("*******************************")
}
function sub(num1,num2)
{
    var result=num1-num2
    console.log("Subtraction Result is: ",result)
    console.log("*******************************")
}
function multiply(num1,num2)
{
    var result=num1*num2
    console.log("Multiplication Result is: ",result)
    console.log("*******************************")
}
function divide(num1,num2)
{
    var result=num1/num2
    console.log("Divison Result is: ",result)
    console.log("*******************************")
}
function mod(num1,num2)
{
    var result=num1%num2
    console.log("Mod Result is: ",result)
    console.log("*******************************")
} 

/*
Addition Result is:  4
*******************************
Subtraction Result is:  0
*******************************
Multiplication Result is:  4
*******************************
Divison Result is:  1
*******************************
Mod Result is:  0
******************************* */












