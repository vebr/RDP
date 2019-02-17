import React, { Component } from 'react';
import './App.css';
import { JumbotronHome } from './components/Jumbotron';
import { Container } from 'reactstrap';
import Footer from './components/Footer';
import { LoginPage } from "./components/Login"
import { SignUpPage } from "./components/Signup" 
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,} from 'reactstrap';


class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
     return (
     <div className="content">
            <Router>
            <Navbar light expand="md" className="top mb-3 navbar navbar-dark bg-dark">
          <NavbarBrand href="/">Auth</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
               <NavLink exact to="/" className="nav-link">
               Home
               </NavLink>
              </NavItem>
              <NavItem>
               <NavLink exact to="/login" className="nav-link">
               Login
               </NavLink>
              </NavItem>
              <NavItem>
               <NavLink exact to="/signup" className="nav-link">
               Sign Up
               </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container>
              <Route exact path="/" component={JumbotronHome} />
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />
          </Container>
          <Footer />
          </Router>
      </div>
     );
  }
}

export default App;