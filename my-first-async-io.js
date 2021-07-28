const fs = require("fs");

fs.readFile(process.argv[2], "utf8", (err, contents) => {
  if (err) throw err;
  console.log(contents.split("\n").length - 1);
});
