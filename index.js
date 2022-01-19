const {conexionMongo} = require('./db')
const { trigger } = require('./triggers')

/* 
  empleado_id:
  1 > Licencia activa
  2 > Licencia inactiva
  3 > No existe el empleado
*/

const nuevaSolicitud = {
  solicitud_id: 1,
  empleado_id: 1,
  cliente_id: 1,
  solicitud_origen: 'Correo de la institución',
  solicitud_fecha: new Date(2022, 01, 20)
}

async function ejecutarTrigger(){

  // Conexión MongoDB
  await conexionMongo()

  // Ejecución del trigger
  trigger(nuevaSolicitud)
}

ejecutarTrigger()