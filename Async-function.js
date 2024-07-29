const fs = require("fs");
console.log("start");
const one = fs.readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  }
  fs.readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
    }
    fs.writeFile("./content/result-3.txt", "hello guys!", (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  });
  console.log("done with theee task");
});
console.log("finished");

