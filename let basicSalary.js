// Calculation of Net salary
function calcNetSalary(basicSalary, benefits) {
  let grossSalary = basicSalary + benefits;
  let nhifDeductions = 600; // example of NHIF
  let nssfDeductions = 300; // example of NSSF
  const payee = grossSalary * 0.01;
  const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

  return {
    netSalary: netSalary,
    payee: payee,
    nhifDeductions: nhifDeductions,
    nssfDeductions: nssfDeductions,
  };
}

// Prompt the user for input
let basicSalary = parseFloat(prompt("Enter basic salary:"));
let benefits = parseFloat(prompt("Enter benefits:"));

const salary = calcNetSalary(basicSalary, benefits);
console.log("Net Salary: " + salary.netSalary);
document.getElementById("Salary").innerHTML = `Net Salary: ${salary.netSalary}`;
