const readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);

function checker(ans) {
  if (ans > 0) {
    return "Positive Number";
  } else if (ans < 0) {
    return "Negative Number";
  } else if (ans == 0) {
    return "Zero";
  }
  return "please enter valid Number";
}

rl.question("Enter a number", (ans) => {
  console.log(checker(ans));
  rl.close();
});
