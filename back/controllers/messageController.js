import Message from "../models/messageModel.js";
import {catchAsync} from '../utils/catchAsync.js'


//@desc create  a new message
//@route post /api//v1/messages
//@access Public
//_____________________create message___________________________________________
const createMessage = catchAsync(async (req,res,next) =>{

    console.log(req.body)
    const newMessage = await Message.create(req.body)

    res.status(201).json({
        status: "success",
        message: newMessage
    })
})




export {
    createMessage,
}