import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Card, Button, Placeholder } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import LoadingCard from './LoadingCard'
import MovieCard from './MovieCard'

function Results() {
  const movies = useSelector(state => state.search.movies)
  const loading = useSelector(state => state.search.loading)
  return (
    <Container className='mt-5'>
      <Row>
        {loading ? 
        <>
        <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mt-3"><LoadingCard /></Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mt-3"><LoadingCard /></Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mt-3"><LoadingCard /></Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mt-3"><LoadingCard /></Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mt-3"><LoadingCard /></Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mt-3"><LoadingCard /></Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mt-3"><LoadingCard /></Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mt-3"><LoadingCard /></Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mt-3"><LoadingCard /></Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mt-3"><LoadingCard /></Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mt-3"><LoadingCard /></Col>
        <Col xs={12} sm={12} md={6} lg={4} xl={3} className="mt-3"><LoadingCard /></Col>
        </>
        :
        movies.map((movie, i) => <Col xs={12} sm={12} md={6} lg={4} xl={3} key={i} className="mt-3"><MovieCard data={movie} /></Col>)}
      </Row>
    </Container>
  )
}

export default Results