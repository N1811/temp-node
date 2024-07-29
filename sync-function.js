const fs = require("fs");
console.log("start");
const first = fs.readFileSync("./content/first.txt", "utf-8");
const second = fs.readFileSync("./content/second.txt", "utf-8");
console.log("between task");
fs.writeFileSync(
  "./content/result-2.txt",
  `this is the text i wrote: ${(first, second)} and hello guys!`
);
console.log("finished the task and go to the next one");
