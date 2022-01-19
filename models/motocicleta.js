const mongoose = require('mongoose')
const { Schema } = mongoose

const MotocicletaSchema = new Schema({
  moto_id: {
    type: Number,
    require: true
  },
  empleado_id: {
    type: Number,
    require: true
  },
  moto_placa: {
    type: String,
  },
  moto_cilindraje: {
    type: String,
  },
  moto_anio: {
    type: Date,
  },
  moto_color: {
    type: String,
  },
  moto_reparacion: {
    type: String,
  }
}, { versionKey: false })

module.exports = mongoose.model('motocicleta', MotocicletaSchema)