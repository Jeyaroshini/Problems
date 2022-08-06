const { resolve } = require('path')
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})
let password={passwordOne:"",passwordTwo:""}
let busSeat={busSeatNumber:[100,101,103,104,105,106,108,109,110],numberOfSeats:"",availablity:[]}
let seatAllocation ={seatAlloc:["Window","Right Corner","Left Corner"]}
let location={souceAdd:"",destinationAdd:""}
async function availabilityCenter(data) {
    return new Promise((resolve, reject) => {
      readline.question(data, (input) => resolve(input))
    });
  }
async function passwordValidation(data) {
    return new Promise((resolve, reject) => {
      readline.question(data, (input) => resolve(input))
    });
  }

async function sourceAndDestination(location)
{
    return new Promise((resolve,reject) =>
    {
        readline.question(location,(input) =>resolve(input))
    });
}

async function passwordInfo()
{
    const password_One = await password1()
  password.passwordOne = password_One
  const password_Two = await password2()
  password.passwordTwo = password_Two
}
async function password1()
{
    return passwordValidation("Enter Password: ")
}
async function password2()
{
    return passwordValidation("Confirm Password: ")
}
async function validation()
{
await passwordInfo()
await passwordComparison()

}
async function passwordComparison()
{
if (password.passwordOne == password.passwordTwo)
{
    console.log("Password Created Successfully !!!")
    console.log("Welcome to Bus Reservation System")
    await locationAddress()
    console.log("The available seats are: ",busSeat.busSeatNumber)
    await bookingSeat()
}
else
{
    console.log("Password Mismatch")
    readline.close()
}
}
validation()
async function availablityOfBus()
{
    let busAvailibility = []
    for(let i=0;i<busSeat.numberOfSeats;i++)
    {
    const busAvail = await availabilityCenter("Enter the Seat Number:")
      busAvailibility.push(busAvail)
    }
    return busAvailibility
}
async function bookingSeat()
{   
    const seatBooking = await numberOfSeatsToGetBooked()
    busSeat.numberOfSeats = seatBooking
    const seatConfirm = await availablityOfBus()
    busSeat.availablity = seatConfirm
    seatConfirmation()
}
async function numberOfSeatsToGetBooked()
{
    return availabilityCenter("Enter the Number of Seats to get Booked: ")
}
function seatConfirmation()
{
    
    for(let i=0;i<busSeat.busSeatNumber.length;i++)
    {
        if(busSeat.busSeatNumber[i] == busSeat.availablity[i])
        {
        console.log("Booking Confirmed for ",busSeat.availablity[i])
        busSeat.busSeatNumber [i] ="Booked",seatAllocation.seatAlloc[i]
        }
    }
    console.log(busSeat.busSeatNumber)
}

async function source()
{
    return sourceAndDestination("Enter the Source Address: ")
}
async function destination()
{
    return sourceAndDestination("Enter the Destination Address: ")
}
async function locationAddress()
{
    const sourceAddress = await source()
    location.sourceAdd = sourceAddress
    const destinationAddress = await destination()
    location.destinationAdd = destinationAddress
}




/*
    Enter Password: Roshini
Confirm Password: Roshini
Password Created Successfully !!!
Welcome to Bus Reservation System
Enter the Source Address: Chennai
Enter the Destination Address: Madurai
The available seats are:  [
  100, 101, 103,
  104, 105, 106,
  108, 109, 110
]
Enter the Number of Seats to get Booked: 2
Enter the Seat Number:100
Enter the Seat Number:101
Booking Confirmed for  100
Booking Confirmed for  101
[
  'Booked', 'Booked',
  103,      104,
  105,      106,
  108,      109,
  110
]       */
 


