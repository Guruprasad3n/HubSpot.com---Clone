const express = require("express");
const Software= require("./software.model")
const app = express.Router();

app.get("/",async(req,res)=>{
    
    try{
     let software= await Software.find();
     res.send(software)
    }
    catch(e){
        res.status(400).send(e.message);
    }
})
app.get("/:id",async(req,res)=>{
    let id=req.params.id
  try{
      let user =await Software.findById(id);
      res.send(user)
    }
    catch(e){
        res.status(404).send(e.message)
    }
})

module.exports=app;
