import React, { useEffect, useState, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Personas } from "../component/personajes";
import { Context } from "../store/appContext";
import { Planetas } from "../component/planetas";

export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(()=>{
		console.log(store.personas); 
	}, [store.personas]);
	

	return(
		<div className="container mt-5">

			<h1 className="text-start" style={{color:"red"}}>Characters</h1>
			
				<div className="row flex-row flex-nowrap" style={{overflowX:"auto"}} >
					{store.personas.map((persona)=> (
						<Personas key={persona.url} 
						uid={persona.url.replace("https://swapi.dev/api/people/", "").replace("/","")}
						name = {persona.name} 
						gender={persona.gender}
						hair_color={persona.hair_color} 
						eye_color={persona.eye_color}/>
						))}
					</div>

			<h1 className="text-start"style={{color:"red"}}>Planets</h1>

			<div className="row flex-row flex-nowrap" style={{overflowX:"auto"}} >
					{store.planetas.map((planeta)=> (
					<Planetas key={planeta.url} 
					uid={planeta.url.replace("https://swapi.dev/api/planets/", "").replace("/","")}
					name = {planeta.name} 
					population={planeta.population}
					terrain={planeta.terrain} 
					/>
					))}
				</div>
								
		</div>
	);
}
