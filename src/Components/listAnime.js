import Animes from './Animes';
function ListAnime(props){
    let LstAnimeRendered = props.elements.map(element =>{
    
        return <Animes 
                key={element.Id}
                value = {element}
                fnAddfavorites={props.fnAddfavorites}

        />
    } );

    return(
       <div className='container'>
        <div className='row'>
            {LstAnimeRendered}
       </div>
       </div>
       
    );
}


export default ListAnime;