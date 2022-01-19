const mongoose = require('mongoose')
const { Schema } = mongoose

const ClienteSchema = new Schema({
  cliente_id: {
    type: Number,
    require: true
  },
  cliente_cedula: {
    type: String,
  },
  cliente_nombre: {
    type: String,
  },
  cliente_apellido: {
    type: String,
  },
  cliente_correo: {
    type: String,
  },
  cliente_fechanacimiento: {
    type: Date,
  },
  cliente_telefono: {
    type: String,
  }
}, { versionKey: false })

module.exports = mongoose.model('cliente', ClienteSchema)