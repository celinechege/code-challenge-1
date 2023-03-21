//CHALLENGE 1
// Prompts user to enter marks
let marks = prompt("Enter marks")
 
if (marks > 79) {
    console.log ("A")
}
else if (marks >=60 && marks<=79) {
    console.log ("B")
}
else if (marks >=49 && marks<= 59){
    console.log ("C")
}
else if (marks >=40 && marks< 49) {
    console.log ("D")
}
else if (marks < 40) {
     console.log ("E")
}


//CHALLENGE 2
//Prompts user to enter speed
let speed =prompt ("Enter speed")
// Declare speedlimit and kmperdemeritpoint
const speedLimit = 70;
const kmPerDemeritPoint = 5
let demeritPoints = 0
  if (speed <= speedLimit) {
    console.log ("Ok")
  }
  else {
    demeritPoints = Math.floor ( ( speed - speedLimit) / kmPerDemeritPoint)
  if ( demeritPoints > 12) {
    console.log ( "License suspeneded")
  }
  else {
    console.log (demeritPoints)
  }
}


//CHALLENGE 3
// DefinING the tax, NHIF, and NSSF rates (above 32333 basic salary)
const taxRate = 0.3
const nhifRate = 1.3
const nssfRate= 0.06
//the user's inputs for basic salary and benefits
const basicSalary = parseFloat(prompt("Enter basic salary"));
const benefits = parseFloat(prompt("Enter benefits"));
//Calculating the gross salary
const grossSalary = basicSalary + benefits;
// Calculating the tax, NHIF, and NSSF deductions
const taxDeduction = grossSalary * taxRate;
const nhifDeduction = grossSalary * nhifRate;
const nssfDeduction = grossSalary * nssfRate;
// Calculating the net salary
const netSalary = grossSalary - taxDeduction - nhifDeduction - nssfDeduction;
// giving outputs
console.log (grossSalary)
console.log (taxDeduction)
console.log (nhifDeduction)
console.log (nssfDeduction)
console.log (netSalary)




 