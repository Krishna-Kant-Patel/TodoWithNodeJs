const mongoose = require('mongoose');


module.exports = async () => {
    try{
        const connectionParams ={
            useNewUrlParser: true,
            // useCreateIndex: true,
            // useUnifieldTopology:true
        };
        await mongoose.connect(
            "mongodb://127.0.0.1:27017/krishna",
            connectionParams
            );
            console.log("connected to database.");
    } catch (error){
        console.log("Not connected to database.", error);

    }
}