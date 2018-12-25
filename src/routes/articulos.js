const express = require('express');
const router = express.Router();

const Articulo = require('../models/Articulo');

router.get('/articulos/add', (req, res) => {
    res.render('articulos/nuevo-articulo');
});

router.post('/articulos/nuevo-articulo', async (req, res) => {
    const {
        numObra,
        tipo,
        autor,
        titulo,
        realizado,
        procedimiento,
        medidas,
        procedencia,
        precio,
        catalogo,
        ubicacion,
        descripcion,
        notas,
        img
    } = req.body;
    const errors = [];

    // Validando los Campos que recogemos del formulario
    if (!numObra) {
        errors.push({
            text: ' Tienes que introducir un Nº de la Obra'
        });
    }
    const newArticulo = new Articulo({
        numObra,
        tipo,
        autor,
        titulo,
        realizado,
        procedimiento,
        medidas,
        procedencia,
        precio,
        catalogo,
        ubicacion,
        descripcion,
        notas,
        img
    });
    await newArticulo.save();
    req.flash('success_msg', 'Articulo Correctamente Añadido');
    res.redirect('/articulos');
});

// CARGA TODOS LOS ARTICULOS
router.get('/articulos', async (req, res) => {
    const articulos = await Articulo.find();
    res.render('articulos/all-articulos', {
        articulos
    });
});


// EDITAR LOS ARTICULOS
router.get('/articulos/edit/:id', async (req, res) => {
    const articulo = await Articulo.findById(req.params.id);
    res.render('articulos/edit-articulo', {
        articulo
    });
});

router.put('/articulos/edit-articulo/:id', async (req, res) => {
    const {
        numObra,
        tipo,
        autor,
        titulo,
        realizado,
        procedimiento,
        medidas,
        procedencia,
        precio,
        catalogo,
        ubicacion,
        descripcion,
        notas,
        img
    } = req.body;
    await Articulo.findByIdAndUpdate(req.params.id, {
        numObra,
        tipo,
        autor,
        titulo,
        realizado,
        procedimiento,
        medidas,
        procedencia,
        precio,
        catalogo,
        ubicacion,
        descripcion,
        notas,
        img
    });
    req.flash('success_msg', 'Articulo Actualizado Correctamente');
    res.redirect('/articulos');
});


// IMPRIMIR ARTICULO

router.get('/print/:id', async (req, res) => {
    const articulo = await Articulo.findById(req.params.id);
    res.render('print', {
        articulo
    });
});

router.put('print/:id', async (req, res) => {
    const {
        numObra,
        tipo,
        autor,
        titulo,
        realizado,
        procedimiento,
        medidas,
        procedencia,
        precio,
        catalogo,
        ubicacion,
        descripcion,
        notas,
        img
    } = req.body;
    await Articulo.findByIdAndUpdate(req.params.id, {
        numObra,
        tipo,
        autor,
        titulo,
        realizado,
        procedimiento,
        medidas,
        procedencia,
        precio,
        catalogo,
        ubicacion,
        descripcion,
        notas,
        img
    });
    req.flash('success_msg', 'Ficha Mandada a Imprimir');
    res.redirect('/articulos');
});


// ELIMINAR LOS ARTICULOS
router.delete('/articulos/delete/:id', async (req, res) => {
    await Articulo.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Articulo Borrado Correctamente');
    res.redirect('/articulos');
});


// TIPOS DE ARTICULOS


// CARGA LOS ARTICULOS EN ORIGINAL

router.get('/articulos/original', async (req, res) => {
    const articulos = await Articulo.find();
    res.render('articulos/obras/original', {
        articulos
    });
});

router.get('/articulos/esculturas', async (req, res) => {
    const articulos = await Articulo.find();
    res.render('articulos/obras/esculturas', {
        articulos
    });
});

router.get('/articulos/obras-graficas', async (req, res) => {
    const articulos = await Articulo.find();
    res.render('articulos/obras/obras-graficas', {
        articulos
    });
});

router.get('/articulos/fotografia', async (req, res) => {
    const articulos = await Articulo.find();
    res.render('articulos/obras/fotografia', {
        articulos
    });
});

router.get('/articulos/mosaicos', async (req, res) => {
    const articulos = await Articulo.find();
    res.render('articulos/obras/mosaicos', {
        articulos
    });
});

router.get('/articulos/antiguedades', async (req, res) => {
    const articulos = await Articulo.find();
    res.render('articulos/obras/antiguedades', {
        articulos
    });
});

router.get('/articulos/tapices', async (req, res) => {
    const articulos = await Articulo.find();
    res.render('articulos/obras/tapices', {
        articulos
    });
});

module.exports = router;