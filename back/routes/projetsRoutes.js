import {getAllProjets} from '../controllers/projetController.js';

import express from 'express';
const router = express.Router();

router.route('/')
//@desc get all projet
//@route get /api/v1/projets
//@access Public
.get(getAllProjets)




export default router