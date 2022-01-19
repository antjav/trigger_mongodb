const mongoose = require('mongoose')
const { Schema } = mongoose

const SolicitudSchema = new Schema({
  solicitud_id: {
    type: Number,
    require: true
  },
  empleado_id: {
    type: Number,
    require: true
  },
  cliente_id: {
    type: Number,
    require: true
  },
  solicitud_origen: {
    type: String,
  },
  solicitud_fecha: {
    type: Date,
  }
}, { versionKey: false })

module.exports = mongoose.model('solicitud', SolicitudSchema)