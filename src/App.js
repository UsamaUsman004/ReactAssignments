import './App.css'
import About from './Components/about.jsx';
import Slider from './Components/slider.jsx';
import FacebookPost from './Components/facebookPost';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Carousel, Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

export default function App() {
  return (
    <Router>
      <div>
        

        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/facebookpost">Facebook Post</Nav.Link>


              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>



        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/users">
            <Users />
          </Route>

          <Route path="/facebookpost">
            <FacebookPost />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Slider />
    </div>
    
  )
}


function Users() {
  return <h2>Users</h2>;
}