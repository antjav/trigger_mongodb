const { Licencia, Solicitud } = require('../models')

const trigger = async (solicitud) => {
  try {

    // Obtenemos el Id del empleado y la fecha de solicitud
    const { empleado_id, solicitud_fecha } = solicitud

    // Consultamos su licencia
    const licencia = await Licencia.findOne({empleado_id: empleado_id})

    // Si no existe el empleado, genera un error
    if(licencia == null){
      throw 'No existe el empleado'
    }

    // Verificar si la licencia está caducada
    const { licencia_caducidad } = licencia
    const diferenciaMilisegundos = licencia_caducidad - solicitud_fecha
    const diferenciaDias = diferenciaMilisegundos / (1000*60*60*24)

    if(diferenciaDias < 0){
      throw `La licencia del empleado está caducada por ${Math.abs(diferenciaDias)} días\n` +
      'No se generó la solicitud de entrega...'
    } else {
      const nuevaSolicitud = new Solicitud(solicitud)
      await nuevaSolicitud.save()
      console.log('Se generó correctamente la solicitud de entrega...')
      process.exit()
    }
  } catch (error) {
    console.error(error)
    process.exit()
  }
}

module.exports = { trigger }