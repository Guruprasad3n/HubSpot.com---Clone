const mongoose= require ("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    Websitename:{
        type:String,
       
    },
    Companyname:{
        type:String,
       
    },
  
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
        unique:true,
    }
},{
    versionKey:false,
    timestamps:true,
});

const User = mongoose.model("user",userSchema);

module.exports=User;