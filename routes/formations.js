const express = require('express');
const router = express.Router();
const formations = require('../controllers/formations');
const path = require("path")

router.get('/formations', formations.showFormations );

router.get('/formations/new', formations.addFormationForm );

router.post('/formations', formations.addFormation );


router.get('/formations/:id/edit', formations.editForm );

router.put('/formations/:id', formations.updateFormation );

router.delete('/formations/:id', formations.deleteFormation );

module.exports = router;