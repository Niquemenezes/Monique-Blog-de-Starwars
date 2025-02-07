import React, { useContext } from "react";
import "../../styles/home.css";
import { Personas } from "../component/personajes";
import { Context } from "../store/appContext";
import { Planetas } from "../component/planetas";
import { Vehiculos } from "../component/vehiculos";

export const Home = () => {

	const { store} = useContext(Context);
	

	return(
		<div className="container mt-5">

			<h1 className="text-start" style={{color:"red"}}>Characters</h1>
			
				<div className="row flex-row flex-nowrap" style={{overflowX:"auto"}} >
					{store.personas.map((persona, index)=> (
						<Personas 
							key={persona.url} 
							uid={persona.url.replace("https://swapi.dev/api/people/", "").replace("/","")}
							name = {persona.name} 
							gender={persona.gender}
							hair_color={persona.hair_color} 
							eye_color={persona.eye_color}
							index={index}
						/>
						))}
				
				</div>

			<h1 className="text-start"style={{color:"red"}}>Planets</h1>

			<div className="row flex-row flex-nowrap" style={{overflowX:"auto"}} >
				{store.planetas.map((planeta, index)=> (
					<Planetas 
						key={planeta.url} 
						uid={planeta.url.replace("https://swapi.dev/api/planets/", "").replace("/","")}
						name = {planeta.name} 
						population={planeta.population}
						terrain={planeta.terrain}
						index={index} 
					/>
					))}
			</div>

			<h1 className="text-start"style={{color:"red"}}>Vehículos</h1>

			<div className="row flex-row flex-nowrap" style={{overflowX:"auto"}} >
				{store.vehiculos.map((vehiculo, index)=> (
					<Vehiculos 
						key={vehiculo.url} 
						uid={vehiculo.url.replace("https://swapi.dev/api/vehicles/", "").replace("/","")}
						name={vehiculo.name}
						model={vehiculo.model}
						length={vehiculo.length}        
						manufacturer={vehiculo.manufacturer}
						index={index}
					/>
					)
					)}
				</div>

								
		</div>
	);
}
