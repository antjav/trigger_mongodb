const mongoose = require('mongoose')
const { Schema } = mongoose

const LicenciaSchema = new Schema({
  licencia_id: {
    type: Number,
    require: true
  },
  revision_id: {
    type: Number,
    require: true
  },
  empleado_id: {
    type: Number,
    require: true
  },
  licencia_emision: {
    type: Date,
  },
  licencia_caducidad: {
    type: Date,
  },
  licencia_estado: {
    type: String,
  },
  licencia_tipo: {
    type: String,
  }
}, { versionKey: false })

module.exports = mongoose.model('licencia', LicenciaSchema)