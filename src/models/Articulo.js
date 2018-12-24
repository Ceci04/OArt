const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const articuloSchema = new Schema({
    numObra: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: false
    },
    titulo: {
        type: String,
        required: false
    },
    realizado: {
        type: String,
        required: false
    },
    procedimiento: {
        type: String,
        required: false
    },
    medidas: {
        type: String,
        required: false
    },
    procedencia: {
        type: String,
        required: false
    },
    precio: {
        type: String,
        required: false
    },
    catalogo: {
        type: String,
        required: false
    },
    ubicacion: {
        type: String,
        required: false
    },
    descripcion: {
        type: String,
        required: false
    },
    notas: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
    tipo: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('articulo', articuloSchema);