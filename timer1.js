// take command line arguments and sort them in numerical order
const numbers = process.argv.slice(2);
numbers.sort((a, b) => { return a - b; });

// loop through numbers
for (const num of numbers) {
  // filter the elements that are negative, or are not a number
  if (num >= 0 && !isNaN(num)) {
    // makes beep at number of miliseconds for the current element
    setTimeout(() => process.stdout.write('\x07'), num * 1000);
  }
}