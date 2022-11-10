const mongoose= require ("mongoose");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        unique:true,
    },
    name:{
        type:String,
        require:true,
    },
    Companyname:{
        type:String,
       
    },
   Websitename:{
        type:String,
       
    },
   
},{
    versionKey:false,
    timestamps:true,
});

const User = mongoose.model("user",userSchema);

module.exports=User;