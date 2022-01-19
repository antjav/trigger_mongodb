const mongoose = require('mongoose')
const { Schema } = mongoose

const EntregaEstadoSchema = new Schema({
  entregaestado_id: {
    type: Number,
    require: true
  },
  entrega_id: {
    type: Number,
    require: true
  },
  entregaestado_estado: {
    type: String,
  }
}, { versionKey: false })

module.exports = mongoose.model('entrega_estado', EntregaEstadoSchema)