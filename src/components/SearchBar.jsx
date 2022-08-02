import React, { useState } from 'react'
import { Button, Container, FloatingLabel, Form, InputGroup, Row, Col, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { search, setResults, startSearch } from '../redux/search/actions'

function SearchBar() {
  const dispatch = useDispatch()
  const [movie, setMovie] = useState('')
  const loading = useSelector(state => state.search.loading)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(startSearch(movie))
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputGroup size="lg">
          <FloatingLabel label="Search for a Movie Title" className='flex-grow-1'>
            <Form.Control size="lg" type="text" id='search'
              placeholder='Search for a Movie Title'
              value={movie}
              onChange={(e) => setMovie(e.target.value)} />
          </FloatingLabel>
          {loading ?  <Button type="submit" variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Searching...
          </Button>:<Button type="submit">Submit</Button>
          }
        </InputGroup>
      </Form>
    </Container>
  )
}

export default SearchBar