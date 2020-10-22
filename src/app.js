const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
require("./db/mongoose");

const photosRoute = require("./routers/photo_db");
const hbs_router = require("./routers/hbs-routes");

//local paths
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const publicDirectoryPath = path.join(__dirname, "../public");

const port = process.env.PORT;

//setup handlebars engine
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);
app.use(express.static(publicDirectoryPath));

app.use(express.json());
app.use(photosRoute);
app.use(hbs_router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
