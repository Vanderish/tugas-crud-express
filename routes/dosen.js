const express = require('express');
const router = express.Router();
const dosenController = require('../controller/dosenController.js');

router.get('/', dosenController.getAllDosen);
router.get('/:id', dosenController.getDosenById);
router.post('/', dosenController.createDosen);
router.put('/:id', dosenController.updateDosen);
router.delete('/:id', dosenController.deleteDosen);

module.exports = router;