const mongoose = require('mongoose')
const { Schema } = mongoose

const SectorSchema = new Schema({
  sector_id: {
    type: Number,
    require: true
  },
  entrega_id: {
    type: Number,
    require: true
  },
  sector_nombre: {
    type: String,
  },
  sector_ciudad: {
    type: String,
  },
  sector_codigopostal: {
    type: String,
  }
}, { versionKey: false })

module.exports = mongoose.model('sector', SectorSchema)