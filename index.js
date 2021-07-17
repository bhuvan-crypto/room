const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const hbs = require("hbs");

const home = require("./routes/home");


// secrets
dotenv.config({path:"config.env"});
const PORT = process.env.PORT ||5000;

// views, view engine, partial 
app.set("view engine" , "hbs");
app.set("views", path.join(__dirname, "./templates/views"));
hbs.registerPartials(path.join(__dirname, "/templates/views/partials"));

// static assets
app.use(express.static(path.join(__dirname, "/public")));


// routing
app.get("/",home);



app.listen(PORT , ()=>{
    console.log(`server is runnig on ${PORT}`);
})