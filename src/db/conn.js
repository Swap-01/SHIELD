const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/location-api",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection is succesful");
}).catch((e)=>{
    console.log(e);
});