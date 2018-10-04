import React from 'react';
import ReactDOM from 'react-dom';

class PokemonIndex extends React.Component{
  render () {
    return this.props.pokemon.map( pokemon =>{
      return (
        <div>

        <li>{pokemon.name}</li>
        <img src={pokemon.image_url} />
        </div>
      );

    });
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

}

export default PokemonIndex;
