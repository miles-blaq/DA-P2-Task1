
import { data } from "../../data"

export default function handler (req, res){
    console.log(data.interests)
    res.status(200).json(data)
}

