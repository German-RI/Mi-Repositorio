import { useState } from 'react';
import '../index.css'

function Animes(props){

    const [verMas, setVerMas] = useState(false);
    let sectionVerMas = <button 
                        onClick={() => setVerMas(true)}
                        className='btn btn-success'>Ver mas...</button>
    if (verMas){

        sectionVerMas = <div>
            <button 
            type="button"
            onClick={() => setVerMas(false)}
            className="btn-close float-end"
            aria-label="close" />
            <hr />
           {props.value.Description}
        </div>
    }


    return(
        <div className="col-md-4">
            <div className="card mb-3 bgcard">
                <img src={props.value.Poster} className="card-img-top" alt="..."/>
                <div className="card-body text-light">
                    <h5 className="card-title">{props.value.Title}</h5>
                    <p className="card-text">{props.value.Description.substring(0, 20)}</p>
                    <p className="card-text"><small className="text-muted">{props.value.Released}</small></p>
                    <p class="card-text">{limitDescription(props.value.Description, 100)}</p>
                    {sectionVerMas}


                    <button 
                        onClick={() =>props.fnAddfavorites(props.value)}
                        className='btn btn-warning'>Favorito</button>

                </div>

            </div>

        </div>

    );
}
function limitDescription(description, maxLength) {
    if (description.length > maxLength) {
        return description.slice(0, maxLength) + "...";
    }
    return description;
}


export default Animes;