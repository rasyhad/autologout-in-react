import React, { Component } from "react";
import { Navbar, Nav} from 'react-bootstrap'; 
import { Route, Link, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from './login';


class NavBar extends Component {
  render() {
    return (
    <React.Fragment>
        <Router>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <NavLink activeClassName="active" to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/login" className="ml-2">Login</NavLink>
            </Nav>
            <Switch>
                <Route path="/login" component={Login} />
            </Switch>
            </Navbar.Collapse>
        </Navbar>
        </Router>
    </React.Fragment>
    );
  }
}
 
export default NavBar;

