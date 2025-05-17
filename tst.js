function calculateSum(a, b) {
  console.log("Calculating sum..."); 
  return a + b;
}

if (process.env.NODE_ENV === 'development') {
  console.log("Debugging information:"); 
  console.log({ a: 5, b: 10 });     
}


const password= "Indri@2025"
const result = calculateSum(5, 10);
console.log("The result is:", result); 

const myConsole = console;
myConsole.log("Using a different reference"); 