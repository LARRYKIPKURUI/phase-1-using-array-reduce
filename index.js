const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


// Using reduce() to sum up all battery values
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

console.log(totalBatteries); // Output
