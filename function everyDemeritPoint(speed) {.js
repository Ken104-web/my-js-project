function everyDemeritPoint(speed) {
    let speedLimit = 70;
    let kmPerDemerit = 5;
    let maxDemerit = 12;
    // calc the num of km over the speed limit
    let speedDifference = speed - speedLimit;
        // if the driver was speeding
    if (speed <= speedLimit) {
      console.log('Ok');
      return; //No demerit points are given, end of function
    }
   
    // calc Demerit points
    let demeritPoints = Math.floor(speedDifference / kmPerDemerit);
    // check if the driver's license should be suspended
    if (demeritPoints > maxDemerit) {
      console.log('License suspended');
    } else {
      console.log('Points: ' + demeritPoints);
      document.getElementById('Speed').innerHTML = `speed ${speed}`
    }
  }
  
  