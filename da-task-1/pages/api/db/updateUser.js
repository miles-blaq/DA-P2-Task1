import { connectMongo } from "../../../config/connectDb";
import User from "../../../models/userData"

export default async function handler (req, res){
    const {method} = req
    const {hobby, experience} = req.body
    console.log("connecting to mongo for update");
    await connectMongo();

    console.log("connected to mongo, updating docs")
    if(method == "POST" && hobby){
        try{
            await User.updateOne({id:"1"},{$push: {interests: hobby}})
            const users = await User.find({})
            console.log("user updated")
            console.log(req.body)
            res.json({users})
        }catch{
            res.status(400).json({ success: false } + "oh noo");
        }
    }else if(method == "POST" && experience){

        console.log(experience)
        await User.updateOne({id:"1"},{$push: {pastExperiences: experience}})
            const users = await User.find({})
            console.log("user updated")
            console.log(req.body)
            res.json({users})
    }
}
