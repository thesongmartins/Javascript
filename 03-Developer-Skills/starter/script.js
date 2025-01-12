// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const temperatures = [3, -2, -6, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemps = temps[1];
    if (typeof curTemps !== "number") continue;
    if (curTemps[i] > max) max = temps[i];
    if (curTemps[i] < min) min = temps[i];
  }
  console.log(max);
};
const amplitude = calcTempAplitude(temperatures);
console.log(amplitude);

// Function should now recieve two arrays of Temp.
// const temperatures = [3, -2, -6, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemps = temps[1];
    if (typeof curTemps !== "number") continue;
    if (curTemps[i] > max) max = temps[i];
    if (curTemps[i] < min) min = temps[i];
  }
  console.log(max);
};
const amplitudeNew = calcTempAplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitude);

// Debugging
const measureKelvin = function () {
  const measurements = {
    type: "temp",
    unit: "celsius",
    //  Fix
    // value: Number(prompt("Degrees celsius")),
    value: 10,
  };
  // Find bug.
  console.table(measurements);

  console.log(measurements.value);
  const kelvin = measurements.value + 273;
  return kelvin;
};
// Identify bug
console.log(measureKelvin());

// challenge
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

// console.log(`... ${data1[0]}°C ... ${data1[1]}°C ... ${data1[2]}°C`);

const printForecast = function (arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}°C in ${i + 1} days`;
  }
  console.log(str);
};
printForecast(data1);

// Solving with AI task
