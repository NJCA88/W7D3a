import React from 'react';
import ReactDOM from 'react-dom';
import {receiveAllPokemon} from './actions/pokemon_actions';
import {requestAllPokemon} from './actions/pokemon_actions';
import selectAllPokemon from './reducers/selectors';
import {fetchAllPokemon} from './util/api_util';
import configureStore from './store/store';
import { HashRouter, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
      <Route path="/" component={PokemonIndexContainer} />
      </div>
    </HashRouter>
  </Provider>
)

document.addEventListener('DOMContentLoaded', () => {

  const rootEl = document.getElementById('root');
  const store = configureStore();
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  // window.selectAllPokemon = selectAllPokemon;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  ReactDOM.render(
    <Root store = {store}/>,
    rootEl);
});
