import app from "./app.js";
import connectDB from "./config/bd.js";


import dotenv from "dotenv";
import colors from "colors"; //colorConsole
dotenv.config();

//____________________________MONGODB CONNECT_________________________________
connectDB();


//server
const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(
        `Server run in ${process.env.NODE_ENV} on port ${PORT} 🙂 ...`.yellow
            .bold
    );
});
