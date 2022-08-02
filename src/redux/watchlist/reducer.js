import { ADDTOWATCHLIST, DELETEFROMWATCHLIST } from "./actions";

const defaultState = {
  movies: []
}

export const watchlistReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADDTOWATCHLIST: 
      return {
        ...state,
        movies: [action.movie,...state.movies]
      }
    
      case DELETEFROMWATCHLIST:
        return {
          movies: state.movies.filter((movie) => movie !== action.movie)
        }
    
    default:
      return state
  }
}