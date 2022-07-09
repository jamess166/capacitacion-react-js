// desesctructuracion
// asignacione desestructurante

const persona = {
    nombre: 'tony',
    edad:45,
    clave: 'Iroman',
    rango : 'Soldado'
}

const user = ({clave, nombre, edad,rango}) => {
    
    return {
        nombreClave : clave,
        anios : edad,
    }
}

const {nombreClave, anios} = user( persona );

console.log(nombreClave,anios);

