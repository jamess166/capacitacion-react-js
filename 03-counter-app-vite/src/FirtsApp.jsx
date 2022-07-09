import Protypes from 'prop-types';

export const FirtsApp = ( { title, subTitle } ) => {
  
  // console.log(props);

  
  return (
    <>
      <h1>{ title }</h1>
      <p>{ subTitle }</p>
    </>
  );
}


FirtsApp.proTypes = {
  title: Protypes.string.isRequired,
  subTitle: Protypes.string,
}

FirtsApp.defaultProps = {
  title: 'No hay titulo',
  subTitle: 'No ha subtitulo',
}