function everyDemeritPoint(speed) {
  let speedLimit = 70;            // Define the speed limit in km/h
  let kmPerDemerit = 5;           // Define the number of km per demerit point
  let maxDemerit = 12;            // Define the maximum number of demerit points before license suspension
  let speedDifference = speed - speedLimit;  // Calculate the speed difference
  
  if (speed <= speedLimit) {
    document.getElementById('Speed').textContent = 'Ok';  // If the speed is within the limit, display 'Ok'
    return;
  }

  let demeritPoints = Math.floor(speedDifference / kmPerDemerit);  // Calculate the demerit points based on the speed difference
  
  if (demeritPoints > maxDemerit) {
    document.getElementById('Speed').textContent = 'License suspended';  // If the demerit points exceed the maximum, display 'License suspended'
  } else {
    document.getElementById('Speed').textContent = 'Points:' + demeritPoints;  // Otherwise, display the number of demerit points
  }
}

let driverSpeed = parseInt(prompt("Enter the driver's speed"));  // Prompt the user to enter the driver's speed
everyDemeritPoint(driverSpeed);  // Call the function with the entered speed
