function getSleepHours (day) {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 9;
  } else if (day === 'wednesday') {
    return 8;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 8;
  }
}

//Testing to see if the function works
//console.log(getSleepHours('tuesday'));

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

//Another Option:
//const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
}

//Testing to make sure the next two functions are working
//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the right amount of sleep.');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You slept too much and are lazy. You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) more sleep than you needed. Fat ass.');
  }
}

calculateSleepDebt();
