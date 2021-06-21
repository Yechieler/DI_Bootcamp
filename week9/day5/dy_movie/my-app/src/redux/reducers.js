import {INIT_MOVIE,MOVIE_SELECTED} from './actions';
import {} from 'redux';

let initMovieState = {
  movies: [],
  details: ''
}

export const reducer = (state = initState,action = {}) => {
  switch (action.type) {
    case 'INIT_MOVIE':
      return {...state, movies:action.payload}
      break;
    case 'MOVIE_SELECTED':
      return {...state, details:action.payload}
    default:
      return {...state}
  }
}

export const movieDetails = (state,action={}) =>{
  switch (action.type){
    case MOVIE_SELECTED:
      return {...state, movies:action.payload}
    default:
      return {...state}
  }
}
