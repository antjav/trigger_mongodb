const mongoose = require('mongoose')
const MONGO_URI = 'mongodb+srv://javier:tpXZ2WUWFyjhuRuz@cluster0.b3lgl.mongodb.net/motos?retryWrites=true&w=majority'

// Conexión a la base de datos
const conexionMongo = async () => {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
    .then(()=>{
      console.log('Conexión a MongoDB correctamente...')
    })
    .catch(err =>{
      console.error(err)
    })
}

module.exports = { conexionMongo }