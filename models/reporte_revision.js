const mongoose = require('mongoose')
const { Schema } = mongoose

const ReporteRevisionSchema = new Schema({
  reporterevision_id: {
    type: Number,
    require: true
  },
  revisionmoto_id: {
    type: Number,
    require: true
  },
  reporterevision_fecha: {
    type: Date,
  },
  reporterevision_danios: {
    type: String,
  }
}, { versionKey: false })

module.exports = mongoose.model('reporte_revision', ReporteRevisionSchema)