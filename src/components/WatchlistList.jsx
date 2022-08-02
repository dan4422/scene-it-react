import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

function WatchlistList() {
  const watchlistList = useSelector(state => state.watchlist.movies)
  return (
    <Container className='mt-5'>
    <Row>
    {watchlistList && 
    watchlistList.map((movie, i) => 
    <Col xs={12} sm={12} md={6} lg={4} xl={3} key={i} className="mt-3">
      <MovieCard data={movie} />
    </Col>)}
    </Row>
  </Container>
  )
}

export default WatchlistList