const express = require("express");

const app = express();

const port = 8000;

app.get("/",(req,res) => {
    res.send("<br><h1><U>  Hello World  </U></h1>")    
})

app.get("/:name",(req,res)=>{
   let n = req.params.name;
   res.send("<br><h1><U>  Hello "+n+"  </U></h1>")
}) 


app.listen(port);