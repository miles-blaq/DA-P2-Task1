import {mongoose,Schema} from "mongoose";



const UserSchema = new mongoose.Schema({
    id: String,
    name: String,
    interests: [{type:String}],
    information: String,
    pastExperiences:[{type:String}]
})

module.exports = mongoose.models.User || mongoose.model("User", UserSchema)

