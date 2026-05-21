const express = require('express');
const router = express.Router();
const matakuliahController = require('../controller/matakuliahController.js');

router.get('/', matakuliahController.getAllMatakuliah);
router.get('/:id', matakuliahController.getMatakuliahById);
router.post('/', matakuliahController.createMatakuliah);
router.put('/:id', matakuliahController.updateMatakuliah);
router.delete('/:id', matakuliahController.deleteMatakuliah);

module.exports = router;