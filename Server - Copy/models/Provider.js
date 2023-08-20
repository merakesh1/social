const m=require('mongoose');
const {Schema}=m;  //destructuring of object.

const Provider=new Schema({
    name:{
        type:String,
        required:true
    },
    mobile_number:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    note:{
        type:String
    },
    expire:{
        type:Date,
        default:Date.now()
    }
});

const provider=m.model('Provider',Provider);
module.exports=provider;
