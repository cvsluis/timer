const numbers = process.argv.slice(2);
numbers.sort((a, b) => { return a - b; });

for (const num of numbers) {
  if (num >= 0 && !isNaN(num)) {
    setTimeout(() => process.stdout.write('\x07'), num * 1000);
  }
}