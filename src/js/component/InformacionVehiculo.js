import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const InformacionVehiculo = () => {
    const { store } = useContext(Context);
    const {informacion_id} = useParams();
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    
   

    
    useEffect(()=> {
        fetch(`https://swapi.dev/api/vehicles/${informacion_id}`)
        .then((response) => response.json())
        .then((data) => {
            setInfo(data);  // No es necesario acceder a 'result' ni 'properties' aquí
            setLoading(false);  // Cambiar el estado a cargado
        })
        .catch((error) => {
            console.error("Error al cargar los datos:", error);
            setLoading(false);
        });
    }, [informacion_id]);

    return (
        <div className="container mt-4" style={{ maxWidth:"1000px", background: "black"}}>
            <div className="row">
                <div className="col-md-6 d-flex justify-content-center">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                     <img 
                        src={`https://starwars-visualguide.com/assets/img/vehicles/${informacion_id}.jpg`} 
                        className="card-img-top" 
                        alt={info.name} 
                        style={{ borderRadius: "10px", maxWidth: "50%" }}
                        onError={(e) => e.target.src = "starwars"}// Fallback en caso de error
                    />
                    )}
                </div>
                <div className="col-md-6 d-flex flex-column  text-center">    
                    {loading ? (
                        <p>Loading...</p>
                    ): info && info.name ? (
                        <>
                            <h1 className="display-5 fw-bold"style={{color:"white", margin:"5px"}}>
                                {info.name}
                            </h1>
                            <p className="text-center m-10" style={{color:"white"}}>Vehicles in Star Wars are essential for transportation and battles. From ships like the Millennium Falcon to combat vehicles like the AT-ATs, each one has a unique design and plays a crucial role in the fight between the Empire and the Rebellion.</p>
                        </>
                    ) : (
                        <p>Vehiculo no encontrado.</p>
                    )}
                </div>
            </div>

                <hr style={{border : "2px solid red", margin: "20px 0"}}/>

                {info && !loading &&(
                    <div className="row text-center text-danger fw-bold">
                        <div className="col-2"><p>Name</p> <p>{info.name}</p></div>
                        <div className="col-2"><p>Model</p> <p> {info.model}</p></div>
                        <div className="col-2"><p>Length</p><p> {info.length}</p></div>
                        <div className="col-2"><p>Passengers</p><p> {info.passengers}</p></div>
                        <div className="col-2"><p>Consumables</p><p> {info.consumables}</p></div>
                        <div className="col-2"><p>Crew</p><p> {info.crew}</p></div>
                    </div>
                 )}
        </div>
    
            
    
    );
};
