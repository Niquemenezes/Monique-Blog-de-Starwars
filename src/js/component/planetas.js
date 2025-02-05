import React  from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Context } from "../store/appContext";
import { useContext } from "react";


export const Planetas = (props) => {
    const { store, actions } = useContext(Context);
    const isFavorite = store.favoritos.includes(props.name);

    return (
        <div className="card mx-2" style={{width: "18rem", marginBottom:"20px", borderRadius:"8px"}}>
            <img src={rigoImage} className="card-img-top" alt="..."/>
            <div className="card-body d.flex flex.column">
                <h3 className="card-title">{props.name}</h3>
                <h5>Population:  {props.population}</h5>
                <h5>Terrain:  {props.terrain}</h5>
              
                <div className="d-flex justify-content-between align-items-center mt-4">
                              <Link to={"/informacion/" + props.uid } className ="btn btn-outline-primary">Learn more!</Link>  
                                      
                              <FontAwesomeIcon icon={faHeart} className={`btn ${isFavorite ? 'btn-warning' : 'btn-outline-warning'}`} // borde amarillo cuando no es favorito
                              style={{
                              cursor: "pointer",
                              fontSize: "1.5rem",        
                              color: isFavorite ? "yellow" : "inherit", // El color amarillo si está en favoritos
                              transition: "color 0.3s ease-in-out", // Transición suave para el color
                              }}
                             

                onClick={() => actions.toggleFavorite(props.name)}/>
                </div>
            </div>
        </div>
    );
};