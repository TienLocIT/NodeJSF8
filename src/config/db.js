const mongoose = require("mongoose")
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/F8Nodejs',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Connect SuccesFully");
    }
    catch(err){
        console.log("Connect Err:"+err);
    }
}
module.exports={connect};