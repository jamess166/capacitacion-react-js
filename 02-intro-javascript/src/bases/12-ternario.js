const { act } = require("react-dom/test-utils");

const activo = true;

// let mesaje = '';

// if ( activo ) {
//     mensaje = 'Activo'
// } else {
//     mesaje = 'Inactivo'
// }

// const mensaje = ( !activo ) ? 'Activo' : 'Inactivo';
// const mensaje = ( !activo ) ? 'Activo' : null;
const mensaje = !activo && 'Activo';

console.log(mensaje);