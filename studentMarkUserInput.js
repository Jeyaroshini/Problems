var tamil = readInt("Enter Tamil Mark: ")
var english = readInt("Enter English Mark: ")
var maths = readInt("Enter Maths Mark: ")
var science = readInt("Enter science Mark: ")
var social = readInt("Enter social Mark: ")
// Calculating total number of marks
var total = tamil+english+maths+science+social
console.log("English :",english)
console.log("Tamil   :",tamil)
console.log("Maths   :",maths)
console.log("Science :",science)
console.log("Social  :",social)
// calculating average
var average =total/5
console.log("Total   :",total)
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

/* output: 
English : 100
Tamil   : 100
Maths   : 100
Science : 100
Social  : 100
Total   : 500
Average : 100
Overall Performance is:
Excellent */
