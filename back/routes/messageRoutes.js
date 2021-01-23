import express from "express";
import {createMessage} from '../controllers/messageController.js'



const router  = express.Router();


router.route('/')

//@desc create  a new message
//@route post /api//v1/messages
//@access Public
    .post(createMessage)


export default router;