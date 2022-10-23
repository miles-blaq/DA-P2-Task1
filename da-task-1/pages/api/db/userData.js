import { connectMongo } from "../../../config/connectDb";
import User from "../../../models/userData"


export default async function handler (req, res){
    const {method} = req

    console.log("connecting to mongo");
    await connectMongo();

    console.log("connected to mongo")

    if(method == "GET"){
        try{
            console.log("retrieving documents")
            const users = await User.find({})
            res.json({users})
        }catch{
            res.status(400).json({ success: false});
        }
    }else if(method == "POST"){
        try {
            console.log("creating document")
            console.log(req.body)
            const user = await User.create(req.body)
            console.log("document updated")
        
            res.json({user})
        } catch (error) {
            console.log ("wait!!, something went wrong " + error)
        }
    }
}

