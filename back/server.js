import app from "./app.js";
import connectDB from "./config/bd.js";
import path from 'path';
import express from "express";

import dotenv from "dotenv";
import colors from "colors"; //colorConsole
dotenv.config();

//____________________________MONGODB CONNECT_________________________________
connectDB();




//production environment
const __dirname = path.resolve();
console.log("🚀 ~ file: app.js ~ line 28 ~ __dirname", __dirname)

if (process.env.NODE_ENV === 'production') {

    app.use(express.static(path.join(__dirname, "/frontend/build")));
    app.get("*", (req, res) =>
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    );
} else {
    app.get("/", (req, res) => {
        console.log("dev mode");
        res.send("Api is runnig.....");
    });
}


//server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(
        `Server run in ${process.env.NODE_ENV} on port ${PORT} 🙂 ...`.yellow
            .bold
    );
});
