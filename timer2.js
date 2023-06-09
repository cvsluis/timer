const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  // Beeps when user presses 'b' key
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  // Starts timer for x seconds when user types number from 1 to 9
  if (key > 0 || key < 10) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => process.stdout.write('\x07'), key * 1000);
    process.stdout.write('\x07');
  }
  // Exits program when user presses ctrl + c and prints parting message
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
});