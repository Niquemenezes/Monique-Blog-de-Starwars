import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starwars from "../../img/starwars.png";


export const InformacionPlaneta = () => {
    const { store } = useContext(Context);
    const {informacion_id} = useParams();
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);
   

    
    useEffect(()=> {
        fetch(`https://swapi.dev/api/planets/${informacion_id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log("Data received: ", data);
            setInfo(data);  // No es necesario acceder a 'result' ni 'properties' aquí
            setLoading(false);  // Cambiar el estado a cargado
        })
    }, [informacion_id]);

    return (
        <div className="container mt-4" style={{ maxWidth:"1000px", background: "black"}}>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <img 
                        src={`https://starwars-visualguide.com/assets/img/planets/${informacion_id}.jpg`} 
                        className="card-img-top" 
                        alt={info ? info.name : "imagen del planeta"} 
                        style={{ borderRadius: "10px", maxWidth: "50%" }}
                        onError={(e) => e.target.src = starwars} // Fallback en caso de error
                    />
                </div>
                <div className="col-md-6 d-flex flex-column  text-center">    
                    {loading ? (
                        <p>Loading...</p>
                    ): info && info.name? (
                        <>
                            <h1 className="display-5 fw-bold mt-3" style={{color:"white", margin:"5px"}}>{info.name}</h1>
                            <p className="text-center m-10" style={{color:"white"}}>The planets in Star Wars are diverse and fascinating, with landscapes ranging from dry deserts to lush forests. Iconic locations like Tatooine, home to Luke Skywalker, and Endor, where the decisive battle against the Empire took place, offer unique settings. Each planet has its own ecosystem, culture, and history, adding depth to the vast universe of the saga..</p>
                        </>
                    ) : (
                        <p>Planeta no encontrado.</p>
                    )}
                </div>
            </div>

                <hr style={{border : "2px solid red", margin: "20px 0"}}/>

                {info && (
                    <div className="row text-center text-danger fw-bold">
                        <div className="col-2"><p>Name</p> <p>{info.name}</p></div>
                        <div className="col-2"><p>Climate</p> <p> {info.climate}</p></div>
                        <div className="col-2"><p>Population</p><p> {info.population}</p></div>
                        <div className="col-2"><p>Orbital Period</p><p> {info.orbital_period}</p></div>
                        <div className="col-2"><p>Rotation Period</p><p> {info.rotation_period}</p></div>
                        <div className="col-2"><p>Diameter</p><p> {info.diameter}</p></div>
                    </div>
                 )}
        </div>
    
            
    
    );
};
