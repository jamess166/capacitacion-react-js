const getImagen = async() => {

    try {
        const apiKey = 'O7y9dzHAuMAH6WJaWDcLEO2ioc41KY10';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`); 
        const { data } = await resp.json();
    
        const { url } = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);    
    } catch (error) {
     //manejo de errores   
    }    
}

getImagen();

// const apiKey = 'O7y9dzHAuMAH6WJaWDcLEO2ioc41KY10';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// peticion
//     .then( resp => resp.json ())
//     .then( ({ data }) => {
//         const { url } = data.images.original;
        
//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append( img );

//     })