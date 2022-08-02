import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home';
import { Routes, Route, Link, } from 'react-router-dom'
import MainNavbar from './components/MainNavbar';
import Watchlist from './routes/Watchlist';
import { Container, Stack } from 'react-bootstrap';

function App() {
  return (
    <>
    <Stack className='p-0 body vh-100'>
    <Container fluid className='p-0 body'>
      <MainNavbar />
      {/*Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </Container>
    </Stack>
    </>
  );
}

export default App;
