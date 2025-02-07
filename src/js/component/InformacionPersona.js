import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const InformacionPersona = () => {
    const { store } = useContext(Context);
    const {informacion_id} = useParams();
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);
   

    
    useEffect(()=> {
        fetch(`https://swapi.dev/api/people/${informacion_id}`)
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
                    src={`https://starwars-visualguide.com/assets/img/characters/${informacion_id}.jpg`} 
                    className="card-img-top" 
                    alt={info ? info.name : "imagen del personaje"} 
                    style={{ borderRadius: "10px", maxWidth: "50%" }}
                    onError={(e) => e.target.src = starwars} // Fallback en caso de error
                />
                </div>
                <div className="col-md-6 d-flex flex-column">    
                    {loading ? (
                        <p>Loading...</p>
                    ): info && info.name ? (
                        <>
                            <h1 className="display-5 fw-bold" style={{color:"white", margin:"5px"}}>{info.name}</h1>
                            <p className="text-center m-10" style={{color:"white"}}>The characters in Star Wars are key to the conflict between good and evil. Heroes like Luke Skywalker and Leia Organa fight for justice, while villains like Darth Vader and Darth Maul seek power through the dark side of the Force. Throughout the saga, characters like Han Solo, Yoda, and Chewbacca face challenges that shape the fate of the galaxy, creating an epic story of sacrifice, loyalty, and redemption.</p>
                        </>
                    ) : (
                        <p>Personaje no encontrado.</p>
                    )}
                </div>
            </div>

                <hr style={{border : "2px solid red", margin: "20px 0"}}/>

                {info && (
                    <div className="row text-center text-danger fw-bold">
                        <div className="col-2"><p>Name</p> <p>{info.name}</p></div>
                        <div className="col-2"><p>Birth Year</p> <p> {info.birth_year}</p></div>
                        <div className="col-2"><p>Gender</p><p> {info.gender}</p></div>
                        <div className="col-2"><p>Height</p><p> {info.height}</p></div>
                        <div className="col-2"><p>Skin Color</p><p> {info.skin_color}</p></div>
                        <div className="col-2"><p>Eye Color</p><p> {info.eye_color}</p></div>
                    </div>
                 )}
        </div>
             
    
    );
};
