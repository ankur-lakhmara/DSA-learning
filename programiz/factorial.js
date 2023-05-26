const { log } = require("console");
const readline = require("readline");

let rl = readline.createInterface(process.stdin, process.stdout);
function factorial(p) {
  let temp = 1;
  for (let i = p; i >= 1; i--) {
    temp = temp * i;
  }
  return temp;
}

rl.question("Enter a value", (ans) => {
  console.log(factorial(parseInt(ans)));
  rl.close();
});
