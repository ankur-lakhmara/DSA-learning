const readline = require("readline");
let rl = readline.createInterface(process.stdin, process.stdout);

function calculator(num) {
  if (num > 0) {
    let temp = 0;
    for (let i = 1; i <= num; i++) {
      temp += i;
    }
    return temp;
  }
  return "Please enter a positive Number";
}
rl.question("Enter a Positive Number", (ans) => {
  console.log(`Sum of 1st ${ans} natural number is : ${calculator(ans)}`);
  rl.close();
});
