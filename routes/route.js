const express = require("express");
const router = express.Router();



router.get("/" , (req, res) =>{
    res.render("index");
})


router.post("/addroom", (req, res )=>{
    res.send("hello")
    console.log(req.body);
   
})


module.exports = router;