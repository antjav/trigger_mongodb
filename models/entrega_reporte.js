const mongoose = require('mongoose')
const { Schema } = mongoose

const EntregaReporteSchema = new Schema({
  entregareporte_id: {
    type: Number,
    require: true
  },
  entregaestado_id: {
    type: Number,
    require: true
  },
  entregareporte_incidente: {
    type: String,
  },
  entregareporte_pagado: {
    type: Number,
  },
  entregareporte_fecha: {
    type: Date,
  }
}, { versionKey: false })

module.exports = mongoose.model('entrega_reporte', EntregaReporteSchema)