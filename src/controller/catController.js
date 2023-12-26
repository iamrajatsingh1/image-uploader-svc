const express = require('express');
const multer = require('multer');
const path = require('path');
const catService = require('../service/catService');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });


router.post('/upload', upload.single('catPic'), (req, res) => {
    const newCatPic = catService.uploadCatPic(req.file);
    res.status(201).json(newCatPic);
});

router.delete('/delete/:id', (req, res) => {
    const idToDelete = parseInt(req.params.id);
    const success = catService.deleteCatPic(idToDelete);
    if (success) {
        res.status(204).end();
    } else {
        res.status(404).json({ error: 'Cat pic not found' });
    }
});

router.put('/update/:id', upload.single('catPic'), (req, res) => {
    const idToUpdate = parseInt(req.params.id);
    const updatedPic = catService.updateCatPic(idToUpdate, req.file);
    if (updatedPic) {
        res.status(200).json(updatedPic);
    } else {
        res.status(404).json({ error: 'Cat pic not found' });
    }
});

router.get('/fetch/:id', (req, res) => {
    const idToFetch = parseInt(req.params.id);
    const filePath = catService.getCatPicById(idToFetch);

    if (filePath) {
        res.sendFile(filePath);
    } else {
        res.status(404).json({ error: 'Cat pic not found' });
    }
});

router.get('/list', (req, res) => {
    const catPics = catService.getListOfCatPics();
    res.status(200).json(catPics);
});

module.exports = router;
