/**
 * @author Jorge Casas
 * @createdDate on 20/06/2023
 */

const fs = require("fs");
const open = require("open");

const fileName = "urls.txt";

fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error(`Error reading file ${fileName}: ${err}`);
    return;
  }

  const urls = data.split("\n");

  urls.forEach((url) => {
    url = url.trim();

    if (url !== "") {
      open(url)
        .then(() => {
          console.log(`URL ${url} opened in the browser.`);
        })
        .catch((err) => {
          console.error(`Error opening URL '${url}': ${err}`);
        });
    }
  });
});
