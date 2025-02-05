import { Persona } from "../component/personajes";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personas: [],
			favoritos:[],
			planetas:[],
		
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			toggleFavorite: (name) => {
				const store = getStore();
				console.log("nombre del favorito recibido: name")

				if(store.favoritos.includes(name)){
					console.log("ya lo tiene, se debe eliminar");
					setStore({ favoritos: store.favoritos.filter(fav => fav !== name)});
				}else{
					console.log("no lo tiene, se debe agregar")
					setStore({favoritos:[...store.favoritos, name]});
				}
				
			},

			loadSomeData: () => {
				
			fetch("https://swapi.dev/api/people")
			.then( (response)=> response.json() )
			.then( (data) => setStore({ personas: data.results}) )

			fetch("https://swapi.dev/api/planets")
			.then( (response)=> response.json() )
			.then( (data) => setStore({ planetas: data.results}) )


			},

		

			removefavotiro: (uid) => {
				const store = getStore();
				setStore({ favoritos: store.favoritos.filter(fav => fav.uid !== uid)});
			},
		
						
		}
	};
};

export default getState;
