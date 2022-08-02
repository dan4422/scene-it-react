import { SET_RESULTS, SEARCH } from "./actions"

const defaultState = {
  movies: [],
  loading: false,
  searchTerm: '',
}

export const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    // TODO: add cases
    case SET_RESULTS:
      return {
        ...state,
        movies: action.results,
        loading: false,
      }
    case SEARCH:
      return {
        ...state,
        searchTerm: action.text,
        loading: true,
      }  

    default:
      return state
  }
}