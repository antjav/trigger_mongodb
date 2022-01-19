const mongoose = require('mongoose')
const { Schema } = mongoose

const EmpresaSchema = new Schema({
  empresa_id: {
    type: Number,
    require: true
  },
  empresa_nombre: {
    type: String,
  },
  empresa_direccion: {
    type: String,
  },
  empresa_ciudad: {
    type: String,
  },
  empresa_correo: {
    type: String,
  },
  empresa_telefono: {
    type: String,
  }
}, { versionKey: false })

module.exports = mongoose.model('empresa', EmpresaSchema)