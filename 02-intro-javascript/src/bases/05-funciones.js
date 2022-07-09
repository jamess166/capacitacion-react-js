//Funciones den js
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola, mundo`;


console.log(saludar4);

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi'
}) 

const getUsuarioActivo = (nombre) => ({
    uid: 'ABD555',
    username: nombre
})

const user = getUsuarioActivo();
console.log(user);

