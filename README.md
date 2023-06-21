# Student Grade Generator
It's an input/output program.

# Description
The user inputs a value based on the Arrays assigned in the prompt case and the input is stored in the mark varable and converts it to an interger using the `parseInt()`.
The code evaluates the mark entered is within range.If not an error will be displayed using`console.log()`
If the mark entered is within range, the code proceeds to evaluate the corresponding grade based on the mark using a `switch` statement.
The `switch (true)` statement is used to evaluate each `case`.
Depending on the value of `mark`, the code assigns appropriate grade to the `grade` variable inside each `case`
Finally the determined grade is displayed to the user using `console.log()`.
# Author & License
Coded by Kenneth Mwangi. 
Licenced by GPL license.

# Speed Detector
This JavaScript function calculates demerit points for a driver based on their speed and the speed limit.
 
# Description

It defines three variables: speedLimit (set to 70), kmPerDemerit (set to 5), and maxDemerit (set to 12). These variables represent the speed limit, the number of kilometers per demerit point, and the maximum allowed demerit points before license suspension, respectively.
It calculates the difference between the driver's speed and the speed limit by subtracting speedLimit from the provided speed parameter.
If the driver's speed is less than or equal to the speed limit, the function logs 'Ok' and returns, indicating that no demerit points should be assigned.
If the driver was speeding, the function calculates the demerit points by dividing speedDifference by kmPerDemerit and rounding down using Math.floor().
It checks if the calculated demerit points exceed the maximum allowed (maxDemerit).
If the demerit points exceed the maximum, the function logs 'License suspended', indicating that the driver's license should be suspended.
If the demerit points are within the acceptable range, the function logs 'Points: ' followed by the calculated demerit points.
# Author and License
Coded by Kenneth Mwangi
licensed by GPL

# Challenge 3: Net Salary Calcu;ator
It basically calculates the amount of salary of an Individual

# Description
The provided code calculates the net salary based on a given basic salary and benefits. It defines a function calcNetSalary that takes basicSalary and benefits as parameters. Inside the function, it calculates the gross salary by adding the basic salary and benefits. It also includes example deductions for NHIF (National Hospital Insurance Fund) and NSSF (National Social Security Fund).

The code then calculates the payee (tax) as a percentage of the gross salary and computes the net salary by subtracting the payee, NHIF deductions, and NSSF deductions from the gross salary.

The function returns an object containing the following properties:

netSalary: the calculated net salary
payee: the calculated payee (tax)
nhifDeductions: the example NHIF deductions
nssfDeductions: the example NSSF deductions
Outside the function, the code calls calcNetSalary with the provided basicSalary and benefits and stores the result in the salary variable. It then logs the net salary value to the console.

Usage
To use the code, follow these steps:

Set the basicSalary and benefits variables to the desired values.
Run the code in an environment that supports JavaScript.
The calculated net salary will be displayed in the console.
Feel free to modify the code to suit your specific requirements, such as changing the example deductions or adding additional functionality.

# Author & License
coded by Kenneth Mwangi
licensed by GPL license


