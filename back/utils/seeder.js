import dotenv from 'dotenv';
import Projet from "../models/projet.js";
import connectBD from '../config/bd.js';
import projects from '../data/projet.js';
import colors from 'colors';



dotenv.config();
connectBD();


//import data
const importData = async () => {
    try {

        await Projet.deleteMany();

        await Projet.insertMany(projects);
        console.log('Data imported'.green.inverse);


    } catch (error) {
        console.log(`${error.message}`.red.inverse);
        process.exit(1);
    }
};


//destroy data 
const destroyeData = async () => {
    try {
        await Projet.deleteMany();


        console.log('Data DESTROYED !!!!'.red.inverse);
    } catch (error) {
        console.log(`${error.message}`.red.inverse);
        process.exit(1);
    }
};


if (process.argv[2] === '-d') {
    destroyeData();
} else {
    importData();
}