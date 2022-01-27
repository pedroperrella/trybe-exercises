import React from "react";
import pokemons from "./data";

class Pokemon extends React.Component {
    render() {
        return(
            pokemons.map((pokemon) => (
                <div>
                    <h4>{pokemon.name}</h4>
                    <h5>{pokemon.type}</h5>
                    <p>{pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</p>
                    <img src={pokemon.image} alt={`Imagem do ${pokemon.name}`}/>
                </div>
            ))
        )
    }
}

export default Pokemon;