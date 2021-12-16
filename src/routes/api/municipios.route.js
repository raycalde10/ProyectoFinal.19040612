'use strict'

const express = require('express')
const router = express.Router()
const municipios = require('../../controllers/municipios.controller')


router.get('/', municipios.getMunicipios)
router.get('/id', municipios.getMunicipioById)
router.post('/insert', municipios.InsertMunicipio)
router.put('/update', municipios.UpdateMunicipio)

module.exports = router
