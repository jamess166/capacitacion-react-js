const persona = {
    nombre: 'James',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 5454646,
        lat: 45454545,
        lng: 35.555,
    }
};


const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);
