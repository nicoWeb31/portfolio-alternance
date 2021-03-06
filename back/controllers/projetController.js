import Projet from "../models/projet.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getAllProjets = catchAsync(async (req, res, next) => {
    // res.send('ok')

    const project = await Projet.find();
    console.log(project);

    res.status(200).json({
        status: 'success',
        length: project.length,
        project
    })
});
