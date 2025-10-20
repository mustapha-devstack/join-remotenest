import mongoose from "mongoose";


export async function connect(){
    try {
        mongoose.connect(process.env.MONGODB_URI!)
        mongoose.connection.on("connected", ()=> {
            console.log("Connection to DB succesful");
        })

        mongoose.connection.on("error", (err)=> {
            console.log("Something went wrong"+err);
            process.exit();
        })
    } catch (error) {
        console.log(error)
    }
}
