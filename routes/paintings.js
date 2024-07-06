const express = require('express');
const router = express.Router();
const Painting = require('../models/painting');

// GET all paintings
router.get('/', async (req, res) => {
    try {
        const paintings = await Painting.find();
        res.json(paintings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// UPDATE a painting
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const updatedPainting = await Painting.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedPainting);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
