const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/help', (req, res) => {
    res.render('help');
})

router.get('/print/:id', (req, res) => {
    res.render('print');
})

module.exports = router;