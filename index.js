let marks 
function inputGrade(){
const mark = parseInt(prompt("Enter the student's mark (between 0 and 100):"));
// serves the purpose of allowing the user to enter a mark and storing the output in the variable
if (mark > 100 || mark < 0) {
  alert("Input is non-valid! Marks should range between 0 and 100.");
} else {
  let grade;
  // switch statement to determine the grade based on the mark
  switch (true) {
    case mark > 79:
      grade = 'A';// If mark is greater than 79, assign grade A
      break;
    case mark >= 60: 
    // If mark ranges between 60 and 79, assign grade B
      grade = 'B';
      break;
    case mark >= 50:
      grade = 'C'; // If mark ranges between 50 and 59, assign grade C
      break;
    case mark >= 40:
      grade = 'D';// If mark ranges between 40 and 49, assign grade D
      break;
    default:
      grade = 'E'; // For any other mark less than 40, assign grade E
  }
  alert(`Grade: ${grade}`);
  document.getElementById('Grade').innerHTML =  `Your grade:${grade}`
}}