//import { heroes } from './data/heroes';
import { heroes } from '../data/heroes';

export const getHeroeById = (id) => {
    return heroes.find( (element) => element.id === id );
}

// console.log( getHeroeById(2) );


export const getHeroeByOwner = ( owner ) => {
    return heroes.filter( (element) => element.owner === owner );
}

// console.log( getHeroeByOwner('DC') );