export const ADDTOWATCHLIST = 'watchlist/ADDTOWATCHLIST'
export const DELETEFROMWATCHLIST = 'watchlist/DELETEFROMWATCHLIST'

export const addToWatchlist = (movie) => {
  return {
    type: ADDTOWATCHLIST,
    movie
  }
}

export const deleteFromWatchlist = (movie) => {
  return {
    type: DELETEFROMWATCHLIST,
    movie
  }
}