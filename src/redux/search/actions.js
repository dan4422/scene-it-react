export const SEARCH = 'search/SEARCH'
export const SET_RESULTS = 'search/SET_RESULTS'

// Search for keyword
export const search = (text) => {
  return {
    type: SEARCH,
    text,
  }
}

// Set Results from api
export const setResults = (results) => {
  return {
    type: SET_RESULTS,
    results
  }
}

// redux thunk function - function that returns a function
export const startSearch = (text) => {
  return (dispatch) => {
    dispatch(search(text))
    fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${text}`)
      .then(res => res.json())
      .then(data => {
        if (!(data.Search)) {
          alert(data.Error)
          return
        }
        dispatch(setResults(data.Search))
      })
  }
}
