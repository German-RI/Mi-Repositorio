import Animes from './Components/Animes';
import CreateAnime from './Components/CreateAnime';
import ListFavoritos from './Components/ListFavoritos';
import ListFavorito from './Components/ListFavoritos';
import Navegacion from './Components/Navegacion';
import Numero from './Components/Numero';
import Saludo from './Components/Saludo';
import ListAnime from './Components/listAnime';
import dataAnime from './data/Anime';
import { useState } from 'react';
function App() {
//funcion que verifica que garantisa que solo uno sea favorito y no repetidos//
function addAnimeFavorites(element){
  let templistAnime = [...listAnimesFavoritos];
  if (templistAnime.length === 0) {
    templistAnime.push(element);
    setlistAnimesFavoritos(templistAnime);
  } else {
    if (!templistAnime.some((obj) => obj === element)) {
      templistAnime.push(element);
      setlistAnimesFavoritos(templistAnime);
    }
  }
}
function newAnime(element){
  let templistAnime = [...listAnimes];
  templistAnime.push(element);
  setlistAnimes(templistAnime);
}
//funcion para eliminar un elemento marcado como favorito//
 const [listAnimes, setlistAnimes] =useState(dataAnime);
 const [listAnimesFavoritos,setlistAnimesFavoritos] = useState([]);
 function handleRemoveFavorite(updatedFavorites) {
 setlistAnimesFavoritos(updatedFavorites);
}
  return (
    <div> 
      
      <Navegacion />
      <div className='container'>
        <div className='row'>
          <div className='col-md-9'>
          <ListAnime
          elements={listAnimes} 
          fnAddfavorites={addAnimeFavorites} />
          </div>
          <div className='col-md-3'>
          <CreateAnime fnNewAnime={newAnime} />
            
          <ListFavoritos elements={listAnimesFavoritos} onRemoveFavorite={handleRemoveFavorite} />
          </div>
        </div>
      </div>
 
      {/*
           <Saludo />
           <h1>Hola mundo</h1>
       <Numero valor="5"/>
      
  */}
    </div>
  );
  
}

export default App;
