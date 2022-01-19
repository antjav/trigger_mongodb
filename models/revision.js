const mongoose = require('mongoose')
const { Schema } = mongoose

const RevisionSchema = new Schema({
  revision_id: {
    type: Number,
    require: true
  },
  revision_estadoequipo: {
    type: String,
  },
  revision_fecha: {
    type: Date,
  },
  revision_disponibilidad: {
    type: String,
  }
}, { versionKey: false })

module.exports = mongoose.model('revision', RevisionSchema)