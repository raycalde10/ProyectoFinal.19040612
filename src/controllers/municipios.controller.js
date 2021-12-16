'use strict'
const httpStatus = require('http-status')
const Municipios = require('../models/municipios.model')

exports.InsertMunicipio = async (req, res, next) => {
  try {

    const body = req.body
    const municipios = new Municipios(body)
    const savedItem = await municipios.save()
    res.status(httpStatus.CREATED)
    res.send({
      success: true,
      message: 'Municipio Creado Exitosamente'
    })
  } catch (error) {
    return next(error)
  }
}

exports.UpdateMunicipio = async (req, res, next) => {
  try {

    const body = req.body
    let municipio = await Municipios.findOne({ _id: body._id })
    Object.assign(municipio, body)
    await municipio.save()
    res.status(httpStatus.CREATED)
    res.send({
      success: true,
      message: 'Municipio Actualizado Exitosamente'
    })
  } catch (error) {
    return next(error)
  }
}

exports.getMunicipioById = async (req, res, next) => {
  const user = req.user;
  try {
    const body = req.body
    const municipio = await Municipios.findOne({ _id: body._id })

    res.status(httpStatus.CREATED)
    res.send({
      success: true,
      message: '',
      data: {
        municipio
      }
    })
  } catch (error) {
    return next(error)
  }
}

exports.getMunicipios = async (req, res, next) => {
  const user = req.user;
  try {

    const municipio = await Municipios.find();

    res.status(httpStatus.CREATED)
    res.send({
      success: true,
      message: '',
      data: {
        municipio
      }
    })
  } catch (error) {
    return next(error)
  }
}


