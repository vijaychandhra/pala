const mongoose=require('mongoose');
const schema=mongoose.Schema({
    name:String,
    rollno:String
})
module.exports=mongoose.model('vijaydb',schema);