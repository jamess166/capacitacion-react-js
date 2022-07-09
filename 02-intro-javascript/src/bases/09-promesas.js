import {getHeroeById} from './bases/08-imp-exp'
import { heroes } from './data/heroes';

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         // resolve();
//         const heroe = getHeroeById(2);
//         resolve( heroe );
//         // reject( 'No se pudo encontrar el heroe' );

//     }, 2000);
// });

// promesa.then( (heroe) => {
//     console.log('heore', heroe);
// })
// .catch( err => console.warn( err ));


const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            // resolve();
            const p1 = getHeroeById( id );
            if (p1){
                resolve( p1 );
            } else{
                reject( 'No se pudo encontrar el heroe' );                
            }
    
        }, 2000 );
    });
}

getHeroeByIdAsync(3)
    .then( console.log )
    .catch ( console.warn );