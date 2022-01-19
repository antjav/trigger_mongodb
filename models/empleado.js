const mongoose = require('mongoose')
const { Schema } = mongoose

const EmpleadoSchema = new Schema({
  empleado_id: {
    type: Number,
    require: true
  },
  empresa_id: {
    type: Number,
    require: true
  },
  empleado_cedula: {
    type: String,
  },
  empleado_nombre: {
    type: String,
  },
  empleado_apellido: {
    type: String,
  },
  empleado_correo: {
    type: String,
  },
  empleado_direccion: {
    type: String,
  },
  empleado_celular: {
    type: String,
  },
  empleado_tipo: {
    type: String,
  }
}, { versionKey: false })

module.exports = mongoose.model('empleado', EmpleadoSchema)