import React from 'react'
import { Card, Button, Placeholder } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch} from 'react-redux'
import { addToWatchlist, deleteFromWatchlist } from '../redux/watchlist/actions'


function MovieCard(props) {
  const dispatch = useDispatch()
  const { Title, Poster, Year, imdbID } = props.data
  const movies = useSelector(state => state.search.movies)
  const watchlist = useSelector(state => state.watchlist.movies)
  const foundMovie = watchlist.some(m => m.imdbID === imdbID)

  const addClick = (e) => {
    const addedMovie = movies.find(movie => movie.imdbID === imdbID)
    dispatch(addToWatchlist(addedMovie))
  }

  const deleteClick = (e) => {
    const deleteMovie = movies.find(movie => movie.imdbID === imdbID)
    dispatch(deleteFromWatchlist(deleteMovie))
  }

  return (
    <>
      <Card className="border border-dark" key={imdbID} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Poster} style={{ height: '25rem' }} />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Text>
            {Year}
          </Card.Text>
          {foundMovie ? <Button variant="primary" onClick={deleteClick}>Delete Movie from Watchlist</Button> :
          <Button variant="primary" onClick={addClick}>Add to Watchlist</Button>}
        </Card.Body>
      </Card>
    </>
  )
}

export default MovieCard