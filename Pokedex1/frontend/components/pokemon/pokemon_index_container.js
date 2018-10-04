import {connect} from 'react-redux';
import selectAllPokemon from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';
import {receiveAllPokemon} from '../../actions/pokemon_actions';
import {requestAllPokemon} from '../../actions/pokemon_actions';



const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => ({
  // requestAllPokemon: pokemon => dispatch(receiveAllPokemon(pokemon))
  requestAllPokemon: pokemon => dispatch(requestAllPokemon(pokemon))
});

// export default <PokemonIndex
//                   pokemon={state.entities.pokemon}
//                   requestAllPokemon={(pokemon) => dispatch(receiveAllPokemon())}
//                 />

export default connect(
  mapStateToProps, mapDispatchToProps
)(PokemonIndex);
