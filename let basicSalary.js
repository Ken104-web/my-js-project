let basicSalary 
let benefits 
// calc of Net salary 
function calcNetSalary(basicSalary, benefits) {
  let grossSalary = basicSalary + benefits;
  let nhifDeductions = 600;// example of NHIF
  let nssfDeductions = 300;// example of NSSF
  const payee = grossSalary * 0.01;
  const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

  return {
    netSalary: netSalary,
    payee: payee,
    nhifDeductions: nhifDeductions,
    nssfDeductions: nssfDeductions,
  };
  
}
const salary = calcNetSalary(basicSalary, benefits);
console.log('Net Salary: ' + salary.netSalary);
document.getElementById('Salary').innerHTML = `Net Salary ${salary}`
