const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "./public");

app.listen(3000, () => console.log("Server running in 3000 port"));

app.use(express.static(publicPath));

const mainRouters = require("./routers/main.js");

app.use("/", mainRouters);
app.use("/about", mainRouters);

