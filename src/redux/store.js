import { applyMiddleware, combineReducers, createStore } from 'redux'
import { searchReducer } from './search/reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { watchlistReducer } from './watchlist/reducer'

const localCache = (store) => (next) => (action) => {
  next(action)
  const state = store.getState()
  localStorage.setItem('scene-it-redux', JSON.stringify(state))
}

const rootReducer = combineReducers({
  // Reducers go here
  search: searchReducer,
  watchlist: watchlistReducer,
})

const defaultState = {
  search: undefined,
  watchlist: undefined,
}

export const store = createStore(
  rootReducer,
  JSON.parse(localStorage.getItem('scene-it-redux')) || defaultState,
  composeWithDevTools(applyMiddleware(thunk, localCache))
)