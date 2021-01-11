/* eslint-disable no-console */
const execa = require("execa");
const fs = require("fs");
(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("yarn", ["build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    // Create CNAME file with the custom domain name
    const strm = fs.createWriteStream(folderName + '/CNAME');
    strm.write('tm.doupak.cz');
    strm.end();
    console.log("CNAME created");
    // Copy index.html as 404.html in order for URL routing to work properly on gh pages
    fs.copyFile(folderName + '/index.html', folderName + '/404.html', (err) => {
      if (err) {
        console.log("Error while creating 404 file: ", err);
      }
      else {
        console.log("404 created");
      }
    });
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    // await execa("del", ["-r", folderName]);
    await execa("git", ["checkout", "-f", "main"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed, check your settings");


  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();
