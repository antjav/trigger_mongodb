const { conexionMongo } = require('../db')
const {Empresa, Empleado, Licencia} = require('../models')

const {
  empresa,
  empleadoCorrecto,
  empleadoIncorrecto,
  licenciaSinCaducar,
  licenciaCaducada
} = require('./datos')

// Insertar datos para probar trigger
const insertarDatos = async () => {

  // Conexión a MongoDB
  await conexionMongo()

  // Insertar empresa
  await new Empresa(empresa).save()

  // Insertar empleados
  await new Empleado(empleadoCorrecto).save()
  await new Empleado(empleadoIncorrecto).save()

  // Insertar licencias
  await new Licencia(licenciaSinCaducar).save()
  await new Licencia(licenciaCaducada).save()

  console.log('Datos insertados correctamente...')

  process.exit()
}

insertarDatos()