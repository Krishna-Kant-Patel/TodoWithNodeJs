const mongoose = require('mongoose');


module.exports = async () => {
    try{
        const connectionParams ={
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifieldTopology:true
        };
        await mongoose.connect(
            "mongodb://localhost/todo-app",
            connectionParams
            );
            console.log("connected to database.");
    } catch (error){
        console.log("Not connected to database.", error);

    }
}