import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

export default function App() {
    return (
        <Router class="App">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Nav.Link to="/" excact>
                    <Navbar.Brand>MyPage</Navbar.Brand>
                </Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink to="/" exact className="nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-link">About</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Container>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={AboutUs}/>
                </Switch>
            </Container>
        </Router>
    );
}