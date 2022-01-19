const mongoose = require('mongoose')
const { Schema } = mongoose

const LugarSchema = new Schema({
  lugar_id: {
    type: Number,
    require: true
  },
  sector_id: {
    type: Number,
    require: true
  },
  lugar_nombre: {
    type: String,
  },
  lugar_concurrencia: {
    type: String,
  },
  lugar_entrega: {
    type: String,
  }
}, { versionKey: false })

module.exports = mongoose.model('lugar', LugarSchema)