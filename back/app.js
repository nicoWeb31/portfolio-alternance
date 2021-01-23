//express server
import express from "express";
const app = express();
import morgan from "morgan";
import routerMessage from './routes/messageRoutes.js';
import AppError from './utils/appError.js';
import {errorHandler} from './controllers/errorController.js'


// import path from 'path';

//middleware server
app.use((req, res, next) => {
    console.log("welcome in first middleware 😻 ", process.env.NODE_ENV);

    next();
});

//parser 
app.use(express.json({ limit: "10kb" }));

// const __dirname = path.resolve();
// app.use('/images',express.static(__dirname + '/images/'))

//MORGAN
if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}

//router server________________________________________________________________________
app.use('/api/v1/messages',routerMessage)

//error route__________________________________________________________________________
app.all('*',(req,res, next)=>{
    next(new AppError(`Can't find ${req.originalUrl} on this server!!!!!`, 404));
})
app.use(errorHandler)




export default app;
