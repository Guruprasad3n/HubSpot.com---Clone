const express = require("express");
const User= require("./user.module");
const jwt= require("jsonwebtoken");
const argon = require("argon2")
const app = express.Router();
require("dotenv").config();

const Authmiddleware=async(req,res,next)=>{
  let token=req.headers.token;
  console.log(token)
  let [email,password]=token.split("_#_");
  try{
     const user= await User.findOne({email})
     if(user){
      if(password===user.password){
          req.userId=user.id;
          next();
      }else{
          res.staus(401).send("password inncorrect")
      }
     }else{
      res.send("email not correct")
     }
  }
  catch(e){

  }
}

app.post("/login",async(req,res)=>{
 const {email,password}= req.body;
 
 try{
    let user= await User.findOne({email});
    if(user){
       if(await argon.verify(user.password,password)){
        const token= jwt.sign({
          ...user
      },process.env.SECRETKEY,{
          expiresIn:process.env.EXPIRYDATE
      })
        res.status(200).send({
          token ,
          userdetail:user
        })
       }else{
        res.send(401).send("Authentication Failure, incorrect password")
       }
    }else{
        res.status(404).send(`User with email :${email} not found` ) 
    }

 }
 catch(e){
   res.status(404).send(e.message)
 }

})
app.post("/signup",async(req,res)=>{
  const {email,password,name,Companyname,Websitename}=req.body;
  const hash= await argon.hash(password)
  try{
   let existingUser=await User.findOne({email});
   if(existingUser){
    res.status(404).send("Cannot create an user with existing email")
   }else 
   {let user= await User.create({
    email,
    password:hash,
    name,
    Companyname,
    Websitename,
   });
    
   res.send({
    token: `${user.email}_#_${user.password}`,
  })}
  }
  catch(e){
    res.status(404).send(e.message)
  }
})
app.get("/:id",Authmiddleware,async(req,res)=>{
   let id=req.params.id
try{
    let user =await User.findById(id);
    res.send(user)
  }
  catch(e){
      res.status(404).send(e.message)
  }
})

module.exports=app;
