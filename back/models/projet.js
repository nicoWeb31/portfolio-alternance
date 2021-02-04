import mongoose from 'mongoose';

const projetSchem = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "titre obligatoire !!"]
    },
    description: {
        type: String,
        required: [true, 'contenu obligatoire  !!']
    },
    stack: {
        type: String,
        required : [true, 'stack technique obligatoire !!']
    },
    image:{
        type: String,
    },
    link:{
        type: String
    }
})

const Projet = mongoose.model("Projet", projetSchem);

export default Projet

