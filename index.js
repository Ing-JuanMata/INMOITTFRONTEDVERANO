const express = require("express");
const morgan = require("morgan");
const path = require("path");
const routes = require("./routes");
const DataRoutes = require("./api/routes");
const bodyParser = require("body-parser");
const session = require("express-session");
const app = express();

// settings
app.set("port", process.env.PORT || 80);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middlewares
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    saveUninitialized: true,
    resave: true,
    secret: "InmoITT",
  })
);

// routes
app.use(routes);
app.use("/data", DataRoutes);

// static files
app.use(express.static(path.join(__dirname, "public")));

// start the server
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
