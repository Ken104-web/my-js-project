function everyDemeritPoint(speed) {
  
  let speedLimit = 70;
  let kmPerDemerit = 5;
  let maxDemerit = 12;
  let speedDifference = speed - speedLimit;

  if (speed <= speedLimit) {
    document.getElementById('Speed').textContent = 'Ok';
    return;
  }

  let demeritPoints = Math.floor(speedDifference / kmPerDemerit);

  if (demeritPoints > maxDemerit) {
    document.getElementById('Speed').textContent = 'License suspended'
  } else {
    document.getElementById('Speed').textContent = 'Points:' + demeritPoints;

  }

}

let driverSpeed = parseInt(prompt("Enter the driver's speed"));
everyDemeritPoint(driverSpeed);
