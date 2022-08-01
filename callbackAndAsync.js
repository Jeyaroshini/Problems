function f(num1,num2,callback)
{
    var sum=num1+num2
    callback(sum)
}
function showResult(sum)
{
    console.log(sum)
}
f(10,20,showResult) //30

//---------------------------------------

function main(getFunc)
{
    console.log("Main Function")
    getFunc()
}
function callBack()
{
    console.log("Callback Function")
}
main(callBack)   //Main Function
                 //Callback Function 

//---------------------------------------

function main()
{
    console.log("Main Function")

}

function callBack(getfunc)
{
    console.log("Call Back function")
    getfunc()
}
callBack(main)  //Call Back function
               //Main Function 

//---------------------------------------

console.log("First")
setTimeout(()=>{
    console.log("Second")
},3000)
console.log("Third")   //First Third Second 

//---------------------------------------

var p1=new Promise(function(resolve,reject)
{
    resolve([1,2,3,4])
})
 p1.then(function (arr)
 {
    console.log(arr)
 })  //[ 1, 2, 3, 4 ]
 
 //---------------------------------------

 var p1=new Promise(function(resolve,reject)
 {
    reject([1,2,3,4])
 })
 p1.then(function(arr)
 {
    console.log(arr)
 }) //UnhandledPromiseRejection

 //---------------------------------------

 var p1= new Promise(function (resolve,reject)
 {
    reject([1,2,3,4])
 })

 p1.then(function(arr)
 {
    console.log(arr)
}) .catch(function(arr)
{
    console.log(arr)
})  //[ 1, 2, 3, 4 ] 

//---------------------------------------

var p1=new Promise(function(resolve,reject)
{
    var num=10
    if (num>5)
    resolve(num)
    else
    reject(num)
})

p1.then(function(data){
    console.log(data)
}).catch(function(data)
{
    console.log("Error",data)
})  //10

//---------------------------------------

var p1=new Promise(function(resolve,reject)
{
    let num=5
    if(num>10)
    resolve(num)
    else
    reject(num)
})

p1.then(function(data)
{
    console.log(data)
}).catch(function(data)
{
    console.log("Error")
}) //Error  

//---------------------------------------

var p1=new Promise(function(resolve,reject)
{
    setTimeout(function(){
        let num=Math.random()
        resolve(num)
    },3000)
})

p1.then(function(data)
{
    console.log(data)
})  //0.7294319370933362  

//---------------------------------------

var p1=new Promise(function(resolve,reject)
{
    setTimeout(function(){
    let num=Math.random()
    resolve(num)},3000)
})

p1.then(function(data)
{
    console.log(data)
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let num=Math.random()
            resolve(num)
        })
    })
}).then(function(data)
{
    console.log(data)
}) //0.7293409653997156   0.43869497407217595 

//---------------------------------------

var p1=new Promise(function(resolve,reject)
{
    resolve(5)
})

p1.then(function (data)
{
    return data*2
}).then(function(data)
{
    return data+2
}).then(function(data){
    console.log(data)
}) //12  

//---------------------------------------

//Async and Wait

function myFunc()
{
    return Promise.resolve("Hello")
}
console.log(myFunc()) //Promise { 'Hello' } 

//---------------------------------------

async function myFunc()
{
    return ("Hello")
}
console.log(myFunc()) //Promise { 'Hello' }

//---------------------------------------

async function myFunc()
{
    return ("Hello")
}
myFunc().then((data)=>
{
    console.log(data)
})  //Hello  

//---------------------------------------
