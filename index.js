let marks = [77, 84,  32, 79, 0, 45, 64]
const mark = parseInt(prompt("Enter the student's mark (between 0 and 100):"));
// servse the purpose of allowing the user to enter a mark and storing the output in the variable
if (mark > 100 || mark < 0) {
  console.log("Input is Non-valid! Marks should range between 0 and 100.");
} else {
  let grade;

  // Switch statement to determine the grade based on the mark
  switch (true) {
    case mark > 79:
      grade = 'A';  // If mark is greater than 79, assign grade A
      break;
    case mark >= 60:
      grade = 'B';  // If mark ranges between 60 and 79, assign grade B
      break;
    case mark >= 50:
      grade = 'C';  // If mark ranges between 50 and 59 , assign grade C
      break;
    case mark >= 40:
      grade = 'D';  // If mark ranges between 40 and 49 (inclusive), assign grade D
      break;
    default:
      grade = 'E';  // For any other mark less than 40, assign grade E
  }

  console.log(`Grade: ${grade}`);

}
function everyDemeritPoint(speed){
     let speedLimit = 70;
    let kmPerDemerit = 5;
    let maxDemerit = 12;
    // calc the num of km over the speed limit
    let speedDifference = speed - speedLimit;
    // if the driver was speeding
    if (speed <= speedLimit) {
        console.log('Ok');
        return; //No demerit points are given,end of function
    }
    //calc Demerit points
    let demeritPoints = Math.floor(speedDifference / kmPerDemerit);
    // check if the driver's licence should be suspende
    if (demeritPoints > maxDemerit) {
        console.log('License suspended');

    } else{
        console.log('Points: ' + demeritPoints);
    }
}
everyDemeritPoint(10);

