const Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
const LED = new Gpio(4, 'out'); //use GPIO pin 4 as output
const pushButton = new Gpio(16, 'in', 'both'); //use GPIO pin 17 as input, and 'both' button presses, and releases should be handled

let oldValue = 0;
let counter = 0;
pushButton.watch( (err, value) => { //Watch for hardware interrupts on pushButton GPIO, specify callback function
  if (err) { //if an error
    return console.error('There was an error', err); //output error message to
  }

  if (oldValue !== value) {
    console.log(`${++counter} BUTTON STATE: ${value}`);
  }

  oldValue = value;
  //LED.writeSync(value); //turn LED on or off depending on the button state (0 or 1)
});

function unexportOnClose() { //function to run when exiting program
  //LED.writeSync(0); // Turn LED off
  //LED.unexport(); // Unexport LED GPIO to free resources
  pushButton.unexport(); // Unexport Button GPIO to free resources
}

//LED.writeSync(1); //debug

process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+c