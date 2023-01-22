const express = require('express');
const router = express.Router();
const serviceData = require('../services.json');

router.get('/', (req, res) => {
    res.render('services.ejs', {serviceData});
});

router.get('/:service', (req, res) => {
    const { service } = req.params;
    const data = serviceData[service];
    res.render('services-template.ejs', { ...data });
});

module.exports = router;