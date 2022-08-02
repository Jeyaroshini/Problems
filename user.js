const { resolve } = require('path')
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

let gradeInfo = {
  grade: "",
  numberOfSubjects: "",
  subjectNames: [],
  mark: []
}
let studentInfo={
  name: "",
  classGrade:"",
}
async function studentInput(info) {
  return new Promise((resolve, reject) => {
    readline.question(info, (input) => resolve(input))
  });
}

async function studentInformation()
{
  const name = await studentName()
  studentInfo.name =name
  const studentGrade = await studentGrades()
  studentInfo.classGrade = studentGrade
}

async function studentName()
{
  return studentInput("Enter student name: ")
}
async function studentGrades()
{
  return studentInput("Enter the grade of the student: ")
}

async function studentMarks() {
  let studentMark = []

  for (let i=0; i<gradeInfo.numberOfSubjects; i++) {
    const markOfEachSubject = Number( await getUserInput(`Enter the ${gradeInfo.subjectNames[i]} mark :`))
    studentMark.push(markOfEachSubject)
  }
  return studentMark
}

async function total()
{
  var sum=0
  for(let i=0;i<gradeInfo.numberOfSubjects;i++)
  {
 sum = studentInfo.mark[i]+sum
  }
  console.log("Total Mark is: ",sum)
    
}
async function getUserInput(question) {
  return new Promise((resolve, reject) => {
    readline.question(question, (input) => resolve(input))
  });
}

async function start() {
  const grade = await createGrade()
  gradeInfo.grade = grade
  const numberOfSubjects = await setTotalSubjects()
  gradeInfo.numberOfSubjects = numberOfSubjects
  const subjectNames = await createSubjects()
  gradeInfo.subjectNames = subjectNames
}

async function createGrade() {
  return getUserInput("Enter the Grade:")
}

async function setTotalSubjects() {
  return getUserInput("Enter the total subjects: ")
}

async function createSubjects() {
  let subjectNames = []

  for (let i=0; i<gradeInfo.numberOfSubjects; i++) {
    const subjectName = await getUserInput(`Enter the ${i + 1} subject :`)
    subjectNames.push(subjectName)
  }
  return subjectNames
}
async function studentProfile()
{
await start()
await studentInformation()

 if (studentInfo.classGrade==2)
{
  console.log("The Subject handled by Grade 2: ",gradeInfo.subjectNames)
}
const markOfStudent = await studentMarks()
  studentInfo.mark=markOfStudent
  console.log(studentInfo)
  const totalofEachSubject = await total()
  studentInfo.mark=totalofEachSubject
  readline.close()
}
studentProfile()


/* Enter the Grade:2
Enter the total subjects: 5
Enter the 1 subject :English
Enter the 2 subject :Tamil
Enter the 3 subject :Maths
Enter the 4 subject :Science
Enter the 5 subject :Social
Enter student name: Roshini
Enter the grade of the student: 2
The Subject handled by Grade 2:  [ 'English', 'Tamil', 'Maths', 'Science', 'Social' ]
Enter the English mark :100
Enter the Tamil mark :100
Enter the Maths mark :100
Enter the Science mark :100
Enter the Social mark :100
{ name: 'Roshini', classGrade: '2', mark: [ 100, 100, 100, 100, 100 ] }
Total Mark is:  500 */


 

