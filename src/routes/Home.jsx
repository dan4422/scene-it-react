import { Container, Form, Row, Col } from 'react-bootstrap'
import SearchBar from '../components/SearchBar'
import Results from '../components/Results'

function Home() {

  return (
    <>
      <h1 className='display-1 text-warning text-center mt-5'><Form.Label htmlFor="search">Scene-It</Form.Label></h1>
      <SearchBar/>
      <Results/>
    </>
  )
}

export default Home