const { exec } = require('child_process');

const runSecondaryScript = () => {
  exec('node script.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing secondary script: ${error}`);
      return;
    }
    console.log(`Secondary script output: ${stdout}`);
  });
};

const main = async () => {
  console.log('Main script started');

  const startTime = Date.now();
  const duration = 5 * 60 * 1000; // 5 minutes in milliseconds

  while (Date.now() - startTime < duration) {
    runSecondaryScript();
    await new Promise(resolve => setTimeout(resolve, 60 * 1000)); // Wait for 1 minute
  }

  console.log('Main script finished');
};

main();