const fs = require("fs");
const path = require("path");

fs.readdir(process.argv[2], (err, data) => {
  if (err) return console.log(err);
  data.map((data) => {
    if (path.extname(data) === `.${process.argv[3]}`) {
      console.log(data);
    }
  });
});
