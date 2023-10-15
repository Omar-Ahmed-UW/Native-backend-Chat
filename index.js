// import { App } from "./app";
const App = require("./app");
// import { App } from "./app";
// import https from "https";
// import fs from "fs";
const port = process.env.PORT || 3000;
const app = new App().app;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

//local testing
// https
//   .createServer(
//     {
//       key: fs.readFileSync("server.key"),
//       cert: fs.readFileSync("server.cert"),
//     },
//     app
//   )
//   .listen(3000, function () {
//     console.log(
//       "Example app listening on port 3000! Go to https://localhost:3000/"
//     );
//   });
