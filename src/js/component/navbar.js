import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import starwars from "../../img/starwars.png";


export const Navbar = () => {
	const {store, actions} = useContext(Context); 
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	useEffect(()=> {
			setDropdownOpen(store.favoritos.length > 0); // si hay favoritos, abrir el dropdown
		}, [store.favoritos]);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
			<Link to="/" className="navbar-brand">
			<img src={starwars} alt="Star Wars Logo" style={{ height: "40px", marginRight: "10px" }} />
			</Link>

			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" 
					type="button" 
					data-bs-toggle="dropdown" 
					aria-expanded={isDropdownOpen ? "true" : "false"}
					>
						Favorites {store.favoritos.length}
					</button>
				
					<ul className="dropdown-menu" style={{display: isDropdownOpen ? "block" : "none"}}>
					{/*si no hay favoritos */}
					{store.favoritos.length === 0 ? (
						<li className="dropdown-item text-muted">No Favorites</li>
					) : (
						store.favoritos.map((fav, index) => (
							<li key={index} className="dropdown-item d-flex justify-content-between">
									{fav}{/*solo mostramos el nombre */}
									<FontAwesomeIcon icon={faTrash} className="ms-2" onClick={() => actions.toggleFavorite(fav)}/>
							</li>
					))
				)}
				</ul>
				</div>
			</div>
			</div>
		</nav>
	);
};
