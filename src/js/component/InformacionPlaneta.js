import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";


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
        <div className="container mt-4" style={{ maxWidth:"1000px"}}>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    <img src={rigoImage} className="card-img-top" alt="..."/>
                </div>
                <div className="col-md-6 d-flex flex-column  text-center">    
                    {loading ? (
                        <p>Loading...</p>
                    ): info ? (
                        <>
                            <h1 className="display-5 fw-bold mt-3">{info.name}</h1>
                            <p className="text-muted">texto del planeta</p>
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
