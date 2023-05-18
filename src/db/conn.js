const mongoose= require("mongoose");

mongoose.connect(process.env.MONGO_URL + process.env.MONGO_DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Database is connected!");
}).catch((e)=>{
    console.log(e);
});