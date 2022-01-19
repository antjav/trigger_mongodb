// Empresa
const empresa = {
  empresa_id: 1,
  empresa_nombre: 'Delivery S.A.',
  empresa_direccion: 'Los Esteros',
  empresa_ciudad: 'Manta',
  empresa_correo: 'delivery@manta.com',
  empresa_telefono: '0978935624'
}

// Empleado que no tiene caducado su licencia
const empleadoCorrecto = {
  empleado_id: 1,
  empresa_id: 1,
  empleado_cedula: '1368799974',
  empleado_nombre: 'Luis Fernando',
  empleado_apellido: 'Pérez Olivo',
  empleado_correo: 'lfperez@gmail.com',
  empleado_direccion: 'Barrio Jocay',
  empleado_celular: '0989786790',
  empleado_tipo: 'MOTORIZADO'
}

// Licencia sin caducar
const licenciaSinCaducar = {
  licencia_id: 2,
  revision_id: 1,
  empleado_id: 1,
  licencia_emision: new Date(2020, 7, 14),
  licencia_caducidad: new Date(2024, 7, 14),
  licencia_estado: 'ACTIVA',
  licencia_tipo: 'B'
}

// Empleado que tiene caducado su licencia
const empleadoIncorrecto = {
  empleado_id: 2,
  empresa_id: 1,
  empleado_cedula: '0967487567',
  empleado_nombre: 'Pedro Juan',
  empleado_apellido: 'Bailón López',
  empleado_correo: 'pjbailon@gmail.com',
  empleado_direccion: 'Barrio Miraflores',
  empleado_celular: '0528935464',
  empleado_tipo: 'MOTORIZADO'
}

// Licencia caducada
const licenciaCaducada = {
  licencia_id: 1,
  revision_id: 1,
  empleado_id: 2,
  licencia_emision: new Date(2010, 7, 14),
  licencia_caducidad: new Date(2014, 7, 14),
  licencia_estado: 'INACTIVA',
  licencia_tipo: 'B'
}

module.exports = {
  empresa,
  empleadoCorrecto,
  licenciaSinCaducar,
  empleadoIncorrecto,
  licenciaCaducada
}