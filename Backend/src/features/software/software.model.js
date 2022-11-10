const mongoose = require("mongoose")

const softwareSchema= new mongoose.Schema({
    software_name:{
        type:String,
        require:true
    },
   description:{
        type:String,
    },
    image:{
        type:String,
    },
   quantity:{
        type:Number,
        min:0,
        requied:true
    },
    monthlyprice:{
        type:String,
        min:1,
        requied:true
    },
    upfrontprice:{
        type:String,
        min:1,
        requied:true
    },
},{
    versionKey:false,
    timestamps:true, 
}
)

const Software= mongoose.model("software", softwareSchema);
module.exports= Software;