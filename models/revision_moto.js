const mongoose = require('mongoose')
const { Schema } = mongoose

const RevisionMotoSchema = new Schema({
  revisionmoto_id: {
    type: Number,
    require: true
  },
  moto_id: {
    type: Number,
    require: true
  },
  revisionmoto_fecha: {
    type: Date,
  },
  revisionmoto_costo: {
    type: Number,
  },
  revisionmoto_pagado: {
    type: Number,
  },
  revisionmoto_estado: {
    type: String,
  }
}, { versionKey: false })

module.exports = mongoose.model('revision_moto', RevisionMotoSchema)