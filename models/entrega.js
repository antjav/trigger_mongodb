const mongoose = require('mongoose')
const { Schema } = mongoose

const EntregaSchema = new Schema({
  entrega_id: {
    type: Number,
    require: true
  },
  solicitud_id: {
    type: Number,
    require: true
  },
  entrega_tipo: {
    type: String,
  },
  entrega_peso: {
    type: Number,
  },
  entrega_fecha: {
    type: Date,
  },
  entrega_cantidad: {
    type: Number,
  },
  entrega_valor: {
    type: Number,
  },
  entrega_iva: {
    type: Number,
  },
  entrega_precio: {
    type: Number,
  },
  entrega_pagado: {
    type: Number,
  }
}, { versionKey: false })

module.exports = mongoose.model('entrega', EntregaSchema)