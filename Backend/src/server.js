require("dotenv").config()
const express = require("express");
const cors= require("cors");

const connect =require("./config/db")
const userRoute= require("./features/User/user.Router");
const softwareRoute= require("./features/software/software.Router");
const softwarecartRoute= require("./features/softwareCart/softwareCart.Router");

const PORT= process.env.PORT;

const app=express();
app.use(express.json());
app.use(cors());

app.use("/users",userRoute)
app.use("/software",softwareRoute)
app.use("/carts",softwarecartRoute)

app.listen(PORT, async()=>{
    await connect();
    console.log(`Listening at http://localhost:${PORT}`)
})

