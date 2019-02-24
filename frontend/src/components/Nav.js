import React , { Component } from 'react';
import {NavLink} from "react-router-dom";
import { Nav,NavItem} from 'reactstrap';

class Navs extends Component {
    render() {
        return(
            <NavItem>
               <NavLink exact to={this.props.link} className="nav-link">
                {this.props.name}
               </NavLink>
            </NavItem>
        )
    }
}

class TopNavGuest extends Component {
    render() {
        return (
            <Nav className="ml-auto" navbar>
              <Navs link="/" name="Home"/>
              <Navs link="/login" name="Login"/>
              <Navs link="/signup" name="Sign Up"/>
            </Nav>
        )
    }
}


class TopNavUser extends Component {
    render() {
        return (
            <Nav className="ml-auto" navbar>
              <Navs link="/" name="Home"/>
              <Navs link="/profile" name="Profile"/>
               <NavItem onClick={this.props.logout}>
                <NavLink exact to="/logout" className="nav-link">
                Logout
                </NavLink>
               </NavItem>        
            </Nav>
        )
    }
}



export {TopNavGuest, TopNavUser};