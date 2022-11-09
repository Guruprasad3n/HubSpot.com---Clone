const mongoose = require("mongoose");

const cartSchema= new mongoose.Schema({
    software:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"software",
        reqiured:true,
    },
    user:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"user",
       reqiured:true
    },
    quantity:{
        type:Number,
        reqiured:true,
        min:1
    }
});

const Cart = mongoose.model("cart",cartSchema);

module.exports= Cart