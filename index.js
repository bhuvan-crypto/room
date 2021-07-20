const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const hbs = require("hbs");

const route = require("./routes/route");

// secrets
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8000;

// database

require("./database/connection");

// views, view engine, partial
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./templates/views"));
hbs.registerPartials(path.join(__dirname, "./templates/partials"));

// static assets
app.use(express.static(path.join(__dirname, "/public")));



// parsing req body

app.use(express.json())
app.use(express.urlencoded({extended:true}))
 
// routing
app.use("/", route);


app.listen(PORT, () => {
  console.log(`server is runnig on ${PORT}`);
});
